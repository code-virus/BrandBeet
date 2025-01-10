import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const Page4=( {id})=> {
    useGSAP(()=>{
        let tl=gsap.timeline({ scrollTrigger:{
            trigger:".page4",
            markers:false,
            start:"30% 40%",
            end:"120% 90%",
            scrub:3
        }

        })
        tl.to(".dedicated",{
            width:"1195px",
            duration:10
           
        },"same")
        tl.to(".disposal",{
            width:"822px",
            delay:4,
            duration:10
        },"same")
    })
  return (
    <div className={`w-full h-screen overflow-hidden bg-white relative bottom-[-105vw] ${id}`}>
        <h1 className='text-[2.5vw] opacity-30 flex justify-center mt-[7vw] tracking-[-5px]'>In summary..</h1>

        <div className='w-full h-[90vh] text-center bg-white flex-col relative  page4'>
            <h1 className='text-[8vw] tracking-[-14px] relative opacity-15 '>A dedicated team at   </h1>
            <h1 className='absolute dedicated text-[8vw] tracking-[-14px] mt-[-12vw] ml-[18.6vw]  text-black whitespace-nowrap overflow-hidden w-0' >A dedicated team at</h1>
           
            <h1 className=' text-[8vw] opacity-10 relative tracking-[-14px]'>your disposal.</h1>
            <h1 className='absolute disposal text-[8vw] tracking-[-14px] mt-[-12vw] ml-[28.3vw]  text-black whitespace-nowrap overflow-hidden w-0'>your disposal.</h1>
        </div>
    </div>
  )
}

export default Page4