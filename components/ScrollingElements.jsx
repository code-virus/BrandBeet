import React from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Page2OverLay from './Page2OverLay'
import Laodar from './Laodar'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
 


function ScrollingElements() {

    useGSAP(()=>{
        let tl=gsap.timeline({
            scrollTrigger:{
                trigger:".page1",
                markers:false,
                start:"0% 0%",
                end:"80% -30%",
                pin:true,
                scrub:5

            }
        })
        tl.to(".rotate",{
            rotate: -25,
            scale:.7
        },"same")
        tl.to(".imgBox1",{
            marginTop:"-25vw",
            duration:5,
        },"same")
        tl.to(".imgBox2",{
            marginTop:"-30vw",
            duration:5,
        },"same")
        tl.to(".imgBox3",{
            marginTop:"-45vw",
            duration:5,
        },"same")
        tl.to(".imgBox4",{
            marginTop:"-30vw",
            duration:5,
        })
        tl.to(".imgBox5",{
            marginTop:"-35vw",
            duration:5,
        },"same")
       
        tl.to(".centerDiv",{
            backgroundColor:"#000000ce",
            duration:5,
            delay:.1
        },"overLay")
        tl.to(".centerText",{
            opacity:1,
            duration:5,
            delay:.3

        })
        tl.to(".fillLine",{
            width:"5vw",
            left:".5vw",
            duration:30
        },"overLay")

    })


  return (
    <>
    <div className='w-[100%] relative h-[100vh] z-0 bg-black '>
        
    <Navbar />

    <div className='w-full h-screen bg-black z-0 page1  overflow-hidden'>

        <div className='w-full h-screen  centerDiv bg-[#00000000] absolute z-10 flex justify-center items-center' >  <h1 className=' text-[9vw] opacity-0  text-white centerText'>Brandbeet</h1>
       <div className='bottom-16 absolute text-white text-center flex flex-col items-center '>
       <h1 className='uppercase text-[12px]'>scroll down</h1>
       <h1 className='w-[0vw] h-[3px] z-10   bg-white rounded-2xl absolute bottom-0 fillLine '></h1>
       <h1 className='w-[4.5vw] h-[4px] z-1  bg-[#ffffff64] rounded-2xl'></h1>
       </div>
        </div>
  
        <div className='w-[210%] z-1 h-[210vh] flex ml-[-50vw] gap-8 rotate '>


<div className='w-[20%] img_div imgBox1 h-[220vh]  flex flex-col gap-[5vw] overflow-hidden z-0 '>
<div className='w-full h-[25%] '>  <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044ba579d6ccec1e3ac_HF%203-p-1600.jpg" alt="" />  </div>
<div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd84ea0e4d87b20d630_LAYOUT-16-p-1080.jpg" alt="" />   </div>
<div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9fa4742b8e1f3b6f6_LAYOUT-7-p-1600.jpg" alt="" />   </div>
    <div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8192f7a51ade94ebb_LAYOUT-10-p-1080.jpg" alt="" />   </div>
</div>


<div className='w-[20%] img_div h-[200vh]  flex flex-col gap-[5vw]  mt-[-13vw] z-0 imgBox2'>

<div className='w-full h-[25%] '>   <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8f0d3c57c3311f16d_LAYOUT-1-p-1080.jpg" alt="" /> </div>
    <div className='w-full h-[28%] '>   <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044d7f493a4a7fe9f97_WSS%203-p-1600.jpg" alt="" />  </div>
    <div className='w-full h-[25%] '>  <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044ba579d6ccec1e3ac_HF%203-p-1600.jpg" alt="" />  </div>
    <div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd84ea0e4d87b20d630_LAYOUT-16-p-1080.jpg" alt="" />   </div>
</div>



<div className='w-[20%] img_div h-full  flex flex-col gap-[5vw] mt-[-12vw] imgBox3'>
<div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8207f66103ea6893d_LAYOUT-2-p-1080.jpg" alt="" />   </div>
    <div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9fa4742b8e1f3b6f6_LAYOUT-7-p-1600.jpg" alt="" />   </div>
    <div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8192f7a51ade94ebb_LAYOUT-10-p-1080.jpg" alt="" />   </div>
    <div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8106fa4f36fc39bb9_LAYOUT-17-p-800.jpg" alt="" />   </div>
</div>




<div className='w-[20%] h-full  flex flex-col gap-[5vw] mt-[-14.5vw] img_div imgBox4'>

<div className='w-full h-[25%] '>   <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd82d6d25df67e7d4b8_LAYOUT-3-p-1080.jpg" alt="" /> </div>
    <div className='w-full h-[25%] '><img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8fa4742b8e1f3b6b8_LAYOUT-8-p-1600.jpg" alt="" />    </div>
    <div className='w-full h-[25%] '>  <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9e3fe0c7e42cfe703_LAYOUT-13-p-2000.jpg" alt="" />  </div>
    <div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd842f7724f0665b2cd_LAYOUT-18-p-1080.jpg" alt="" />   </div>
</div>



<div className='w-[20%] img_div h-full imgBox5 flex flex-col gap-[2vw] mt-[-16vw]'>
<div className='w-full h-[25%] '>   <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8f0d3c57c3311f16d_LAYOUT-1-p-1080.jpg" alt="" /> </div>
    <div className='w-full h-[25%] '>   <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044d7f493a4a7fe9f97_WSS%203-p-1600.jpg" alt="" />  </div>
    <div className='w-full h-[25%] '>  <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9e3fe0c7e42cfe703_LAYOUT-13-p-2000.jpg" alt="" />  </div>
    <div className='w-full h-[25%] '> <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd842f7724f0665b2cd_LAYOUT-18-p-1080.jpg" alt="" />   </div>
</div>



        </div>
    </div>
       
    </div>

   
    </>
  )
}

export default ScrollingElements