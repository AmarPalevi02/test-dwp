import React from 'react'

const SubMenu = ({ items, navigate, onMouseLeave }) => {
   return (
      <div
         className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-10"
         onMouseLeave={onMouseLeave}
      >
         <ul>
            {items.map((item, index) => (
               <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate(item.path)}
               >
                  {item.label}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SubMenu