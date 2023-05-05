import React, { useEffect } from "react";

import { HiChevronDown, HiMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import { BagDetailList } from "../interface/types";
import { useSelector } from "react-redux";
import { bucketCount } from "../store/bucket.reducer";
import { notification } from "antd";
interface GlobalProps {
  sex: string;
  bagList: BagDetailList[];
}
const Header: React.FC<GlobalProps> = ({ sex, bagList }) => {
  const itemCount = useSelector(bucketCount);
  const usenavigate = useNavigate();
  const handleChange = () => {
    if (itemCount) {
      usenavigate("/Bag");
    } else {
      notification.warning({
        message: "Warning!!!",
        description: "There are no items in your basket",
      });
    }
  };
  return (
    <>
      <div className="w-[100%] flex items-center bg-[#004aaa] box-shadow h-[80px] sticky top-0 left-0 z-10 justify-between  ">
        <div className="flex justify-center items-center">
          <Link to="/welcome">
            <h1 className="text-3xl p-5 text-white mr-7">Sohalib</h1>
          </Link>

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
        <div
          className="text-white text-[2rem] font-bold p-2 pr-10 "
          onClick={handleChange}
        >
          <label htmlFor="" className="absolute  text-[0.875rem] mt-3 top-0">
            {itemCount}
          </label>
          <img src="img/basket.svg" className="text-white" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
