import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate =  useNavigate();
    const LoginNavigate = ()=>{
        navigate('/login')

    }
    const SignupNavigate = ()=>{
        navigate('/signup')

    }
  return (
    <>
    <div>Header</div>
    <button className="bg-orange-700 text-black font-bold px-4" onClick={LoginNavigate}>
        Login
    </button>
    <button onClick= {SignupNavigate}>
        SignUp
    </button>
    </>
  )
}

export default Header