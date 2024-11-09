import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from 'antd';
import NavLink from './NavLink';
import { useNavigate } from 'react-router-dom';
import { paketDataItems } from '../../constans/subnav';
import SubMenu from './SubMenu';
import { useLogin } from '../../contexts/LoginContext';

const Navbar = () => {
   const navigate = useNavigate();
   const [activeSubmenu, setActiveSubmenu] = useState(null);
   const [timer, setTimer] = useState(null);
   const { isLoggedIn, logout } = useLogin();

   const handleMouseEnter = (menu) => {
      if (timer) {
         clearTimeout(timer);
         setTimer(null);
      }
      setActiveSubmenu(menu);
   };

   const handleMouseLeave = () => {
      const newTimer = setTimeout(() => {
         setActiveSubmenu(null);
      }, 200);
      setTimer(newTimer);
   };

   const handleLogout = () => {
      navigate('/')
      logout();
      localStorage.removeItem("user")
   }

   useEffect(() => {
      return () => clearTimeout(timer);
   }, [timer]);

   return (
      <nav className='fixed top-0 left-0 right-0 bg-surface_dim shadow-md bg-suface_dim'>
         <div className="flex justify-between items-center max-w-screen-xl mx-auto px-20 py-5">
            <h1
               className='text-primary font-bold text-xl cursor-pointer'
               onClick={() => navigate('/')}
            >
               X PROVIDER
            </h1>

            <div className="flex items-center gap-4">
               <NavLink action={() => navigate('/')} title={'Home'} />

               <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('paketData')}
                  onMouseLeave={handleMouseLeave}
               >
                  <NavLink title={'Paket Data'} icon={<IoIosArrowDown />} />
                  {activeSubmenu === 'paketData' && (
                     <SubMenu items={paketDataItems} navigate={navigate} onMouseLeave={handleMouseLeave} />
                  )}
               </div>


               {isLoggedIn && (
                  <NavLink action={() => navigate('/transaksi')} title={'Transaksi Saya'} />
               )}

               {isLoggedIn && (
                  <NavLink action={() => navigate('/akun')} title={'Akun Saya'} />
               )}

               {!isLoggedIn ? (
                  <Button type="primary" onClick={() => navigate('/login')}>
                     Login
                  </Button>
               ) : (
                  <Button type="primary" danger onClick={handleLogout}>
                     Logout
                  </Button>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;