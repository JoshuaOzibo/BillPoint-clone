import React from 'react'
import logo1 from '../../Images/ServiceLogos/service1.svg';
import { motion } from 'framer-motion';
const WhyBillPointA = () => {
  return (
    <div className='py-10 bg-[#fff6f0]'>
        <div  className='lg:w-[58%] space-y-5 md:space-y-5 lg:space-y-0 md:p-0 lg:p-0 p-5 md:w-[40%] m-auto'>
            <h1 className='lg:text-5xl md:text-3xl text-2xl text-center pb-5 font-bold'>Why <span className='text-[#ff7b24]'>Billpoint</span> agent</h1>
                <p className='text-center'> Join our network of agents and 
                    become a part of the Billpoint 
                    family. Self-register on our app or 
                    fill out our call back form to start 
                    earning high commissions and growing 
                    your business today. We're currently 
                    accepting applications from all 
                    states in Nigeria.
                </p>
        </div>

        <div className='m-auto container w-full'>
            <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{duration: 1,}} className="md:flex md:space-y-0 space-y-10 p-10 md:space-x-10">
                
                <div className='  shadow-md bg-white w-full p-10 rounded-[20px] '>
                    <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src="https://www.billpoint.co/assets/frontend/assets/svgs/dollar2.svg" alt="logo1" />
                        <div className=''>
                            <h4 className='font-bold'>Earn More Money</h4>
                            <p> Join the Billpoint Agent program and start earning attractive 
                                commissions on every transaction you make. With our low pricing, 
                                you can save money while growing your business.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='shadow-md bg-white w-full p-10 rounded-[20px] '>
                <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src="https://www.billpoint.co/assets/frontend/assets/svgs/contact.svg" alt="logo1" />
                        <div className=''>
                            <h4 className='font-bold'>High Commissions, Low Pricing</h4>
                            <p> Whether you're just getting started or 
                                have complex business requirements, we 
                                have the solution for you! Financing options available.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{duration: 1,}} className='md:flex md:-mt-0 -mt-[30px] md:space-y-0 space-y-10 p-10 md:space-x-10'>
                <div className=' shadow-md bg-white w-full p-10 rounded-[20px]  '>
                <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src='https://www.billpoint.co/assets/frontend/assets/svgs/support.svg' alt="logo1" />
                        <div className=''>
                            <h4 className='font-bold'>Great Support To Help You</h4>
                            <p> As a Billpoint agent, you'll have a dedicated 
                                sales manager and 24/7 customer support. Your 
                                sales manager will work with you to ensure success, 
                                and our support channels are always available to 
                                provide assistance when needed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='shadow-md bg-white w-full p-10 rounded-[20px] '>
                <div className='lg:flex md:m-auto justify-center items-center flex md:block'>
                        <img className='-ml-[40px] pl-2 lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src="https://www.billpoint.co/assets/frontend/assets/svgs/value-added.svg" alt="logo1" />
                        <div className=''>
                            <h4 className='font-bold'>Value Added Services</h4>
                            <p> In addition to payment processing, 
                                we provide you with a suite of 
                                business management tools to help 
                                you expand your customer base and 
                                increase your revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default WhyBillPointA