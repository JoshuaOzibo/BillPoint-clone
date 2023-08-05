import React from 'react'
import stepsMobil from '../Images/steps_mobile_app.png';
import { motion } from 'framer-motion';
const Steps = () => {
  return (
    <div className='mt-20 flex overflow-hidden md:flex-row flex-col-reverse md:flex justify-center items-center container w-[80%] md:justify-between m-auto'>
        <motion.div initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1,}} className='md:w-[40%] w-[95%] md:mt-0 mt-16 md:mb-0 mb-10 md:m-0 m-auto'>
            <motion.img  src={stepsMobil} className="border border-[#ff7b24] rounded-full " alt="steps img" />
        </motion.div>

        <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x:0}} transition={{duration: 1,}} className='md:w-[50%] w-[95%] m-auto'>
            <h2 className='font-bold  md:text-start text-center text-2xl lg:text-5xl md:text-3xl mb-6'>3 Simple Steps to enjoy <span className='text-[#ff7b24]'>Billpoint.</span></h2>

            <div className='flex mb-5'>
                <div>
                <h1 className='border border-[#ff7b24] text-[#ff7b24] rounded-full p-2 mr-3 w-10 text-center'>1</h1>
                </div>
                <div className=''>
                    <h4  className='font-bold'>Download and install the app</h4>
                    <p>Visit your app store, 
                        search for "BillPoint" and 
                        download and install the app 
                        on your mobile device.
                    </p>
                </div>
            </div>

            <div className='flex mb-5'>
                <div>
                <h1 className='border border-[#ff7b24] text-[#ff7b24] rounded-full p-2 mr-3 w-10 text-center'>2</h1>
                </div>
                <div>
                    <h4 className='font-bold'>Sign Up on Billpoint for free</h4>
                    <p>Open the app and follow the quick and easy 
                        sign-up process. All you need is your basic 
                        personal information.
                    </p>
                </div>
            </div>

            <div className='flex'>
                <div>
                <h1 className='border border-[#ff7b24] text-[#ff7b24] rounded-full p-2 mr-3 w-10 text-center'>3</h1>
                </div>
                <div>
                    <h4 className='font-bold'>Add Funds and Pay Bills</h4>
                    <p>Once you're signed in, you can add funds to 
                        your account and start paying your bills. 
                        It's that simple!
                    </p>
                </div>
            </div>
            <button className='p-[10px] md:w-[200px] w-[150px] rounded-full mt-8 border-2 hover:border-[#ff7b24] font-bold text-white border-white hover:text-[#ff7b24] hover:bg-white bg-[#ff7b24]'>Get the app -</button>
        </motion.div>
    </div>
  )
}

export default Steps