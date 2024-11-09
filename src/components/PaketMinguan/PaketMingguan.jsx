import React, { useState } from 'react'
import { getDatas } from '../../utils/fetch'
import { baner } from '../../assets'
import SectionHeader from '../UI/SectionHeader'
import Card from '../UI/Card'

const PaketMingguan = () => {
   const [paketBulanan, setPaketBulanan] = useState([])

   const fetchPaketBulanan = async () => {
      try {
         const response = await getDatas('paket_mingguan')
         setPaketBulanan(response.paket_mingguan)
      } catch (error) {
         console.log(error)
      }
   }

   useState(() => {
      fetchPaketBulanan()
   }, [])
   return (
      <div>
         <img src={baner} alt="Banner" className="w-full h-auto" />
         <div className="text-center mt-4">
            <h1 className="text-2xl text-gray-800 font-bold">Akses Internet Tanpa Gangguan</h1>
            <h1 className="text-2xl text-gray-800 font-bold">Nikmati Koneksi Penuh Setiap Minggu!</h1>
            <p className="mt-2">Paket Mingguan, Solusi Internet Cepat Setiap Saat!</p>
         </div>

         <div className="mt-10">
            <SectionHeader title={'Pilih Paket Mingguan'} des={'Sesuai dengan Kebutuhan Anda'} />

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

export default PaketMingguan