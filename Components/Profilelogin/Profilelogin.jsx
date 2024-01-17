import React from 'react'
import { useLocation } from 'react-router-dom';

function Profilelogin() {
    const data = JSON.parse(localStorage.getItem('items'));
    const { pathname } = useLocation(); 
    console.log(data.name)

  return (
    <>
        <div className= ' absolute flex-col justify-center items-center max-wd-sm border-red-200 bg-purple-400'>
        {/* Name  */}
        
            <div>
            <div className=' text-blue-600 font-semibold flex blue-700 p-2'>
                <h5>Name</h5>
            </div>
            <div className='p-2 flex' >
                <input className='' value={data.name}  />
            </div>
            </div>
        {/* Email */}
            <div className='flex'>
                <h5 className=' text-blue-600 font-semibold  blue-700 p-2'>Email</h5>
            </div>
            <div className='flex p-2'>
                <input value={data.email} />
            </div>

        </div>

    </>
    
  )
}

export default Profilelogin