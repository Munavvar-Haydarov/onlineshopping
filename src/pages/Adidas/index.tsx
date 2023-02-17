import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiMenu } from "react-icons/hi";
import { Carousel } from "flowbite-react";
import adidas_1 from "../../assets/img/adidas_1.jpg";
import adidas_2 from "../../assets/img/adidas_2.jpg";
import adidas_3 from "../../assets/img/adidas_3.jpg";
import shirt from "../../assets/img/shirt.jpg";
import "./adidas.scss";
import Header from "./Header";
const Adidas: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-[100%]">
        <Header />
        <div className="h-[calc(100vh-80px)]">
          <Carousel slide={true}>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-adidas_1 bg-cover bg-center">
              <div className="w-[30%] max-[500px]:hidden"></div>
              <div className="w-[40%] flex justify-center items-center">
                <blockquote className="text-4xl font-semibold italic text-center text-white">
                  See
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-[#231307] hover:text-white transition-[.5s] cursor-pointer">
                      Best Departments
                    </span>
                  </span>
                  We have
                </blockquote>
              </div>
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-adidas_2 bg-cover bg-no-repeat"></div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-adidas_3 bg-cover"></div>
          </Carousel>
        </div>
        <div className="flex flex-col justify-center itmes-center mt-[40px] p-10 max-[400px]:p-5">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl max-[400px]:text-2xl">Best Selling</h1>
            <h2 className="text-lg ml-auto btn btn-outline max-[400px]:text-sm">
              View All
            </h2>
          </div>
          <div className="flex mt-10 flex-wrap justify-center items-center">
            <Link to="/adidas/shirt">
              <div className="card cate-card p-10 bg-slate-300 w-[250px] h-[150px] flex justify-center itmes-center ml-auto mr-auto mt-8 bg-shirt bg-cover">
                <h1 className="text-center text-2xl font-bold">SHIRT</h1>
              </div>
            </Link>
            <div className="card p-10 cate-card bg-slate-300 w-[250px] h-[150px] flex justify-center itmes-center ml-auto mr-auto mt-8 bg-adidas_shoes bg-cover">
              <h1 className="text-center text-2xl font-bold ">SHOES</h1>
            </div>
            <div className="card p-10 cate-card bg-slate-300 w-[250px] h-[150px] flex justify-center itmes-center ml-auto mr-auto mt-8 bg-adidas_clothes bg-cover">
              <h1 className="text-center text-2xl font-bold">Clothes</h1>
            </div>
            <div className="card p-10 cate-card bg-slate-300 w-[250px] h-[150px] flex justify-center itmes-center ml-auto mr-auto mt-8 bg-adidas_caps bg-cover">
              <h1 className="text-center text-2xl font-bold">Caps</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adidas;