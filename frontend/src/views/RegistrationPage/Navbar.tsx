import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
interface GlobalProps {}
const Navbar: React.FC<GlobalProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<boolean>(true);
  return (
    <div className="md:w-1/2">
      <div className="text-4xl flex justify-center mt-5 space-x-5">
        <button
          className={`text-[20px] md:text-[30px] ${
            activeTab
              ? `text-[#5b9ff8] border-b border-[#5b9ff8] `
              : `text-black`
          }`}
          onClick={() => setActiveTab(true)}
        >
          Login
        </button>
        <button
          className={`text-black text-[20px] md:text-[30px] ${
            activeTab
              ? `text-black`
              : `text-[#5b9ff8] border-b border-[#5b9ff8]`
          }`}
          onClick={() => setActiveTab(false)}
        >
          SignUp
        </button>
      </div>
      <div className="m-[20px] md:m-[10px]">
        {activeTab ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Navbar;
