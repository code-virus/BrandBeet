import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function Page5() {
    useGSAP(()=>{
        let tl=gsap.timeline({ scrollTrigger:{
            trigger:".page5",
            markers:false,
            start:"30% 40%",
            end:"120% 90%",
            scrub:3
        }
        })
tl.to(".text_filling",{
    width:"100%"
},"same")
tl.to(".text_filling1",{
    width:"100%",
    delay:.1
},"same")
    })
  return (
    <div className='w-full page5 h-[80vh] relative pt-[10vw] mt-[100vw] bg-[#efefef] pl-[2vw]'>
        <div className=' relative   h-10vw bg-red-300'>
        <h1 className='text-[7.5vw] absolute tracking-[-10px] text-black  opacity-15 w-fit'>Design services for</h1>
        <h1 className='text-[7.5vw] text_filling whitespace-nowrap w-5 overflow-hidden text-[#000000] absolute tracking-[-10px]'>Design services for</h1>
        </div>
        <div className=' relative top-[10vw] ml-[15vw]   h-10vw bg-red-300'>
        <h1 className='text-[7.5vw] absolute tracking-[-10px] text-black  opacity-15 w-fit'>profitable outcomes</h1>
        <h1 className='text-[7.5vw] text_filling1 whitespace-nowrap w-0 overflow-hidden text-[#000000] absolute tracking-[-10px]'>profitable outcomes</h1>
        </div>
    </div>
  )
}

export default Page5