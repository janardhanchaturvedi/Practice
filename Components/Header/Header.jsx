import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const data = JSON.parse(localStorage.getItem("userDetail"));
  const navigate = useNavigate();
  const LoginNavigate = () => {
    navigate("/login");
  };
  const SignupNavigate = () => {
    navigate("/signup");
  };
  const homeNavigate = () => {
    navigate("/");
  };
  // console.log(Object.values(data).length);
  const LoggedStatus = () => {
    if (!data) {
      return false;
    } else {
     return true;
    }
  };
  console.log(LoggedStatus());

  const LogoutNavigate = () => {
    localStorage.setItem("userDetail", JSON.stringify(""));
    setIsLoggedIn(false);
    navigate("/login");
  };
  console.log("====>",isLoggedIn);

  return (
    <>
      <div className="absolute top-0 right-0 object-right-top mt-2 mr-2">
        <button
          className=" p-2 m-1 bg-orange-400 text-black font-bold px-4"
          onClick={homeNavigate}
        >
          Home
        </button>
        <button
          className=" p-2 m-1 bg-orange-400 text-black font-bold px-4"
          onClick={LoggedStatus() ? LogoutNavigate : LoginNavigate}
        >
          {LoggedStatus() ? "Logout" : "Login"}
        </button>
        <button
          className="p-2 m-1 bg-orange-400 text-black font-bold px-4 "
          onClick={SignupNavigate}
        >
          SignUp
        </button>
      </div>
    </>
  );
}

export default Header;
