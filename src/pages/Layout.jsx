import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
   const location = useLocation(); 

   return (
      <div className='bg-suface_dim max-w-screen-xl relative mx-auto'>
         {location.pathname !== '/login' && <Navbar />}

         <div className="px-20 pt-20">
            <Outlet />
         </div>
      </div>
   );
}

export default Layout;