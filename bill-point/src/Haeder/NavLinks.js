import React from 'react';
import NavLogo from '../Images/logo.png';
import { Link } from "react-router-dom";
import Out from '../Outlet/Out';
import {  FcMenu } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {SliderAction} from '../Store/Store';
import { motion } from 'framer-motion';
const NavLinks = () => {

  const dispatchSlider = useDispatch()

  const clickHarmburger =() =>{
    dispatchSlider(SliderAction.clickShowSlider())
  }
  return (
    <motion.nav whileInView={{}} className='w-full  h-[110px] flex justify-center m-auto pt-5  text-white'>
        <div className='w-[100%] z-10 shadow-md h-[70px] flex -mt-3 container fixed rounded-full justify-between items-center p-2 pl-5 m-auto text-black bg-white'>
          <FcMenu onClick={clickHarmburger} size={34} className='cursor-pointer lg:hidden md:hidden rounded-[2px]  bg-[#ff7b24]' />
            <img className='ml-16 lg:ml-0 md:ml-0' src={NavLogo} alt="logo" />
          <ul className=' hidden space-x-4 md:flex items-center'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Faq">FAQ</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
              <li><Link to="/BecomeAnAgent">Become an Agent</Link></li>
              <li><Link to="/Terms">Terms</Link></li>
          </ul>
          <button className='border-2 p-3 ml-5 w-[178px] pointer border-[#ff7b24] rounded-full'>Download app <span className=''>-</span></button>
        </div>
    </motion.nav>
  )
}

export default NavLinks;