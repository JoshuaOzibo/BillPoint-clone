import React from 'react'

const OurOffice = () => {
    const aboutMap = <iframe className='w-[90%] lg:mt-0 mt-10 lg:w-[450px] lg:m-0 m-auto rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8107221316145!2d7.4622485751575836!3d9.081001090982436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae8ae73065d%3A0x3dce97fe7e070201!2s38%20Aminu%20Kano%20Cres%2C%20Wuse%20904101%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1688429779554!5m2!1sen!2sng" 
    width="450" 
    height="350" 
    style={{border: "0" }}
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
  return (
    <div className='mt-20 space-y-6'>
            <h2 className='text-center font-bold md:text-3xl text-2xl lg:text-5xl'>Our Office</h2>
            <p className='w-[40%] text-center m-auto'> We are conveniently located in the heart of the city, 
                with easy access to public transportation and major highways.
            </p>
           <div className=' flex w-full'>
                <div className='lg:flex container justify-center p-10 mt-10 m-auto lg:space-x-10'>
                    <div className=' flex justify-center lg:m-0 m-auto' >
                        <img className='w-[90%] h-[50vh]' src="https://www.billpoint.co/assets/frontend/assets/images/location.png" alt="img" />
                    </div>

                    <div className=''>
                        {aboutMap}
                        <div className='flex lg:w-[100%] md:w-[90%]  m-auto justify-start w-[90%] bg-yellow-200'>
                            <a 
                            href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8107221316145!2d7.4622485751575836!3d9.081001090982436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae8ae73065d%3A0x3dce97fe7e070201!2s38%20Aminu%20Kano%20Cres%2C%20Wuse%20904101%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1688429779554!5m2!1sen!2sng' 
                            className=' flex w-[210px] text-center pt-4 -mt-14 justify-center rounded-full bg-[#ff7b24] border' 
                            target="_blank">
                                Get Direction
                            </a>
                        </div>
                    </div>
                </div>
           </div>
    </div>
  )
}

export default OurOffice