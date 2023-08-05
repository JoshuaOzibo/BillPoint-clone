import React from 'react'

import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {PiLinkedinLogoBold} from 'react-icons/pi';
import { motion } from 'framer-motion';

const MoreAboutUs = () => {
  return (
    <div className='py-20 w-full'>
        <div className='lg:flex container lg:p-0 p-10 m-auto md:flex items-center justify-center md:space-x-20 lg:space-x-20'>
            <motion.div className='lg:w-[40%] md:w-[95%] space-y-6'>
                <p className='font-bold text-lg'>More about us</p>
                <motion.h1 initial={{opacity:1, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} className='lg:text-5xl md:text-3xl text-2xl font-bold'>Linus Williams</motion.h1>
                <motion.div initial={{opacity:1, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.2}}>
                    <p> At Billpoint, our Leadership team is comprised of experienced and visionary 
                            professionals who are passionate about financial inclusion and dedicated to delivering innovative solutions to our customers.
                        </p>
                </motion.div>
                <motion.div initial={{opacity:1, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.3}}>
                    <p> Our team brings a wealth of expertise from diverse backgrounds in technology, finance, 
                        and business, and we are committed to driving our mission forward. We are focused on building a culture of excellence and collaboration,
                        where everyone is empowered to contribute to our success.
                    </p>
                </motion.div>
                <motion.div initial={{opacity:1, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.5}}>
                    <p> Our goal is to create a platform that meets the needs of our customers, and we are continually 
                        seeking ways to improve and innovate. We are proud of our team and the impact we are making in Africa and beyond.
                    </p>
                </motion.div>
                <div className='flex space-x-3 '>
                <div className='flex w-[50px] h-[50px] rounded-full bg-[#ffccaa] '>
                        <a href='##' className=' w-full h-full rounded-full pt-4 m-auto hover:bg-[#ff7b24] hover:text-[#ffccaa] flex justify-center text-[#ff7b24] cursor-pointer'><AiOutlineTwitter /></a>
                    </div>

                    <div className='flex w-[50px] h-[50px] rounded-full bg-[#ffccaa] '>
                        <a href='##' className=' w-full m-auto h-full rounded-full hover:bg-[#ff7b24] hover:text-[#ffccaa] pt-4 flex justify-center text-[#ff7b24] cursor-pointer'><FaFacebookSquare /></a>
                    </div>

                    <div className='flex w-[50px] h-[50px] rounded-full bg-[#ffccaa] '>
                        <a href='##' className=' w-full h-full rounded-full pt-4 m-auto hover:bg-[#ff7b24] hover:text-[#ffccaa] flex justify-center text-[#ff7b24] cursor-pointer'><AiFillInstagram /></a>
                    </div>

                    <div className='flex w-[50px] h-[50px] rounded-full bg-[#ffccaa] '>
                        <a href='##' className=' w-full m-auto flex h-full rounded-full pt-4 hover:bg-[#ff7b24] hover:text-[#ffccaa] justify-center text-[#ff7b24] cursor-pointer'><PiLinkedinLogoBold /></a>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className=' flex pt-10 justify-center'>
                <img className='rounded-full lg:w-[75%] border border-[#ff7b24] md:w-[100%] w-full' src="https://www.billpoint.co/assets/frontend/assets/images/linus-williams.png" alt="billLord" />
            </motion.div>
        </div>
    </div>
  )
}

export default MoreAboutUs