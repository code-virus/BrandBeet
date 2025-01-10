import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import Page4 from './Page4'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


function Page3() {

    useGSAP(()=>{
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:".pgae3",
                markers:false,
                start:"50% 10%",
                end:"120% 0%",
                scrub:3,
            }
        })
       
        tl.to(".overlay",{
            opacity:1,
            delay:-1
        })
    
    
    
    })
useGSAP(()=>{
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:".page3Center",
            markers:false,
            start:"50% 10%",
            end:"120% 0%",
            scrub:3,
        }
    })
   
    tl.to(".star",{
        rotate:12000,
        duration:1000
    })



})
useGSAP(()=>{
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:".star_moving",
            markers:false,
            start:"0% 80%",
            end:"-20% 20%",
            scrub:3,
            
        }
    })
    
    tl.to("h1 .star",{
        left:"42vw",
        rotate:360
    })



})

    
  return (
    <>
    <div className='w-full h-[33.8vh] relative  pgae3'>
    <div className='w-full h-[8.6vw] bg-[#0D0D11] absolute top-[9vw] flex items-center justify-around'>
        <img className='w-[2.4vw]' src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fee7b486cf8fa72268_Vector.svg" alt="" />
        <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fef884e67ba66aac09_Vector-1.svg" alt="" />
        <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178feb68adb8257d5b442_Vector-4.svg" alt="" />
        <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fe1889b6f78eb198ae_Vector-3.svg" alt="" />
        <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178feb68adb8257d5b442_Vector-4.svg" alt="" />
    </div>
    </div>
    <div className='w-full h-screen bg-white relative bottom-0 page3Center  flex'> <div className='w-[50%] h-[300%]   bg-white py-[8vw]  px-[2vw]'>
        <h1 className='text-[7.2vw] sticky top-[20%] font-medium tracking-[-10px] leading-[8vw]'>Expected <br /> Outcomes
        <img className='bg-[#f5f4f4] px-[2.4vw] star absolute   rounded-full py-[2.4vw] mt-[2vw] ml-[2vw]' src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg" alt="" /></h1>
      
    </div>
   
    <div className='w-[50%] h-[100vh] pt-[20vw] relative'>
        
       
        {/* <div className=' h-[180%] w-full  flex flex-col sticky  pt-[20vw] pl-[10vw]'> */}
        <div className='w-[98%] expected  '>
            <h1 className='text-[2.6vw] '> Growth and ROI</h1>
            <p className='text-[1.4vw] mt-[2.2vw] tracking-[-2px]'>Expect a team that looks at problems holistically. A team that designs solutions directly contributing to your revenue growth and business success - not just pretty pictures.</p>
        </div>
      
        <div className='w-[98%] mt-[6vw] expected1 '>
            <h1 className='text-[2.6vw]'> Top tier designers</h1>
            <p className='text-[1.4vw] mt-[2.2vw]'>Expect the 1% only. Recruited from a global talent pool you’ll have access to some truly talented designers. Heavily vetted - we’ve hired the best to serve the great.</p>
        </div>
        <div className='w-[98%] mt-[6vw] expected2 '>
            <h1 className='text-[2.6vw]'> Stress free design</h1>
            <p className='text-[1.4vw] mt-[2.2vw]'>Expect no extra charge if things need changing. It’s all about you. It’ll be iterated on until you are 100% happy. Once done expect design you and your mom can be proud of.</p>
        </div>
        <div className='w-[98%] mt-[6vw] expected3 '>
            <h1 className='text-[2.6vw]'> Flexible and scalable</h1>
            <p className='text-[1.4vw] mt-[2.2vw]'>Expect flexibility and fluidity. Pause or cancel anytime. Need more resources? No problem. You’ve just found your elastic design on demand team..</p>
        </div>
        <div className='w-[98%] mt-[6vw] expected4 '>
            <h1 className='text-[2.6vw]'> Streamlined process</h1>
            <p className='text-[1.4vw] mt-[2.2vw]'>Expect smooth and streamlined. Regain your time with an asynchronous meeting free workflow. Actively participate and witness your designs come to life with realtime updates.</p>
        </div>
        <div className='w-[98%] mt-[6vw] expected5 '>
            <h1 className='text-[2.6vw]'> Predictability</h1>
            <p className='text-[1.4vw] mt-[2.2vw]'>Expect peace of mind. Say goodbye to hidden costs and designers who are unavailable when you need them most. Expect reliable consistent quality that exceeds expectations</p>
        </div>
        </div>
    </div>
    {/* </div> */}
    <Page4 id={"star_moving"} />
    </>
  )
}

export default Page3