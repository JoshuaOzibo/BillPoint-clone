import React from 'react';
import ToApp from '../ToApp/ToApp';
import { Outlet } from 'react-router-dom';
import NavLinks from '../Haeder/NavLinks';
const Out = () => {
  return (
    <div>
      
        <Outlet />
    </div>
  )
}

export default Out;