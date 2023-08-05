import React from 'react'
import Providers from '../Images/providers.png';
const Over = () => {
  return (
    <div className='mt-[80px] pb-[50px] bg-slate-400 text-center m-auto '>
       <div className='space-y-4 py-5'>
        <h3 className='font-bold m-auto md:w-[40%] lg:text-5xl md:text-3xl text-2xl'>Over<span>30+</span> service providers
                brands connected to billpoint
            </h3>
            <p>making the lives of users much easier</p>
       </div>
        <div className='w-[70%] m-auto'>
            <img src={Providers} alt="our service" />
        </div>
    </div>
  )
}

export default Over