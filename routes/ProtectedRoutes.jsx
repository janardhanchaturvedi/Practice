import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import Profilelogin from "../Components/Profilelogin/Profilelogin";

function ProtectedRoutes({ element: Element }) {
   
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Users = JSON.parse(localStorage.getItem("userDetail"));

  const navigate = useNavigate();
  console.log(Users);
  // const  {pathname} = useLocation();
  if (!Users) {
    // <Navigate to='/' />
    // navigate("/");
    console.log("=>");
    useEffect(() => navigate("/"),[]);
  } else {
    return (<Element />);
  }
}

export default ProtectedRoutes;
