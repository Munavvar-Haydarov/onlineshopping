import React from "react";
import "./home.scss";
import Global from "./Global";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BagDetailList, breandDetailq } from "../../interface/types";
interface GlobalProps {
  setBrandDetail: React.Dispatch<React.SetStateAction<breandDetailq>>;
  setLogoName: React.Dispatch<React.SetStateAction<string>>;
  sex: string;
  bagList: BagDetailList[];
}

const Home: React.FC<GlobalProps> = ({
  setBrandDetail,
  setLogoName,
  sex,
  bagList,
}) => {
  console.log("sex", sex);
  return (
    <>
      <Header sex={sex} bagList={bagList} />
      <div className="flex items-center justify-center ">
        <div className="max-w-[1440px] my-10 ">
          <Global
            setBrandDetail={setBrandDetail}
            setLogoName={setLogoName}
            sex={sex}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
