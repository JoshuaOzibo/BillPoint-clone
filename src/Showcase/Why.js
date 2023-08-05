import React from 'react';
import Card from '../Card/Card';
import logo1 from '../Images/ServiceLogos/service1.svg'
import { motion } from 'framer-motion';
const Why = () => {
    
  return (
    <div className=' pt-10 bg-[#fff4ed]'>
        <div className='m-auto space-y-8 text-center'>
        
            <div>
                <h1 className='font-bold md:w-[55%] w-full m-auto md:text-center lg:text-5xl md:text-3xl text-2xl mt-10 mb-4'>Why choose <span className='text-[#ff7b24]'>Billpoint</span></h1>
                <p className='w-[45%] m-auto'>Esteem spirit temper too say 
                    adieus who direct esteem. It 
                    esteems luckily or picture 
                    placing drawing.
                </p>
            </div>
        </div>

        <div className='m-auto container w-full'>
            <div className="md:flex md:space-y-0 space-y-10 p-10 md:space-x-10">
                
                <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.7,}} className='  shadow-md bg-white w-full p-10 rounded-[20px] '>
                    <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo1} alt="logo1" />
                        <div className=''>
                            <h4>Simplify Your Payments with BillPoint</h4>
                            <p> With BillPoint, you can enjoy a hassle-free payment 
                                experience for all your essential bills and services.
                                We offer a simple, fast, and secure way to pay your 
                                utility bills, and even place bets all in one place.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.8,}} className='shadow-md bg-white w-full p-10 rounded-[20px] '>
                <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo1} alt="logo1" />
                        <div className=''>
                            <h4>Save Time and Effort</h4>
                            <p> Say goodbye to the tedious task of 
                                paying bills. BillPoint streamlines 
                                the process, allowing you to make 
                                payments with just a few clicks. 
                                Plus, our platform is available 24/7, 
                                so you can pay your bills whenever 
                                and wherever it’s convenient for you.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.9,}} className='md:flex md:-mt-0 -mt-[30px] md:space-y-0 space-y-10 p-10 md:space-x-10'>
                <div className=' shadow-md bg-white w-full p-10 rounded-[20px]  '>
                <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo1} alt="logo1" />
                        <div className=''>
                            <h4>Secure and Reliable</h4>
                            <p> Your security is our top priority 
                                at BillPoint. We use the latest 
                                technology to ensure that your 
                                personal and financial information 
                                is always safe and protected. Our 
                                platform is also reliable, with a 
                                seamless payment process that 
                                ensures your transactions are 
                                processed quickly and accurately.
                            </p>
                        </div>
                    </div>
                </div>

                <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y:0}} transition={{duration: 1,}} className='shadow-md bg-white w-full p-10 rounded-[20px] '>
                <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo1} alt="logo1" />
                        <div className=''>
                            <h4>Earn Rewards</h4>
                            <p> With BillPoint, you can earn rewards 
                                for every successful referral you 
                                make. Simply share your referral 
                                code with friends and family, and 
                                when they sign up and make their 
                                first deposit, you'll both receive 
                                a bonus. Plus, you'll get an 
                                additional bonus on your first 
                                referral's deposit
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Why