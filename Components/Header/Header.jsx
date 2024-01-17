import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const LoginNavigate = () => {
    navigate("/login");
  };
  const SignupNavigate = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="absolute top-0 right-0 object-right-top mt-2 mr-2">
        <button
          className=" p-2 m-1 bg-orange-400 text-black font-bold px-4"
          onClick={LoginNavigate}
        >
          Login
        </button>
        <button
          className="p-2 bg-orange-400 text-black font-bold px-4 "
          onClick={SignupNavigate}
        >
          SignUp
        </button>
      </div>
    </>
  );
}

export default Header;
