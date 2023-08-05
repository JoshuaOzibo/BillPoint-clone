import React from 'react'
import classes from './BecomeAgent.module.css';
import NavLinks from '../../Haeder/NavLinks';
import WhyBillPointA from './WhyBillPointA';
import stepsMobil from '../../Images/steps_mobile_app.png';
import TryBFooter from '../../Showcase/TryB&Footer';
import SideBar from '../../Haeder/SideBar';
import {useSelector} from 'react-redux';
import { motion } from 'framer-motion';
const BecomeAgent = () => {

  const selectSlider = useSelector(state => state.showSideBar);
  return (
    <div>
        <div className={classes.showcase}>
          <NavLinks />

          {selectSlider && <SideBar />}
          <div className='w-full overflow-hidden mt-[150px]'>
            <div className='md:w-[80%] md:p-0 lg:p-0 p-5 lg:pb-10 md:pb-10 pb-10 text-white container m-auto'>
              <h1 className='font-bold md:w-[60%] lg:text-4xl md:text-4xl text-3xl'>Become a Billpoint Agent.</h1>
              <p className='mt-3  lg:w-[48%] md:w-[45%] w-[90%] mb-8'> Earn high commissions and offer your 
                  customers reliable payments as a 
                  Billpoint Mobile Money 
                  agent. Download and sign 
                  up to the Billpoint Agent
                  app to get started!
              </p>
              <a className='border px-12 py-3 text-[#ff7b24] bg-white rounded-full' href="##">Get Started Now</a>
            </div>
          </div>
      </div>

      <WhyBillPointA />

      <div className='mt-20 pb-20 flex md:flex-row flex-col-reverse md:flex justify-center items-center container w-[80%] md:justify-between m-auto'>
        <motion.div initial={{opacity: 0, x:-50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className='md:w-[40%] w-[95%] md:mt-0 mt-16 md:mb-0 mb-10 md:m-0 m-auto'>
            <img src={stepsMobil} className="border border-[#ff7b24] rounded-full " alt="steps img" />
        </motion.div>

        <motion.div initial={{opacity: 0, x:50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className='md:w-[50%] w-[95%] m-auto'>
            <h2 className='font-bold  md:text-start text-center md:text-5xl text-3xl mb-6'>Become a<span className='text-[#ff7b24]'> BillPoint</span> agent in
                3 Simple Steps
                
            </h2>

            <div className='flex mb-5'>
                <div>
                <h1 className='border border-[#ff7b24] text-[#ff7b24] rounded-full p-2 mr-3 w-10 text-center'>1</h1>
                </div>
                <div className=''>
                    <h4  className='font-bold'>Sign Up on Billpoint Agent</h4>
                    <p>During application, 
                      provide all required information
                    </p>
                </div>
            </div>

            <div className='flex mb-5'>
                <div>
                <h1 className='border border-[#ff7b24] text-[#ff7b24] rounded-full p-2 mr-3 w-10 text-center'>2</h1>
                </div>
                <div>
                    <h4 className='font-bold'>Identity verification</h4>
                    <p>Provide any means of identification, 
                      National ID, NIN, Driver’s license, Voter’s 
                      card.
                    </p>
                </div>
            </div>

            <div className='flex'>
                <div>
                <h1 className='border border-[#ff7b24] text-[#ff7b24] rounded-full p-2 mr-3 w-10 text-center'>3</h1>
                </div>
                <div>
                    <h4 className='font-bold'>Submit your application</h4>
                    <p>Once you submit your application, 
                      your request will be reviewed and 
                      if approved you’ll get an acceptance 
                      to your Billpoint registered email.
                    </p>
                </div>
            </div>
            <button className='p-[10px] mb-16 md:w-[200px] w-[150px] rounded-full mt-8 border-2 hover:border-[#ff7b24] font-bold text-white border-white hover:text-[#ff7b24] hover:bg-white bg-[#ff7b24]'>Apply Now -</button>
        </motion.div>
    </div>

    <TryBFooter />
    </div>
  )
}

export default BecomeAgent