import React, { useEffect, useState } from "react";
import { BagDetailList } from "../../interface/types";
import CardDetail from "./CardDetail";

interface nameListProps {
  sex: string;
  logoName: string;
  categoryName: string;
  branchName: string;
  branchUrl: string;
  setBagList: React.Dispatch<React.SetStateAction<BagDetailList[]>>;
  bagList: BagDetailList[];
}
interface productslist {
  infoUrl: string;
  imgUrl: string;
  title: string;
  price: string;
}
const ShopCard: React.FC<nameListProps> = ({
  sex,
  logoName,
  categoryName,
  branchName,
  branchUrl,
  setBagList,
  bagList,
}) => {
  const [data, setData] = useState<productslist[]>([]);
  console.log("sex", sex);
  useEffect(() => {
    let catemp = categoryName.replaceAll(" & ", "_");
    let catemp1 = catemp.replaceAll(" ", "_");
    let brtemp = branchName.replaceAll(" & ", "_");
    let brtemp1 = brtemp.replaceAll(" ", "_");
    let brtUrl = branchUrl.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let data = {
      sex: sex,
      logoName: logoName,
      branchName: brtUrl,
    };

    sendData(data);
  }, []);
  async function sendData(data: any) {
    const response = await fetch("/api/products/allView", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "ngrok-skip-browser-warning": "any",
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    let temp = result;
    setData(temp);
    console.log(result);
  }
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 m-5">
          {data &&
            data.map((items, index) => (
              <CardDetail
                imgUrl={items.imgUrl}
                price={items.price}
                title={items.title}
                key={index}
                setBagList={setBagList}
                bagList={bagList}
              />
            ))}
        </div>
        <div className=" flex justify-center items-center m-5"></div>
      </div>
    </>
  );
};

export default ShopCard;
