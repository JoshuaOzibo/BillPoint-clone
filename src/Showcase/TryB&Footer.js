import React from 'react'


import Img1 from '../Images/mobile_app2 (1).png';
import img2 from '../Images/scan.png'
import google from '../Images/google_play.png';
import apple from '../Images/apple_store.png';
import Footer from './Footer';
const TryBFooter = () => {

  return (
    <div className='w-full overflow-hidden bg-[#ffefe5]'>
        <div className='flex space-y-10 mt-10 z-0 justify-center lg:space-y-0 items-center lg:flex-row flex-col-reverse m-auto w-[85%]'>

            <div className='lg:w-[400px] m-auto space-y-6 pl-10'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Try Billpoint for free on iOS and Android</h1>
                <div className='flex space-x-8 pb-10'>
                    <img src={google} className="cursor-pointer h-[40px]" alt="google" />
                    <img src={apple } className="cursor-pointer h-[40px]" alt="apple" />
                </div>
            </div>

            <div className='md:flex lg:-ml-[10px] -ml-[35px] m-auto lg:w-[50%] w-[400px] h-[500px] p-5'>
                <img src={Img1} className="" alt="img1" />
                <img src={img2} className=" h-[200px] hidden md:block ml-2 mt-[250px] lg:mt-[200px]" alt="img2" />
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default TryBFooter;