import React from 'react'

const SectionHeader = ({ title, des }) => {
   return (
      <div className="flex justify-between items-center mb-6">
         <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <h2 className="text-lg text-gray-600">{des}</h2>
         </div>
      </div>
   )
}

export default SectionHeader