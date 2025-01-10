import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function Laodar() {
    useGSAP(()=>{
        let tl = gsap.timeline()

        tl.from(".loader h1",{

            opacity:0,
            stagger:.2,
            duration:1
        })
        tl.to(".loader h1",{
            marginLeft:"-10vw",
            opacity:0,
            stagger:.1,
            
        })
        tl.to(".loader",{
            marginTop:"-100%",
            duration:2,
            display:"none"
        })
    })

  return (
    <div className='w-full  text-white flex justify-center items-center loader h-screen bg-black fixed z-[99]'>
        <h1 className='text-[3vw]'>Stratic </h1>
        <h1 className='text-[3vw]'>Design</h1>
        <h1 className='text-[3vw]'>On</h1>
        <h1 className='text-[3vw]'>Demand</h1>
    </div>
  )
}

export default Laodar