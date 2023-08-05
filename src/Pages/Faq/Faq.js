import React from 'react';
import classes from './Faq.module.css';
import NavLinks from '../../Haeder/NavLinks';
import FaqQuest from './FaqQuest';
import TryBFooter from '../../Showcase/TryB&Footer';
import SideBar from '../../Haeder/SideBar';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Faq = () => {
  const selectSlider = useSelector(state => state.showSideBar);
  //#ff7b24
  return (
    <div>
        <div className={classes.showcase}>
        <NavLinks />
        {selectSlider && <SideBar />}
        <div className=' p-16 text-white flex mt-[120px] justify-center'>
          <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}}>
            <h1 className='lg:text-5xl pb-3 text-center md:text-3xl text-2xl font-bold'>Our FAQs</h1>
            <p className='text-center mb-4'>Here you can resolve any doubts that you may have</p>
            <div className='w-[100%] flex justify-center'>
              <a href="##" className='p-3 text-[#ff7b24] bg-[#fff] rounded-full px-16 border'>Talk with us</a>
            </div>
          </motion.div>
        </div>
      </div>

      <FaqQuest />
      <TryBFooter />
    </div>
  )
}

export default Faq