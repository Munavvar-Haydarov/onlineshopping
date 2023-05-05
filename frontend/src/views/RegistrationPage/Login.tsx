import { Label, TextInput, Checkbox } from "flowbite-react";
import { useDispatch } from "react-redux";
import { login, userinfo } from "../../store/user.reducer";
import { notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
const Login = () => {
  const loginDispatch = useDispatch<AppDispatch>();
  const islogin = useSelector(userinfo);
  console.log("islogin", islogin);
  const usenavigate = useNavigate();
  const userlogin = () => {
    let userEmail = document.getElementById("email_login") as HTMLInputElement;
    let userEmailTemp = userEmail.value;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let isEmailVaild = emailPattern.test(userEmailTemp);
    let userPassword = document.getElementById(
      "password_login"
    ) as HTMLInputElement;
    let userPasswordTemp = userPassword.value;
    if (!isEmailVaild) {
      notification.warning({
        message: "warning",
        description: "uncorrect email",
      });
    } else {
      if (!userPasswordTemp) {
        notification.warning({
          message: "warning",
          description: "uncorrect password",
        });
      } else {
        let data = {
          userEmail: userEmailTemp,
          password: userPasswordTemp,
        };
        loginDispatch(login(data));
        if (islogin) {
          usenavigate("/welcome");
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <form className="flex flex-col gap-4 mt-5 ">
          <div className="">
            <div className="mb-2 block ml-[10px]">
              <Label
                htmlFor="email"
                value="Email"
                className="text-white text-[1.25rem]"
              />
            </div>
            <TextInput
              id="email_login"
              // onChange={emailchangehandle}
              type="email"
              placeholder="love@products.com"
              required={true}
            />
          </div>
          <div className="">
            <div className="mb-2 block ml-[10px]">
              <Label
                htmlFor="password"
                value="Password"
                className="text-white text-[1.25rem]"
              />
            </div>
            <TextInput
              // onChange={passwordchangehandle}
              id="password_login"
              type="password"
              required={true}
            />
          </div>
          <div className="flex items-center text-white justify-between">
            <div className="flex items-center space-x-3">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-white text-[1.25rem]">
                Remember me
              </Label>
            </div>
            <div>
              <Label htmlFor="remember" className="text-white  text-[1.25rem]">
                Create account?
              </Label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={userlogin}
              className="text-white bg-[#7e6000] border border-transparent border-white hover:bg-blue-600 p-0.5 text-center font-medium focus:z-10 w-full md:w-[100px]"
            >
              <span className="flex justify-center items-center  text-[1.25rem] px-4 py-1">
                Login
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
