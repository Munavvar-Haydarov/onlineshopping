import React, { useEffect } from "react";
import { Alert, Card, notification } from "antd";
import { BagDetailList } from "../../interface/types";
import { add, bucketItems } from "../../store/bucket.reducer";
import { useDispatch } from "react-redux";

import "aos/dist/aos.css"; // import { BagDetailList } from "../../interface/types";
import { useSelector } from "react-redux";
interface cardProps {
  imgUrl: string;
  title: string;
  price: string;
  setBagList: React.Dispatch<React.SetStateAction<BagDetailList[]>>;
  bagList: BagDetailList[];
}
const { Meta } = Card;

const CardDetail: React.FC<cardProps> = ({
  imgUrl,
  title,
  price,
  setBagList,
  bagList,
}) => {
  const dispatch = useDispatch();
  const baglist = useSelector(bucketItems);
  useEffect(() => {
    console.log("bag", bagList.length);
  }, [bagList]);

  const addToBag = (imgUrl: string, title: string, price: string) => {
    let data = bagList;
    let cardview = {
      imgUrl: imgUrl,
      title: title,
      price: price,
      times: 1,
    };
    if (baglist.length) {
      console.error(data);
      console.error(cardview);
      let index = baglist.findIndex((d) => d.imgUrl == cardview.imgUrl);
      console.error("Index: ", index);
      if (index > -1) {
        console.log("Warrning!!!");
        notification.warning({
          message: "Warning!!!",
          description: "There is already an item in your basket",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      } else {
        dispatch(add(cardview));
        notification.success({
          message: "Success!!!",
          description: "Adding product to basket was successful",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      }
    } else {
      dispatch(add(cardview));
      notification.success({
        message: "success",
        description: "Adding product to basket was successful",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      console.log("data==", data);
    }
    console.log("cardview", cardview);
  };

  return (
    <div className="flex flex-col border border-red-300 p-2">
      <div className="image">
        <button
          className="absolute ease-linear  text-black font-bold border-blue-800 shadow-xl border p-2 opacity-100 rounded-full m-2 text-[0.875rem] hover:bg-black hover:opacity-100 hover:text-white"
          onClick={() => addToBag(imgUrl, title, price)}
        >
          Add To Bag
        </button>
        <img
          src={`${imgUrl ? imgUrl : `img/comming-soon.png`}`}
          className=""
          alt=""
        />
      </div>
      <div className="title font-medium line-clamp-1 text-ellipsis">
        {title}
      </div>
      <div className="price flex ">
        <label htmlFor="">price:</label>
        <label htmlFor="price" className=" text-[#ff0000] font-medium">
          {price}
        </label>
      </div>
    </div>
  );
};

export default CardDetail;
