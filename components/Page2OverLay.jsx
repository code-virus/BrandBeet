import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import Navbar from './Navbar'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function Page2OverLay() {
    useGSAP(()=>{
        let tl=gsap.timeline({
            scrollTrigger:{
                trigger:".page3",
                markers:false,
                start:"0% 100%",
                end:"60% 90%",
                scrub:3
            }
        })
        tl.to(".overlay",{
            height:0,
            marginTop:"5vw",
            duration:10
           
            
        })
      
    })
    useGSAP(()=>{
        let tl=gsap.timeline({scrollTrigger:{
            trigger:".page2_center",
            markers:false,
            start:"15% 50%",
            end:"120% 40%",
            scrub:3,
        }})
        tl.to(".text_fill",{
            width:"100%"
        },"text")
        tl.to(".text_fill1",{
            width:"100%",
            delay:.1
        },"text")
    })
  return (
    <div className='w-full h-screen page3 overflow-hidden relative  bg-[#fff0] z-0  '>
         
        <div className='w-full h-[100px] mt-[-5vw] z-0  overflow-hidden flex  justify-center  relative'>
        <div className=' w-[150vw]  h-[750%]  overlay absolute z-0 rounded-[50%]  bg-[#ffffff2e]'></div>
        </div>
        <div className='w-full h-[80.8vh] page2_center z-0 bg-[#901b1b00] px-[3vw] flex flex-col relative justify-center'>
            
            <h1 className='text-[7.9vw] tracking-[-15px] text_fill absolute whitespace-nowrap overflow-hidden w-[1vw]'>Strategic design solutions</h1>
            <h1 className='text-[7.9vw] tracking-[-15px] opacity-[.1] absolute text-[#000000]'>Strategic design solutions</h1>
            <h1 className='text-[7.9vw] tracking-[-15px] z-10 ml-[18vw] relative opacity-[.1] mt-[20vw] text-[#000000]'>that fuel your bottom line.</h1>
            <h1 className='text-[7.9vw] tracking-[-15px] text_fill1 ml-[18vw] absolute mt-[20vw] overflow-hidden w-[0] text-nowrap'>that fuel your bottom line.</h1>

        </div>
        <div className='w-full h-[10vw] flex items-end'>
        <h1 className='absolute  tracking-[-2px] text-[1.7vw] left-[2%] text-black opacity-35'>Unlock profit with monthly design sprints.</h1>
        <div className='absolute right-[3vw] flex space-x-2'>
            <div><button className='text-[1vw] overflow-hidden bg-[#0D0D11] text-white py-5 px-10 rounded-full '>Book a demo</button></div>
            <div><button className='text-[1vw] bg-[#E1E1E1] text-black py-5 px-10 rounded-full'>View Pricing</button></div>

        </div>
        </div>
        
    </div>
  )
}

export default Page2OverLay