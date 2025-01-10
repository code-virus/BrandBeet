import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function Page7() {
    useGSAP(()=>{
        let tl=gsap.timeline({ scrollTrigger:{
            trigger:".page7",
            markers:false,
            start:"50% 50%",
            pin:true,
            end:"420% 90%",
            scrub:1,
        }
    })
    tl.to(".our_work",{
        height:"60%",
        delay:"-1"
    },"same")
    tl.to(".our",{
        left:"-40%",
        top:"-27vw"
       
        
    },"same")
    tl.to(".work",{
        right:"40%",
        top:"26vw"
        
    },"same")
    tl.to(".window_div",{
        height:"60%",
      
    },"same")
    tl.to(".moving_div",{
        height:"100%"
    },"same")
        tl.to(".moving_div",{
            marginTop:"-375%"
        })
       
    })
    
  return (
    <div className='w-full page7 h-screen bg-[#0D0D11]  flex justify-center items-center'>
        {/* our text part*/}
        <div className='w-[60vw]   our_work z-10 absolute h-[0vh]  bg-transparent text-white'>
            <h1 className='absolute our text-[7vw] translate-y-[200%] translate-x-[150%] top-0 left-[37%]'>Our</h1>
            <h1 className='absolute work text-[6vw] bottom-0 translate-y-[-2%] translate-x-[210%] right-[35%]'>Work</h1>
            </div>
            <div className='   overflow-hidden  window_div relative w-[60%] h-[0%]  bg-[black]'>
                <div className='w-full h-[0%] flex  items-center flex-col duration-300 moving_div'>
<img  src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9fa4742b8e1f3b6f6_LAYOUT-7-p-1600.jpg" alt="" />
<img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044045bead03dffd01d_Frame%20427320116-p-2000.jpg" alt="" />
<img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8fa4742b8e1f3b6b8_LAYOUT-8-p-1600.jpg" alt="" /> 
<img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044ba579d6ccec1e3ac_HF%203-p-1600.jpg" alt="" />
<img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd82d6d25df67e7d4b8_LAYOUT-3-p-1080.jpg" alt="" /> 
<img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd842f7724f0665b2cd_LAYOUT-18-p-1080.jpg" alt="" />  
<img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044ba579d6ccec1e3ac_HF%203-p-1600.jpg" alt="" />  
</div>
            </div>
    </div>
  )
}

export default Page7