import React from 'react'
import { useLocation } from 'react-router-dom';
import './Profilelogin.css';

function Profilelogin() {
    const data = JSON.parse(localStorage.getItem('userDetail'));
    const { pathname } = useLocation(); 
    console.log(data.name)

  return (
    <>
        <div className= 'Center-div content-center drop-shadow-md rounded-xl border-red-200 bg-purple-400'>
        {/* Name  */}
        
            <div>
            <div className=' text-blue-600 font-semibold flex blue-700 p-2'>
                <h5>Name</h5>
            </div>
            <div className='p-2 flex ' >
                <input className=' font-semibold  rounded-md  py-2 
                ' value={data.name}  readOnly   />
            </div>
            </div>
        {/* Email */}
        <div>
            <div className='flex'>
                <h5 className=' text-blue-600 font-semibold  blue-700 p-2'>Email</h5>
            </div>
            <div className='flex p-2 font-semibold'>
                <input className='py-2 rounded-md' value={data.email} readOnly/>
            </div>
            </div>

        </div>

    </>
    
  )
}

export default Profilelogin