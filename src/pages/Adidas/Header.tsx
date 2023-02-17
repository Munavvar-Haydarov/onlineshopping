import React from "react";

import { HiChevronDown, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

import woman from "../../assets/img/woman.jpg";
const Header: React.FC = () => {
  return (
    <>
      <div className="w-[100%] flex items-center bg-[#6B6A67] box-shadow h-[80px] sticky top-0 left-0 z-10  ">
        <h1 className="text-3xl p-5 text-white mr-7">Sohalib</h1>
        <div className="dropdown dropdown-hover max-[900px]:hidden">
          <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
            Man
            <HiChevronDown className="ml-3 h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover max-[900px]:hidden">
          <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
            Woman
            <HiChevronDown className="ml-3 h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[30vw]"
          >
            <div className="flex justify-center items-center">
              <Link to="/shoe">
                <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5">
                  Shoes
                </h1>
              </Link>
              <a className="mr-4">Item 1</a>
              <img src={woman} className="w-[50%]" />
            </div>
            <li></li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover max-[900px]:hidden">
          <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
            New
            <HiChevronDown className="ml-3 h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[500px]"
          >
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5 mb-5">
                    NewArrival
                  </h1>
                </Link>
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5  mb-5">
                    Best Selling
                  </h1>
                </Link>
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5  mb-5   ">
                    Shoes
                  </h1>
                </Link>
              </div>
              <img src={woman} className="w-[50%]" />
            </div>
            <li></li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover dropdown-end min-[900px]:hidden ml-auto">
          <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
            <HiMenu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[150px]"
          >
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mb-5 w-[100px]">
                    Man
                  </h1>
                </Link>
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mb-5  w-[100px]">
                    Woman
                  </h1>
                </Link>
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white w-[100px]">
                    New
                  </h1>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;