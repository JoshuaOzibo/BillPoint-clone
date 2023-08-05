import React from 'react'
import classes from './About.module.css';
import NavLinks from '../../Haeder/NavLinks';
import MoreAboutUs from './MoreAboutUs';
import OurLeader from './OurLeader';
import OurOffice from './OurOffice';
import OurServices from './OurServices';
import SideBar from '../../Haeder/SideBar';
import FooterAbout from './FooterAbout';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
const About = () => {

  const selectSlider = useSelector(state => state.showSideBar);

  return (
    <div className='overflow-hidden'>
        <div className= {`${classes.showcase} h-[300vh]`}>

      <NavLinks />
      {selectSlider && <SideBar />}
        <div className=' flex pb-10 md:flex-row flex-col-reverse items-center container m-auto space-x-18 justify-center'>
          <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 20, opacity: 1}} transition={{duration: 1}} className='md:w-[45%] text-white px-10 md:px-0 md:mt-40 w-full space-y-5'>
              <h2 className='font-bold text-4xl'>Hi there, we’re Billpoint Technology</h2>
                <p className='w-[100%]'>Billpoint is a secure and reliable platform that streamlines bill 
                  payments and provides you with a seamless experience, allowing you to easily 
                  pay your electricity bills, education bills, airtime top-ups, cable TV 
                  subscriptions, data bundle top-ups, and internet bills - all in one place.
                </p>
                <button className='p-3 w-[180px] rounded-full text-[#ff7b24] bg-white'>Talk With us</button>
          </motion.div>

          <motion.div initial={{x: 50, opacity: 0}} whileInView={{x: 20, opacity: 1}} transition={{duration: 1}} className='md:w-[40%] w-[80%]'>
              <img className='z-0 opacity-1 relative' src="https://www.billpoint.co/assets/frontend/assets/images/mobile-app.png" alt="mobile img" />
          </motion.div>
        </div>
      </div>


          <MoreAboutUs />
          <OurLeader />
          <OurOffice />
          <OurServices />
          <FooterAbout />
          </div>
  )
}

export default About