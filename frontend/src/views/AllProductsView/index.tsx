import React, { useEffect } from "react";
import ShopCard from "../../components/Category/ShopCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BagDetailList } from "../../interface/types";
interface nameListProps {
  sex: string;
  logoName: string;
  categoryName: string;
  branchName: string;
  branchUrl: string;
  setBagList: React.Dispatch<React.SetStateAction<BagDetailList[]>>;
  bagList: BagDetailList[];
}
const AllProductsView: React.FC<nameListProps> = ({
  sex,
  logoName,
  categoryName,
  branchName,
  branchUrl,
  setBagList,
  bagList,
}) => {
  useEffect(() => {}, [bagList]);

  return (
    <>
      <div className="flex justify-center flex-col  left-0 top-0 z-10 ">
        <Header sex={sex} bagList={bagList} />
        <ShopCard
          sex={sex}
          logoName={logoName}
          categoryName={categoryName}
          branchName={branchName}
          branchUrl={branchUrl}
          setBagList={setBagList}
          bagList={bagList}
        />
        <Footer />
      </div>
    </>
  );
};

export default AllProductsView;
