import React from "react";
import { Link } from "react-router-dom";
import "./welcome.scss";
import { userinfo } from "../../store/user.reducer";
import { useSelector } from "react-redux";
interface sexProps {
  setSex: React.Dispatch<React.SetStateAction<string>>;
}
const Welcome: React.FC<sexProps> = ({ setSex }) => {
  const user = useSelector(userinfo);
  console.log(user);

  return (
    <div className="flex justify-center bg-loginBg bg-cover items-center w-[100vw] h-[100vh] max-[650px]:flex-col">
      <Link to="/home">
        <div
          onClick={() => setSex("men")}
          className="bg-man_product w-[50vw]  max-[650px]:w-[100vw] max-[650px]:h-[50vh] h-[100vh] bg-cover flex justify-center items-center man-hover ease-in-out transition-[.3s] delay-150 hover:scale-[1.02] "
        >
          <h1 className="text-white text-6xl man-h1 max-[300px]:text-3xl"></h1>
        </div>
      </Link>
      <Link to="/home">
        <div
          onClick={() => setSex("women")}
          className="bg-woman_product w-[50vw] h-[100vh] max-[650px]:w-[100vw] max-[650px]:h-[50vh] bg-cover flex justify-center items-center transition-[.3s] delay-150 woman-hover ease-in-out  hover:scale-[1.02]"
        >
          <h1 className="text-white text-6xl transition-[.3s] delay-150 max-[300px]:text-3xl"></h1>
        </div>
      </Link>
      <span className=" text-[5rem]  absolute bottom-[43vh] font-bold  text-blue-700 drop-shadow-[20px]  shadow-red-900">
        sohalib
      </span>
    </div>
  );
};

export default Welcome;
