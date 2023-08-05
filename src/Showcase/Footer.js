import React from 'react';
import classes from '../Showcase/Footer.module.css'
import Logo from '../Images/logo.png'
const Footer = () => {
  return (
    <div className='lg:-mt-20 z-20 w-[100%] lg:flex text-white'>
        <div id={classes.joshua} className='m-auto bg-[#333]'>
        <div className='container lg:h-[40vh] h-[100vh] w-full joshua lg:flex md:h-[450px] lg:space-y-0 md:space-y-0 space-y-10 p-2 m-auto'>
            <div className='lg:flex md:space-x-10 lg:space-y-0 md:space-y-0 space-y-10  md:flex lg:space-x-12 lg-[w-30%]  md:mb-10 '>
                
                <div className='lg:flex md:flex w-full lg:w-[50%] md:w-[65%] block '>
                <div className='w-full  lg:w-[300px]'>
                    <img src={Logo} className='m-auto w-[70px]' alt="logo" />
                </div>
                    <p className=''>     
                            BillPoint is a leading payment service 
                            provider that enables users to easily and
                            securely pay for various bills and subscriptions, 
                            including electricity, internet, airtime, data 
                            bundles, education bills, cable TV, and more.
                            Address: 38 Aminu kano cres Abuja, Nigeria
                    </p>
                </div>


                <div className='lg:flex space-x-14 flex md:flex md:space-x-12 lg:space-x-10 '>
                        <div>
                            <h3>Services</h3>
                            <p>Data bundle purchases</p>
                            <p>Mobile airtime top-ups</p>
                            <p>Education bill payments</p>
                            <p>Betting services</p>
                            <p>Cable TV subscriptions</p>
                            <p>Utility Payment</p>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <p>About Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>Contact Us</p>
                        </div>
                </div>
            </div>

            <div className='lg:flex space-x-14 flex md:space-x-10  md:flex lg:space-x-10 '>
                <div>
                    <h3>Info</h3>
                    <p>(+234) 907 599 2464</p>
                    <p>Blordgroup@outlook.com</p>
                </div>
                <div>
                    <h3>Follow us</h3>
                    <p>Twiter</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                    <p>Whatsapp</p>
                </div>
            </div>
        </div>
        <hr className='p-2 mt-10'/>
            <div className='flex justify-between p-5'>
                <p className=''> &copy; 2023 Billpoint All rights reserved.</p>
                <div className='flex justify-between space-x-10'>
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer