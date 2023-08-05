import React from 'react'
import classes from './Contact.module.css';
import NavLinks from '../../Haeder/NavLinks';
import TryBFooter from '../../Showcase/TryB&Footer';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {PiLinkedinLogoBold} from 'react-icons/pi';
import SideBar from '../../Haeder/SideBar';
import { useSelector } from 'react-redux';
const Contact = () => {

  const selectSlider = useSelector(state => state.showSideBar);
  return (
    <div>
        <div className={classes.showcase}>
        <NavLinks />
        {selectSlider && <SideBar />}
        <div className='w-[100%] text-white py-10'>
          <div className='w-[80%] justify-center lg:p-10 items-center lg:flex lg:space-x-5 container m-auto'>
            <div className='lg:w-[70%] w-[100%] lg:m-0 m-auto space-y-5'>
              <h1 className='font-bold lg:text-5xl md:text-4xl text-2xl'>Get in touch</h1>
              <p className='lg:w-[75%] w-[80%]'> Whether you want to request a 
                  demo, send in your CV or give us 
                  some feedback, we want to hear 
                  from you.
                </p>

                <div>
                  <p>Social</p>
                  <div className='flex space-x-4'>
                    <div className='flex w-[50px] border text-white h-[50px] rounded-full'>
                        <p className=' w-full m-auto flex hover:text-[#ff7b24] hover:bg-white h-[50px] rounded-full pt-4 justify-center text-white cursor-pointer'><AiOutlineTwitter /></p>
                    </div>
                    <div className='flex w-[50px] border text-white h-[50px] rounded-full'>
                        <p className=' w-full m-auto flex hover:text-[#ff7b24] hover:bg-white h-[50px] rounded-full pt-4 justify-center text-white cursor-pointer'><FaFacebookSquare /></p>
                    </div>
                    <div className='flex w-[50px] border text-white h-[50px] rounded-full'>
                        <p className=' w-full m-auto flex hover:text-[#ff7b24] hover:bg-white h-[50px] rounded-full pt-4 justify-center text-white cursor-pointer'><AiFillInstagram /></p>
                    </div>
                    <div className='flex w-[50px] border text-white h-[50px] rounded-full'>
                        <p className=' w-full m-auto flex hover:text-[#ff7b24] hover:bg-white h-[50px] rounded-full pt-4 justify-center text-white cursor-pointer'><PiLinkedinLogoBold /></p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>Email Us</p>
                  <p className='font-bold'>Blordgroup@outlook.com</p>
                </div>

                <div className='w-full pb-10'>
                  <a href="##" className='bg-white px-14 text-[#ff7b24] rounded-full py-3'>Talk with us</a>
                </div>
            </div>

            <div className='lg:w-[70%]'>
              {/** inputs */}
              <div className='w-full'>
                <form>
                    <div className='space-y-5 m-auto lg:w-[90%] w-[100%]'>
                      <div className='w-full '>
                        <input type="text" className=' w-full text-black p-3 rounded-[10px] h-[42px]' placeholder='Full Name' />
                      </div>
                      <div>
                        <input type="email" className='w-full text-black p-3 rounded-[10px] h-[42px]' placeholder='Email Address*' />
                      </div>
                      <div>
                        <input type="text" className='w-full text-black p-3 rounded-[10px] h-[42px]' placeholder='Phone number (Optional)' />
                      </div>
                      <div>
                        <input type="text" className='w-full text-black p-3 rounded-[10px] h-[42px] border-0' placeholder='Reason for Contact' />
                      </div>

                      <textarea name="message" placeholder='Message' className='w-full text-black p-3 rounded-[10px] border-0 h-[200px]' cols="30" rows="10"></textarea>
                      <div>
                          <button className='w-full p-3 rounded-full bg-white mb-5 text-[#ff7b24] cursor-pointer h-[45px] border-0'>Submit Message</button>
                      </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TryBFooter />
    </div>
  )
}

export default Contact