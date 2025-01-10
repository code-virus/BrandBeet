import React from 'react'
import "../src/index.css"
import Alert from '@mui/material/Alert';
function Navbar() {

   

  return (
    <div className='w-[100%] fixed z-50  h-[4vw] bg-transparent text-white mix-blend-difference flex items-center justify-between px-20'>
        <div  className='z-10  h-[2.1vw] logoNav overflow-hidden'>
            <h1 className='text-[1.8vw] z-50 logo font-extrabold mix-blend-difference '>Animation</h1>
            <h1  className='text-[1.8vw] z-50 font-extrabold mix-blend-difference'>Animation</h1>
        </div>
        <div className='z-10 h-[1.2vw] text-white rightNav overflow-hidden'>
            <h2 className='text-[.9vw] rightLogo ' > Contact-abhikumar902453@gmail.com</h2>
            <h2  className='text-[.9vw] ' onClick={()=>{alert("")}}> Contact-abhikumar902453@gmail.com</h2>
        </div>
       
    </div>
  )

}

export default Navbar