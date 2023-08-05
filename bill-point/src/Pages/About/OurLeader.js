import React from 'react'
import { motion } from 'framer-motion'
const OurLeader = () => {
  return (
    <div className='py-10 bg-[#fff0e6]'>
        <div className='w-[60%] m-auto pt-10'>
            <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-5xl'>Our Leadership</h1>
            <p className=' text-center'> Meet our leadership team at Billpoint! We are passionate professionals 
                dedicated to financial inclusion and innovation, bringing diverse expertise in tech, 
                finance, and business to our platform.
            </p>
        </div>

        <div className='py-10 mt-20 p-10'>
            <div className='w-[90%] lg:space-y-0 md:space-y-0  space-y-10 lg:flex md:flex lg:space-x-10 container p-2 m-auto'>
                <div className='lg:flex lg:space-y-0 md:space-y-0  space-y-10  lg:space-x-10'>
                    <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} className=' p-3 lg:p-0 text-center'>
                        <img className='rounded-full border object-cover border-[#ff7b24] m-auto w-[90%]' src="https://www.billpoint.co/assets/frontend/assets/images/leaders/clinton.png" alt="img1" />
                        <h4 className='font-bold text-2xl'>Ojiosom Clinton</h4>
                        <p>General manager</p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} className=' p-3 lg:p-0 lg:pt-0 md:pt-10  text-center'>
                        <img className='rounded-full border object-cover border-[#ff7b24] m-auto w-[90%]' src="https://www.billpoint.co/assets/frontend/assets/images/leaders/obiage.png" alt="img2" />
                        <h4 className='font-bold text-2xl'>Jideofor Obiageli</h4>
                        <p>Chief accountant</p>
                    </motion.div>
                </div>

                <div className='lg:flex lg:space-y-0 md:space-y-0  space-y-10 lg:space-x-10'>
                    <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className=' p-3 lg:p-0 text-center'>
                        <img className='rounded-full border object-cover border-[#ff7b24] m-auto w-[90%]' src="https://www.billpoint.co/assets/frontend/assets/images/leaders/blessing.png" alt="img3" />
                        <h4 className='font-bold text-2xl'>Akpunonu Blessing</h4>
                        <p>Media/Manager</p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1}} className=' lg:pt-0 lg:p-0 md:pt-10 p-3 text-center'>
                        <img className='rounded-full object-cover border border-[#ff7b24] m-auto w-[90%]' src="https://www.billpoint.co/assets/frontend/assets/images/leaders/ujunwa.png" alt="img4" />
                        <h4 className='font-bold text-2xl'>Agudiegwu Ujunwa</h4>
                        <p>Branch manager</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurLeader