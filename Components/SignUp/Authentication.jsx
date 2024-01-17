import React, { useEffect, useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import Profilelogin from "../Profilelogin/Profilelogin";

function Authentication() {
  const [signUpValue, setSignUpValue] = useState({});
  const [error, setError] = useState({});
  const { pathname } = useLocation();
  const navigate =  useNavigate();
 

  console.log(signUpValue);
  const handleSignUp = (event) => {
    setSignUpValue({ ...signUpValue, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: "" });
    console.log(`${event.target.name}`, event.target.value);
  };
  console.log(signUpValue);
  console.log(error);
  
  const Validation = () => {
    let error = {};
    let isValid = true;

    if (pathname == "/signup" && !signUpValue.name) {
      error.name = "Please Enter the Name";
      // console.log(error);
    }
    if (!signUpValue.email) {
      error.email = "Please Enter the Email";

      // console.log(error);
    }
    if (!signUpValue.password) {
      error.password = "Please Enter Your Password";
      // console.log(error);
    }
    if (pathname == "/signup" && !signUpValue.password_confirmation) {
      error.password_confirmation = "Please Enter the Confirm Password";
    } else if (
      pathname == "/signup" &&
      signUpValue.password != signUpValue.password_confirmation
    ) {
      error.password_confirmation = "Password and Confirm Password Not Match";
    }
    console.log(Object.values(error));
    if (Object.values(error).length == 0) {
      isValid = true;
    } else {
      isValid = false;
    }
  console.log(signUpValue);
    setError(error);
    return isValid;
  };
  //login validation
  const loginValidation = () =>{
    const data = JSON.parse(localStorage.getItem('items'));
    if(signUpValue.email == data.email && signUpValue.password ==  data.password){
      navigate('/Profile')

    }
  }

  //Handle Submit Button
  const handleSubmit = () => {
    

    if (Validation()) {
      localStorage.setItem("items",JSON.stringify(signUpValue))
      navigate("/login");
      {pathname== '/login' && loginValidation()}
     
     
      alert(pathname == "/signup" ? "signup Sucess" : "login Sucess")
      // alert('sucess')
    } else {
      alert("Not Sucess");
    }

    console.log("====>", error);
    
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div></div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            {pathname == "/signup" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="name"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                    onChange={handleSignUp}
                  />
                  <p>{error.name}</p>
                </div>
              </div>
            )}
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleSignUp}
                />
                <p>{error.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 "
                  onChange={handleSignUp}
                />
                <p>{error.password}</p>
              </div>
            </div>
            {pathname == "/signup" && (
              <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Confirm Password
                  <div className="flex flex-col items-start">
                    <input
                      type="password"
                      name="password_confirmation"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      onChange={handleSignUp}
                    />

                    <p>{error.password_confirmation}</p>
                  </div>
                </label>
              </div>
            )}

            <div className="flex items-center justify-end mt-4">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase  bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                {pathname == "/signup" ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
