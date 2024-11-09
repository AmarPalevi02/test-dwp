import React from 'react'

const Card = ({ namaPaket, deskripsi, hargaNormal, hargaDiskon, highlight }) => {
   return (
      <div className="w-[360px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
         <div className="px-6 py-4">
            <h2 className="text-xl font-bold">{namaPaket}</h2>
            <p className="text-gray-600 text-sm mt-1">{deskripsi}</p>

            <div className="flex justify-between items-center mt-4">
               <div>
                  {hargaDiskon && (
                     <p className="text-lg font-semibold text-red-500">
                        Diskon: Rp{hargaDiskon}
                     </p>
                  )}
                  <p
                     className={`text-base font-medium ${hargaDiskon ? 'line-through text-gray-400' : 'text-gray-700'}`}
                  >
                     Rp{hargaNormal}
                  </p>
               </div>

               {hargaDiskon && (
                  <span className="bg-red-500 text-white py-1 px-4 rounded-full text-xs font-semibold">
                     {highlight}
                  </span>
               )}
            </div>
         </div>
      </div>
   )
}

export default Card
