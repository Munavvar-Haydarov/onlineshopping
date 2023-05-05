import React from "react";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import { BagDetailList, Branch, breandDetailq } from "../../../interface/types";

interface GlobalProps {
  categoryName: string;
  bagList: BagDetailList[];
  sex: string;
  brandDetail: breandDetailq;
  setBranchName: React.Dispatch<React.SetStateAction<string>>;
  branchList: Array<Branch>;
  setBranchUrl: React.Dispatch<React.SetStateAction<string>>;
}
const Ashirt: React.FC<GlobalProps> = ({
  sex,
  setBranchName,
  branchList,
  categoryName,
  setBranchUrl,
  bagList,
}) => {
  const handleChange = (branchName: string, branchUrl: string) => {
    setBranchName(branchName);
    setBranchUrl(branchUrl);
  };
  return (
    <>
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Header sex={sex} bagList={bagList} />
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center flex-col flex-wrap w-[100%]">
                <div className="flex justify-center items-center flex-col w-[100%] mt-5">
                  <h1 className="mb-5 font-bold text-4xl text-[#151d28] max-[770px]:text-xl max-[770px]:flex">
                    {categoryName.toUpperCase()}
                    <br className="block md:hidden" />
                    <span className="relative max-[770px]:ml-2">
                      <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                        {" "}
                        Branch
                      </span>
                      <span className="cursor-effect absolute -bottom-0 left-0 -top-1 inline-block bg-white  w-full animate-type will-change"></span>
                    </span>
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1440px] m-5 ">
                    {branchList.map((item, index) => (
                      <Link to={"/AllProductsView"} key={index}>
                        <div
                          className=" text-center border border-black hover:scale-[1.02] hover:text-[#355200] hover:border-2 hover:border-[#355200] pb-4 transition hover:shadow-xl "
                          onClick={() => handleChange(item.title, item.url)}
                        >
                          <img
                            src={
                              "/img/categoryImgList/" +
                              sex +
                              item.title
                                .toLowerCase()
                                .replace(/[^\p{L}]/gu, "") +
                              ".jpg"
                            }
                            className="  w-full 2xl:h-[250px] xl:h-[230px] lg:h-[210px] md:h-[200px] h-[170px] "
                            alt=""
                          />
                          <label
                            htmlFor=""
                            className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] font-bold line-clamp-1 "
                          >
                            {item.title}
                          </label>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ashirt;
