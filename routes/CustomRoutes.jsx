import React from 'react'
import Login from '../Components/login/login'
import SignUp from '../Components/SignUp/SignUp'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'

function CustomRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<SignUp/>} />
        <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default CustomRoutes