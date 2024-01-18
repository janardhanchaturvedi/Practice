import React from "react";

import Login from "../Components/login/login";
import SignUp from "../Components/SignUp/Authentication";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Components/Home/Home";
import Authentication from "../Components/SignUp/Authentication";
import Profilelogin from "../Components/Profilelogin/Profilelogin";
import ProtectedRoutes from "./ProtectedRoutes";
import Table from "../Page/Table";


function CustomRoutes() {
  
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/signup" element={<Authentication />} />
      <Route path="/table" element={<Table/>} />
      <Route path="/profile" element={<ProtectedRoutes element={Profilelogin} />}/>

    </Routes>
  );
}

export default CustomRoutes;
