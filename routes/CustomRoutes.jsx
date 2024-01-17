import React from 'react'

import Login from '../Components/login/login'
import SignUp from '../Components/SignUp/Authentication'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Authentication from '../Components/SignUp/Authentication'
import Profilelogin from '../Components/Profilelogin/Profilelogin'

function CustomRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<Authentication/>} />
        <Route path="/Signup" element={<Authentication/>} />
        <Route path="/" element={<Profilelogin/>} />
        <Route path="/Profile" element={<Profilelogin/>} />
    </Routes>
  )
}

export default CustomRoutes