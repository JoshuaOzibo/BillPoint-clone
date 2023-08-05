import React from 'react';
import classes from './Showcase.module.css';
import NavLinks from '../Haeder/NavLinks';
import ShowcaseImg from '../Images/hero_mobile_app.png';

import google from '../Images/google_play.png';
import apple from '../Images/apple_store.png';
import SideBar from '../Haeder/SideBar';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Showcase = () => {

  const selectSlider = useSelector(state => state.showSideBar);

  return (
    <div className={classes.showcase}>
        
        <NavLinks />
        {selectSlider && <SideBar />}
        <div className=' -mt-8 w-[80%] flex md:flex-row lg:space-x-20 md:space-x-20 flex-col-reverse space-y-6 md:justify-between justify-center items-center text-white text-center container m-auto '>
           <motion.div initial={{opacity: 0, x: -100,}} whileInView={{opacity: 1, x: 0}}  transition={{duration: 0.5,}} className='space-y-4 md:text-start text-center'>
            <button className='border-2 lg:ml-7 bg-white text-black w-[310px] h-[48px] rounded-full'>
                  <span className='border text-white bg-[#ff7b24] p-[7px]  mr-[15px] -ml-[60px] rounded-full'>New</span>
                  Billpoint is live in Nigeria
            </button>

              <h1 className='w-[90%] md:text-start m-auto md:text-3xl text-2xl lg:text-5xl font-bold'>The Ultimate Bill-Paying Solution.</h1>
              <p className='w-[70%] md:text-start md:ml-6 text-center m-auto'>Our platform makes paying bills easy and hassle-free.</p>

              <div className='flex md:text-start md:justify-start justify-center md:ml-5 text-center space-x-4'>
                <img src={google} alt="google" />
                <img src={apple} alt="apple" />
              </div>
           </motion.div>

           <div className='md:w-[65%] w-[70%]'>
              <motion.img initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: {
          type: "spring",
          damping: 6,
          stiffness: 80,
          restDelta: 0.001
        }
        
      }} 
      src={ShowcaseImg} alt="showcase"  />
           </div>
        </div>
    </div>
  )
}

export default Showcase;