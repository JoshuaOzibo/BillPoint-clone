import React from 'react'

const Card = (props) => {
  return (
    <div className='p-[50px] shadow-md bg-white text-black w-[90%] md:m-0 m-auto rounded-[13px]'>
        {props.children}
    </div>
  )
}

export default Card;