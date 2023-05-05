import React from "react";
import Navbar from "./Navbar";
const RegistrationPage = () => {
  return (
    <div className="flex flex-col bg-loginBg bg-cover -z-10 h-screen">
      <div className=" flex justify-center flex-col">
        <div className="flex  justify-end">
          <h1 className="mt-5 mr-5 p-2   text-white font-bold text-[50px] md:text-[80px]">
            Sohaib
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full md:w-1/2">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
