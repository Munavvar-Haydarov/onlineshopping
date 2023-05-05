import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./adidas.scss";
import {
  BagDetailList,
  Branch,
  ShoeCategory,
  breandDetailq,
} from "../../interface/types";
interface GlobalProps {
  brandDetail: breandDetailq;
  sex: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  setBranchList: React.Dispatch<React.SetStateAction<Branch[]>>;
  bagList: BagDetailList[];
}

const BrandPage: React.FC<GlobalProps> = ({
  brandDetail,
  sex,
  setCategoryName,
  setBranchList,
  bagList,
}) => {
  useEffect(() => {
    console.log(
      "mainCategory",
      brandDetail.MainCategory.map((shoeCategory: ShoeCategory) => {
        return shoeCategory.categoryName;
      })
    );

    console.log(
      "branchnames",
      brandDetail.MainCategory.map((shoeCategory: ShoeCategory) => {
        return shoeCategory.branchname
          .map((branch) => {
            return branch.title;
          })
          .join(",");
      })
    );
  }, []);

  const handleChange = (items: string, branchName: Array<Branch>) => {
    setCategoryName(items);
    setBranchList(branchName);
  };

  return (
    <>
      <Header sex={sex} bagList={bagList} />
      <div className="flex flex-col w-[100%]">
        <div className="flex flex-col justify-center itmes-center  m-5">
          <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 gap-2 justify-center	w-full md:max-w-[1440px]  self-center items-center ">
            {brandDetail.MainCategory.map((items: ShoeCategory, index) => (
              <Link to="/Kinds" key={index} className="">
                <div
                  onClick={() =>
                    handleChange(items.categoryName, items.branchname)
                  }
                  className="cus-card border border-black  m-2 p-2 flex flex-col justify-center items-center hover:scale-105 translate-all"
                >
                  <img
                    src={
                      "/img/brandImg/" +
                      sex +
                      String(items.categoryName.toLowerCase()).replace(
                        /[^\p{L}]/gu,
                        ""
                      ) +
                      ".jpg"
                    }
                    className=" w-full 2xl:h-[250px] xl:h-[230px] lg:h-[210px] md:h-[200px] h-[170px] "
                    alt=""
                  />

                  <h1 className=" text-center text-xl md:text-2xl m-4 font-bold z-9 line-clamp-1 text-ellipsis">
                    {items.categoryName}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandPage;
