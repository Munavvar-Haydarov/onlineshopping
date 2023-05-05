import BrandPage from "../views/BrandPage";
import Ashirt from "../views/BrandPage/Sub/Ashirt";
import Bag from "../views/Bag";
import Detail from "../views/BrandPage/Detail";
import Delivery from "../views/Delivery";
import Home from "../views/Home";
import { useState } from "react";
import RegistrationPage from "../views/RegistrationPage";
import { Routes, Route } from "react-router-dom";
import AllProductsView from "../views/AllProductsView";
import Welcome from "../views/Welcome";
import { breandDetailq, Branch, BagDetailList } from "../interface/types";

const Routers = () => {
  const [brandDetail, setBrandDetail] = useState<breandDetailq>({
    LogoName: "",
    LogoUrl: "",
    MainCategory: [
      {
        categoryName: "",
        categoryUrl: "",
        branchname: [],
      },
    ],
  });

  //
  const [sex, setSex] = useState("");
  const [logoName, setLogoName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [branchList, setBranchList] = useState<Array<Branch>>([]);
  const [branchUrl, setBranchUrl] = useState("");
  const [bagList, setBagList] = useState<Array<BagDetailList>>([]);
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/welcome" element={<Welcome setSex={setSex} />} />
      <Route
        path="/home"
        element={
          <Home
            sex={sex}
            setBrandDetail={setBrandDetail}
            setLogoName={setLogoName}
            bagList={bagList}
          />
        }
      />
      <Route
        path="/Category"
        element={
          <BrandPage
            brandDetail={brandDetail}
            setCategoryName={setCategoryName}
            setBranchList={setBranchList}
            sex={sex}
            bagList={bagList}
          />
        }
      />
      <Route
        path="/Kinds"
        element={
          <Ashirt
            categoryName={categoryName}
            brandDetail={brandDetail}
            setBranchName={setBranchName}
            setBranchUrl={setBranchUrl}
            branchList={branchList}
            sex={sex}
            bagList={bagList}
          />
        }
      />
      <Route
        path="/AllProductsView"
        element={
          <AllProductsView
            sex={sex}
            categoryName={categoryName}
            logoName={logoName}
            branchName={branchName}
            branchUrl={branchUrl}
            setBagList={setBagList}
            bagList={bagList}
          />
        }
      />
      <Route
        path="/DetailView"
        element={<Detail sex={sex} bagList={bagList} />}
      />
      <Route path="/Bag" element={<Bag sex={sex} />} />
      <Route
        path="/Delivery"
        element={<Delivery sex={sex} bagList={bagList} />}
      />
    </Routes>
  );
};

export default Routers;
