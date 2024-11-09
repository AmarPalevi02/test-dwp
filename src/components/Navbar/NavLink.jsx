import React from 'react'

const NavLink = ({ title, icon, action }) => {
   return (
      <div
         className="flex items-center gap-1 cursor-pointer"
         onClick={action}
      >
         <p>{title}</p>
         <p>{icon}</p>
      </div>
   )
}

export default NavLink