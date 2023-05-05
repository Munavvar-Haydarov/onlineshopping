import React, { useEffect, useState } from "react";
import { BagDetailList } from "../../interface/types";
import { bucketItems } from "../../store/bucket.reducer";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { userinfo } from "../../store/user.reducer";
import { TextInput } from "flowbite-react";
import nodemailer, { SendMailOptions } from "nodemailer";
import "../../assets/css/main.css";
import SendmailTransport from "nodemailer/lib/sendmail-transport";
interface GlobalProps {
  sex: string;
  bagList: BagDetailList[];
}
const Delivery: React.FC<GlobalProps> = ({ sex, bagList }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const items = useSelector(bucketItems);
  const info = useSelector(userinfo);
  console.log("info====", info);
  useEffect(() => {
    let totalPrice = 0;
    items.map((item) => {
      let price = item.price;
      totalPrice =
        totalPrice +
        parseInt(price?.replace(/[\s,.]|TL/gi, "") ?? "") * item.times;
      console.log(totalPrice);
      setTotalPrice(totalPrice);
    });
  }, items);
  const send = () => {
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.example.com",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: "robinzcalvin@gmail.com", // your email address
    //     pass: "Robinz*522", // your email password
    //   },
    // });
    // const mailOptions: SendMailOptions = {
    //   from: "robinzcalvin@gmail.com", // sender's email address
    //   to: "jamesyu1201@gmail.com", // recipient's email address
    //   subject: "Test Email", // email subject
    //   text: "This is a test email from Node.js with TypeScript", // email content
    // };
    // transporter.sendMail(mailOptions, (err, info) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });
  };
  return (
    <>
      <Header sex={sex} bagList={bagList} />
      <div className="flex justify-center m-5">
        <div className="flex flex-col md:flex-row max-w-[1440px]">
          <div className="flex flex-col md:w-2/3 mx-5">
            <span className=" text-2xl font-bold pt-10">CONTACT DETAILS</span>
            <span className=" text-xl pt-6 pb-4">
              We'll use these details to keep you informed on your delivery.
            </span>
            <TextInput
              id="email1"
              type="email"
              placeholder="love@products.com"
              required={true}
              value={info.userinfo.userEmail}
              className="pb-4"
            />
            <span className=" text-2xl font-bold pt-4 pb-4">
              SHIPPING ADDRESS
            </span>

            <div className="flex flex-col md:flex-row space-x-2">
              <TextInput
                id="email1"
                type="email"
                placeholder="love@products.com"
                required={true}
                className="w-1/2 pb-4"
              />
              <TextInput
                id="email1"
                type="email"
                placeholder="love@products.com"
                required={true}
                className="w-1/2 pb-4"
              />
            </div>

            <TextInput
              id="email1"
              type="email"
              placeholder="love@products.com"
              required={true}
              className=" pb-4"
            />
            <span className=" text-xl-lg pb-4">
              Start typing your street address or zip code for suggestions
            </span>
            <TextInput
              id="email1"
              type="email"
              placeholder="love@products.com"
              required={true}
              className=" pb-4"
            />
            <span className=" text-xl-lg">E.g. (123) 456-7890</span>
            <span className=" text-2xl font-bold pt-4 pb-4">
              DELIVERY OPTIONS ?
            </span>
            <div className="">
              <div className="hover:border border-solid border-black mb-4 p-3">
                <div className=" text-xl-lg font-bold">STANDARD DELIVERY</div>
                <div className="flex flex-row">
                  <img src="/img/car.png " alt="" className="w-[30px]" />
                  <span className=" text-xl-lg">
                    Enter your address to see when you'll get your order.
                  </span>
                </div>
              </div>
              <div className="hover:border border-solid border-black mb-4 p-3">
                <div className=" text-xl-lg font-bold">COLLECT IN STORE</div>
                <div className="flex flex-row">
                  <img src="/img/home.png " alt="" className="w-[30px]" />
                  <span className=" text-xl-lg">
                    Enter your address to see when you'll get your order.
                  </span>
                </div>
              </div>
            </div>
            <button className="md:w-[50%] flex items-center justify-center p-4 bg-black text-2xl text-white hover:text-gray-400">
              REVIEW AND PAY ⇒
            </button>
          </div>
          <div className="flex flex-col space-y-5 mx-5 md:w-1/3">
            <button
              onClick={() => send}
              className="mt-10 p-4 bg-black text-2xl text-white hover:text-gray-400"
            >
              CHECKOUT
            </button>

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
            <div className=" text-xl">ACCEPTED PAYMENT METHODS</div>
            <img
              src="/img/payimg.webp"
              alt=""
              className=" h-[70px] md:h-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
