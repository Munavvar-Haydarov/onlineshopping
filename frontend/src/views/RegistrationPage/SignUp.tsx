import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { notification } from "antd";
import { message } from "antd";

import { useSelector } from "react-redux";
import { userinfo } from "../../store/user.reducer";
import { signup } from "../../store/user.reducer";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const itemCount = useSelector(userinfo);

  useEffect(() => {
    console.log("userinfo", itemCount);
  });
  const navigat = useNavigate();
  const dispatch = useDispatch();

  const userSignUp = () => {
    let firstName = document.getElementById("firstName") as HTMLInputElement;
    let firstNameTemp = firstName.value;

    let lastName = document.getElementById("lastName") as HTMLInputElement;
    let lastNameTemp = lastName.value;
    let email = document.getElementById("email_signup") as HTMLInputElement;
    let emailTemp = email.value;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let isEmailVaild = emailPattern.test(emailTemp);

    let pass = document.getElementById("password_signup") as HTMLInputElement;
    let passTemp = pass.value;
    let comformPass = document.getElementById(
      "conform_Password"
    ) as HTMLInputElement;
    let comformPassTemp = comformPass.value;
    console.log(
      "signupinfo==>",
      firstNameTemp,
      lastNameTemp,
      emailTemp,
      passTemp,
      comformPassTemp
    );
    let notificationValue = [
      { message: "", description: "" },
      {
        message: "Worring!!!",
        description: "Input First name!",
      },
      { message: "Worring!!!", description: "Input Last name!" },
      { message: "Worring!!!", description: "Input email name!" },
      { message: "Worring!!!", description: "email format is uncorrect!" },
      {
        message: "Worring!!!",
        description: "Input password and comform password",
      },
      { message: "Worring!!!", description: "Input comform password" },
      { message: "Worring!!!", description: "Passwords don't match" },
      { message: "Success!!!", description: "Correct input" },
    ];

    console.log("firstname=", firstNameTemp);
    if (firstNameTemp == "") {
      notification.warning(notificationValue[1]);
    } else {
      if (lastNameTemp == "") {
        notification.warning(notificationValue[2]);
      } else {
        if (!isEmailVaild) {
          notification.warning(notificationValue[4]);
        } else {
          if (passTemp != comformPassTemp) {
            notification.warning(notificationValue[5]);
          } else {
            let userinfo = {
              userName: firstNameTemp + lastNameTemp,
              userEmail: emailTemp,
              password: passTemp,
            };
            notification.success(notificationValue[7]);
            dispatch(signup(userinfo));
            navigat("/");
          }
        }
      }
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <form className="flex flex-col space-y-4 mt-5">
          <div className="w-full">
            <div className=" flex flex-row space-x-2">
              <div className="w-1/2">
                <div className="mb-2 block ml-[10px]">
                  <Label
                    htmlFor="first Name"
                    value="First name"
                    className="text-[1.25rem] text-white"
                  />
                </div>
                <div>
                  <TextInput
                    id="firstName"
                    type="firstName"
                    placeholder="Input First Name"
                    required={true}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block ml-[10px]">
                  <Label
                    htmlFor="last Name"
                    value="Last name"
                    className="text-[1.25rem] text-white"
                  />
                </div>
                <div>
                  <TextInput
                    id="lastName"
                    type="lastName"
                    placeholder="Input Last Name"
                    required={true}
                    className="outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-2 block ml-[10px]">
              <Label
                htmlFor="email_signup"
                value="Email"
                className="text-[1.25rem] text-white"
              />
            </div>
            <TextInput
              id="email_signup"
              type="email"
              placeholder="love@products.com"
              required={true}
            />
          </div>
          <div className="">
            <div className="mb-2 block ml-[10px]">
              <Label
                htmlFor="password_signup"
                value="Password"
                className="text-[1.25rem] text-white"
              />
            </div>
            <TextInput id="password_signup" type="password" required={true} />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label
                htmlFor="conform_Password"
                value="Conform password"
                className="text-[1.25rem] text-white"
              />
            </div>
            <TextInput id="conform_Password" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2 ml-[10px] ">
            <Checkbox id="remember" className="text-[1.25rem] text-white" />
            <Label htmlFor="remember" className="text-[1.25rem] text-white">
              I agree to the User Agreement.
            </Label>
          </div>
          <div className="flex">
            <Label className="text-white text-[1.25rem] ml-2">LogIn</Label>
          </div>
          <div className="flex justify-center">
            <button
              onClick={userSignUp}
              type="button"
              className="text-white bg-[#977400] border border-transparent hover:bg-blue-600 p-0.5 text-center font-medium focus:z-10 border-white w-full md:w-[100px]"
            >
              <span className="flex text-[1.25rem] justify-center items-center rounded-md text-sm px-4 py-2">
                SignUp
              </span>
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
