import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, } from 'react-redux';
const SideBar = () => {
  const selectItems = useSelector(state => state.showSideBar);
  return (
    <div className='fixed z-10 shadow-md -mt-[32px]'>
        <div className=''>
        <ul className={selectItems ? ' md:hidden w-[170%] text-center rounded-r-[100px] pb-4 h-[130%] -translate-x-0 transition-all space-y-8 bg-[#853907] pt-[15px] block items-center' : 'transition-all -translate-x-[300px]'}>
              <li ><Link className='bg-[#ff7b24] px-[75px] hover:bg-[#cd5d13] transition-all hover:font-bold text-white hover:text-[#fff] p-2 rounded-full m-auto cursor-pointer' to="/">Home</Link></li>
              <li ><Link className='bg-[#ff7b24] px-[75px] hover:bg-[#cd5d13] transition-all hover:font-bold text-white hover:text-[#fff] p-2 rounded-full m-auto cursor-pointer' to="/About">About</Link></li>
              <li ><Link className='bg-[#ff7b24] px-[83px] hover:bg-[#cd5d13] transition-all hover:font-bold text-white hover:text-[#fff] p-2 rounded-full m-auto cursor-pointer' to="/Faq">FAQ</Link></li>
              <li ><Link className='bg-[#ff7b24] px-[60px] hover:bg-[#cd5d13] transition-all hover:font-bold text-white hover:text-[#fff] p-2 rounded-full m-auto cursor-pointer' to="/ContactUs">Contact Us</Link></li>
              <li ><Link className='bg-[#ff7b24] px-[35px] hover:bg-[#cd5d13] transition-all hover:font-bold text-white hover:text-[#fff] p-2 rounded-full m-auto cursor-pointer' to="/BecomeAnAgent">Become an Agent</Link></li>
              <li ><Link className='bg-[#ff7b24] px-[75px] hover:bg-[#cd5d13] transition-all hover:font-bold text-white hover:text-[#fff] p-2 rounded-full m-auto cursor-pointer' to="/Terms">Terms</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default SideBar