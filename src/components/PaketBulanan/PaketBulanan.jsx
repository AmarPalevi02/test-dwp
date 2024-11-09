import React, { useEffect, useState } from 'react'
import { baner } from '../../assets'
import Card from '../UI/Card'
import { getDatas } from '../../utils/fetch'
import SectionHeader from '../UI/SectionHeader'

const PaketBulanan = () => {
   const [paketBulanan, setPaketBulanan] = useState([])

   const fetchPaketBulanan = async () => {
      try {
         const response = await getDatas('paket_bulanan')
         setPaketBulanan(response.paket_bulanan)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchPaketBulanan()
   }, [])

   return (
      <div>
         <img src={baner} alt="Banner" className="w-full h-auto" />
         <div className="text-center mt-4">
            <h1 className="text-2xl text-gray-800 font-bold">Internet Tanpa Henti</h1>
            <h1 className="text-2xl text-gray-800 font-bold">Kenyamanan Sepanjang Bulan!</h1>
            <p className="mt-2">Paket Bulanan, Solusi Internet Cepat dan Terjangkau!</p>
         </div>

         <div className="mt-10">
            <SectionHeader title={'Paket Internet Bulanan'} des={'Sesuai dengan Kebutuhan Anda'} />

            <div className="grid grid-flow-col gap-4 overflow-x-auto pb-4 overX">
               {paketBulanan && paketBulanan.length > 0 ? (
                  paketBulanan.map((item) => (
                     <Card
                        key={item.id}
                        namaPaket={item.namaPaket}
                        deskripsi={item.deskripsi}
                        hargaNormal={item.hargaNormal}
                        hargaDiskon={item.hargaDiskon}
                        highlight={item.highlight}
                     />
                  ))
               ) : (
                  <p className="text-center text-gray-500">Tidak ada penawaran tersedia</p>
               )}
            </div>
         </div>
      </div>
   )
}

export default PaketBulanan