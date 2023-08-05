import React from 'react'
import Card from '../Card/Card';
import classes from '../Showcase/OurService.module.css';
import logo1 from '../Images/ServiceLogos/service1.svg';
import logo3 from '../Images/ServiceLogos/topup3.svg';
import logo4 from '../Images/ServiceLogos/service4 (1).svg';
import logo8 from '../Images/ServiceLogos/dollar8.svg';
import logo6 from '../Images/ServiceLogos/service6.svg';
import { motion } from 'framer-motion';
const OurSe = () => {
  return (
    <div className='bg-[#fff6f0] pb-[70px] z-0'>
        <div className='text-center space-y-6 mt-40'>
            <h3 className='font-bold pt-10 md:text-3xl text-2xl  lg:text-5xl'>Our Service</h3>
            <p className='md:w-[30%] w-[90%] m-auto'> Pay all your bills at once, 
                without leaving your home with 
                BillPoint's comprehensive range of 
                services.
            </p>
        </div>

        <div className='mt-[80px] z-0'>
            <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{duration: 1,}} className='md:flex z-0 container md:space-y-0 space-y-10 md:p-0 md:pl-0 m-auto md:justify-center md:space-x-8 md:m-auto'>
                <Card>
                    <div className='lg:flex lg:justify-center flex md:block w-[100%] md:p-0'>
                        <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo1} alt="logo1" />
                        <div>
                            <h3 className='font-bold'>Electricity Bills</h3>
                            <p className='w-[90%] md:w-full lg:w-full'>
                                Never miss a due date or wait in long 
                                lines again! Pay your electricity 
                                bills with ease using the Billpoint 
                                app.
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='lg:flex lg:justify-center flex md:block w-[100%] md:p-0'>
                        <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo1} alt="logo1" />
                        <div>
                            <h3 className='font-bold'>Electricity Bills</h3>
                            <p className='w-[90%] md:w-full lg:w-full'> 
                            Managing education expenses can 
                            be challenging, but with Billpoint, 
                            paying for tuition, fees, and other 
                            education-related bills is easy and 
                            stress-free
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='lg:flex lg:justify-center flex md:block w-[100%] md:p-0'>
                        <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo3} alt="logo1" />
                        <div>
                            <h3 className='font-bold'>Airtime Topup</h3>
                            <p className='w-[90%] md:w-full lg:w-full'> 
                            Stay connected with your loved ones and 
                            top up your airtime with Billpoint. 
                            It's quick, easy, and available 24/7!
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>




            <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{duration: 1,}} className='md:flex md:mt-10 container md:space-y-0 space-y-10 md:p-0 md:pl-0 m-auto mt-10 md:justify-center md:space-x-8 md:m-auto'>
            <Card>
                    <div className='lg:flex lg:justify-center flex md:block w-[100%] md:p-0'>
                        <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo4} alt="logo1" />
                        <div>
                            <h3 className='font-bold'>Betting</h3>
                            <p className='w-[90%] md:w-full lg:w-full'> 
                            Feeling lucky? Bet on your favorite 
                            sports games or events with Billpoint 
                            and enjoy the thrill of the game
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='lg:flex lg:justify-center flex md:block w-[100%] md:p-0'>
                        <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo8} alt="logo1" />
                        <div>
                            <h3 className='font-bold'>Cable TV Subscription</h3>
                            <p className='w-[90%] md:w-full lg:w-full'> 
                            Get uninterrupted access to your favorite 
                            TV shows and channels by subscribing 
                            to your cable TV with Billpoint
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='lg:flex lg:justify-center flex md:block w-[100%] md:p-0'>
                        <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo6} alt="logo1" />
                        <div>
                            <h3 className='font-bold'>Data Bundle Topup</h3>
                            <p className='w-[90%] md:w-full lg:w-full'> 
                            Stay connected to the internet no 
                            matter where you are with Billpoint's 
                            easy data bundle top-up service
                            </p>
                        </div>
                    </div>
                </Card>
            
        </motion.div>

        <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{duration: 1,}} className='md:flex md:mt-10 container md:space-y-0 space-y-10 md:p-0 md:pl-0 m-auto mt-10 md:justify-center md:space-x-8 md:m-auto'>
        <Card>
                    <div className='lg:flex lg:justify-center flex md:block w-[100%] md:p-0'>
                        <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo4} alt="logo1" />
                        <div>
                            <h3 className='font-bold'>Showmax subscription</h3>
                            <p className='w-[90%] md:w-full lg:w-full'> 
                            Never miss your favorite shows again! 
                            Subscribe to Showmax with Billpoint 
                            and enjoy unlimited access to top-rated 
                            TV series, movies, and more
                            </p>
                        </div>
                    </div>
                </Card>

            <div className='p-[40px] md:block flex lg:flex md:m-0 m-auto shadow-md bg-white text-black md:w-[42%] w-[90%] rounded-[13px]'>
            <img className='-ml-[40px] lg:m-auto lg:pt-0 md:pt-0 pt-5 flex lg:pr-3 lg:-ml-4 md:pr-0 pr-5 md:-mt-5 pb-5 md:m-auto' src={logo8} alt="logo1" />
                <div>
                    <h3 className='font-bold'>Internet Topup</h3>
                    <p className='w-[90%] md:w-full lg:w-full'> 
                        Whether you need internet for work, study, or entertainment, 
                        Billpoint makes it easy to top up your internet and stay connected
                    </p>
                </div>
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default OurSe