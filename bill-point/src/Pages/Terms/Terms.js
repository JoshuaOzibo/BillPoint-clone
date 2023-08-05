import React from 'react'
import classes from '../Terms/Terms.module.css';
import NavLinks from '../../Haeder/NavLinks';
import TryBFooter from '../../Showcase/TryB&Footer';
import SideBar from '../../Haeder/SideBar';
import { useSelector} from 'react-redux';
import { motion } from 'framer-motion';
const Terms = () => {

  const selectSlider = useSelector(state => state.showSideBar);
  return (
    <div>
      <div className={classes.showcase}>
        <NavLinks />
        {selectSlider  && <SideBar />}
        <div className='w-[100%] mt-[130px] text-white p-20'>
          <div className='m-auto container text-center space-y-6'>
            <motion.h1 initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className='lg:text-5xl font-bold md:text-4xl text-4xl'>Terms of Service</motion.h1>
            <motion.p initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}}>Update: 9-july, 2023</motion.p>
          </div>
        </div>
      </div>

      <div className='w-[100%] mt-10'>
        <div className='container pb-16 pt-10 w-[86%] space-y-10 m-auto'>
          <div>
            <p> Welcome to Billpoint, an online 
                payment platform that allows you to 
                pay your bills easily and securely. 
                Please read these Terms of Service 
                carefully before using the Billpoint 
                service. By using the Billpoint 
                service, you agree to be bound by 
                these Terms of Service, as well as 
                any additional terms and conditions 
                that may apply to specific features 
                or services offered by Billpoint. If 
                you do not agree to these Terms of 
                Service, you may not use the 
                Billpoint service.
              </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Description of Service</h4>
            <p> Billpoint is an online payment 
                platform that allows you to make 
                payments for various bills and 
                services, including electricity 
                bills, education bills, airtime 
                top-ups, cable TV subscriptions, 
                data bundle top-ups, and internet 
                bills. By using the Billpoint service, 
                you can easily and securely make 
                payments from your computer or mobile 
                device.
              </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Your Account</h4>
            <p> To use the Billpoint service, you 
                must create an account and provide 
                us with accurate and complete 
                information about yourself. You are 
                responsible for maintaining the 
                confidentiality of your account and 
                password, and for all activities that 
                occur under your account. You must 
                immediately notify Billpoint of any 
                unauthorized use of your account or 
                any other breach of security.
              </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Fees</h4>
            <p> Billpoint may charge fees for 
                certain services or transactions, 
                such as processing fees or 
                convenience fees. Any fees will be 
                clearly disclosed to you before 
                you complete a transaction.
            </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Prohibited Activities</h4>
            <p> You agree not to use the Billpoint 
                service for any illegal or 
                unauthorized purpose, including but 
                not limited to fraud, money 
                laundering, or terrorist financing. 
                You also agree not to use the 
                Billpoint service to harass, defame, 
                or threaten any person or entity, or 
                to upload, post, or transmit any 
                content that is unlawful, harmful, or 
                objectionable.
            </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Termination</h4>
            <p> Billpoint reserves the right to 
                terminate your account or restrict 
                your access to the Billpoint service 
                at any time, for any reason, without 
                notice. You may also terminate your 
                account at any time by contacting 
                Billpoint customer support.
            </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Intellectual Property</h4>
            <p> The Billpoint service and all 
                content and materials available 
                through the service, including but 
                not limited to text, graphics, 
                logos, images, and software, are 
                the property of Billpoint or its 
                licensors and are protected by 
                copyright, trademark, and other 
                intellectual property laws. You may
                not use any of these materials 
                without the express written consent 
                of Billpoint.
              </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Disclaimer of Warranties</h4>
            <p> The Billpoint service is provided 
                on an "as is" and "as available" 
                basis, without warranty of any kind, 
                express or implied. Billpoint does 
                not warrant that the service will be 
                uninterrupted or error-free, or that 
                the service will meet your 
                requirements or expectations.
              </p>
          </div>

          <div>
            <h4 className='font-bold text-lg text-[#ff7b24] pb-2'>Limitation of Liability</h4>
            <p>In no event shall Billpoint be</p>
          </div>
        </div>
      </div>
      <TryBFooter />
    </div>
  )
}

export default Terms