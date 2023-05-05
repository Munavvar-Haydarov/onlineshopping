import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";
import { InputNumber, Space, message, notification } from "antd";
import { Image } from "antd";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import {
  bucketItems,
  increaseNum,
  removeItem,
} from "../../store/bucket.reducer";
import { useDispatch } from "react-redux";

interface GlobalProps {
  sex: string;
}
const Bag: React.FC<GlobalProps> = ({ sex }) => {
  const items = useSelector(bucketItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let totalPrice = 0;
    items.map((item) => {
      let price = item.price;
      totalPrice =
        totalPrice +
        parseInt(price?.replace(/[\s,.]|TL/gi, "") ?? "") * item.times;
      console.log(totalPrice);
      // console.log('id====', ite)
      setTotalPrice(totalPrice);
    });
  }, items);

  const onNumberChange = (event: any, index: number) => {
    let data: Array<any> = [];
    items.map((item) => {
      console.log("temp", item);
      let temp = {
        title: item.title,
        price: item.price,
        times: item.times,
        imgUrl: item.imgUrl,
      };
      console.log("temp", temp);
      data.push(temp);
    });
    data[index].times = event;
    console.log("bucketdata--->,", data);
    dispatch(increaseNum(data));
  };
  const removeProductItem = (url: string) => {
    if (items) {
      let data: Array<any> = [];
      data = items;
      const nameToRemove = url; // the name of the object to remove
      const newItems = data.filter((data) => data.imgUrl !== nameToRemove);

      console.log("remove data", newItems);
      dispatch(removeItem(newItems));
      notification.success({ message: "remove success!" });
    } else {
      notification.error({ message: "there is nothing removing elenment" });
    }
  };
  console.log("buketlist", items);
  return (
    <>
      <div className="flex justify-center mx-5">
        <div className="flex flex-col md:flex-row max-w-[1440px] md:space-x-5 space-y-5 md:space-y-0 my-5 text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] ">
          <div className="flex flex-col md:w-2/3 space-y-4 ">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center border border-black rounded-lg p-2 space-x-2"
              >
                <Image
                  width={200}
                  height={200}
                  src={item.imgUrl}
                  preview={{
                    src: item.imgUrl,
                  }}
                  className=" w-[130px] sm:w-[150px] lg:w-[180px] xl:w-[210px] 2xl:w-[250px] h-[130px] sm:h-[150px] lg:h-[180px] xl:h-[210px] 2xl:h-[250px] rounded-full border shadow-xl"
                />
                <div className="flex flex-col  space-y-1 w-2/3">
                  <label
                    htmlFor=""
                    className="text-[0.75rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] font-bold"
                  >
                    {item.title}
                  </label>
                  <label
                    htmlFor=""
                    className=" text-red-700 font-bold text-[0.75rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem]"
                  >
                    Price: {item.price?.replace(/[\s,.]|TL/gi, "") ?? ""}
                  </label>
                  <label
                    htmlFor=""
                    className="flex items-center  text-blue-700 font-bold text-[0.75rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem]"
                  >
                    Times:
                    <Space>
                      <InputNumber
                        size="large"
                        id="num"
                        min={1}
                        max={20}
                        defaultValue={item.times}
                        onChange={(e) => onNumberChange(e, index)}
                      />
                    </Space>
                  </label>
                  <input type="hidden" value={index} />
                  <button
                    onClick={() => removeProductItem(item.imgUrl)}
                    className=" w-[150px] bg-black  text-white text-[1.25rem] rounded-lg py-2  hover:bg-blue-700 hover:text-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:w-1/3 ">
            <Link to={"/Delivery"}>
              <button className="w-full py-2 text-[1.25rem]  bg-black  text-white rounded-lg  hover:text-gray-400">
                CHECKOUT
              </button>
            </Link>

            <label htmlFor="" className="mt-5 text-[2rem] font-bold ">
              ORDER SUMMARY
            </label>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-row mt-5 justify-between mr-5 "
              >
                <label
                  htmlFor=""
                  className="text-[1.5rem] 2xl:text-[1.75rem]  font-medium"
                >
                  {item.times} item
                </label>
                <label
                  htmlFor=""
                  className=" text-red-700 font-medium text-[1.5rem] 2xl:text-[1.75rem] "
                >
                  {(item.price?.replace(/[\s,.]|TL/gi, "") ?? "") * item.times}
                </label>
              </div>
            ))}

            <div className="flex flex-row mt-5 justify-between mr-5 ">
              <label
                htmlFor=""
                className="text-[1.5rem] 2xl:text-[1.75rem]  font-medium"
              >
                Fee
              </label>
              <label
                htmlFor=""
                className=" text-blue-700 text-[1.5rem] 2xl:text-[1.75rem]  font-medium"
              >
                {Math.floor(totalPrice * 0.1)}TL
              </label>
            </div>
            <hr className="mr-5" />
            <div className="flex flex-row mt-5 justify-between mr-5">
              <label
                htmlFor=""
                className="text-[1.5rem] 2xl:text-[1.75rem]  font-bold"
              >
                Total
              </label>
              <label
                htmlFor=""
                className="text-[1.5rem] 2xl:text-[1.75rem]  font-bold"
              >
                {totalPrice + totalPrice * 0.1}TL
              </label>
            </div>

            <hr className="mr-5" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bag;
