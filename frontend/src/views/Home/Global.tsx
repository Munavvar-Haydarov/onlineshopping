import React from "react";
import { Link } from "react-router-dom";
import brandMenListJson from "../../config/brandList_men.json";
import brandWomenListJson from "../../config/brandList_women.json";
import "./home.scss";
interface GlobalProps {
  setBrandDetail: React.Dispatch<
    React.SetStateAction<{
      LogoName: string;
      LogoUrl: string;
      MainCategory: any[];
    }>
  >;
  setLogoName: React.Dispatch<React.SetStateAction<string>>;
  sex: string;
}
const Global: React.FC<GlobalProps> = ({
  setBrandDetail,
  setLogoName,
  sex,
}) => {
  console.log("sex-global", sex);
  const logoBrandChange = (item: any) => {
    console.log("item", item);
    setBrandDetail(item);
    setLogoName(item.LogoName);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  justify-center items-center ">
        {sex == "men" &&
          brandMenListJson.map((item, index) => (
            <Link to="/Category" key={index}>
              <div
                className=" cus-card border border-black  m-2 p-2 flex flex-col justify-center items-center hover:scale-105 translate-all text-ellipsis "
                onClick={() => logoBrandChange(item)}
              >
                <div className=" 2xl:w-full h-[150px] md:h-[170px] xl:h-[200px] 2xl:h-[250px] flex justify-center items-center">
                  <img src={item.LogoUrl} alt="kappa" className="mb-5 p-5 " />
                </div>
                <p className="text-[1.5rem] sm:text-[1.55rem] md:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] font-bold mb-3 line-clamp-1 ">
                  {item.LogoName}
                </p>
              </div>
            </Link>
          ))}
        {sex == "women" &&
          brandWomenListJson.map((item, index) => (
            <Link to="/Category" key={index}>
              <div
                className=" cus-card border border-black  m-2 p-2 flex flex-col justify-center items-center hover:scale-105 translate-all text-ellipsis "
                onClick={() => logoBrandChange(item)}
              >
                <div className=" 2xl:w-full h-[150px] md:h-[170px] xl:h-[200px] 2xl:h-[250px] flex justify-center items-center">
                  <img src={item.LogoUrl} alt="kappa" className="mb-5 p-5 " />
                </div>
                <p className="text-[1.5rem] sm:text-[1.55rem] md:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] font-bold mb-3 line-clamp-1 ">
                  {item.LogoName}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Global;
