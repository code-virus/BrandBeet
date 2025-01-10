import React from 'react'

function Footer() {
  return (
    <div className='w-full relative h-[90vh] bg-black flex justify-center flex-col text-white text-center items-center'>
      <h1 className='text-[7vw] tracking-[-10px] text-[#b9b9b9]'>Try us on for size</h1> 
      <h2 className='text-[1.4vw]'>Get a personal overview of how we work and the <br /> commercial impact of great design.</h2>
      <button className='bg-[#f0f0f0] text-black py-[1.3vw] px-[2.5vw] rounded-full mt-[3vw]'>Book a Demo</button>
      
      <p className='absolute bottom-4'> © Brandbeet 2024</p></div>

  )
}

export default Footer