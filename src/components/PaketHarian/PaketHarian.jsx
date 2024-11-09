import React, { useEffect, useState } from 'react'
import { baner } from '../../assets'
import SectionHeader from '../UI/SectionHeader'
import Card from '../UI/Card'
import { getDatas } from '../../utils/fetch'

const PaketHarian = () => {
   const [paketHarian, setPaketHarian] = useState([])
   const [harianTelopan, setHarianTelponan] = useState([])

   const fetchPaketHarian = async () => {
      try {
         const response = await getDatas('paket_harian')
         setPaketHarian(response.paket_harian)
      } catch (error) {
         console.log(error)
      }
   }

   const fetchHarianTelponan = async () => {
      try {
         const response = await getDatas('paket_harian_telponan')
         setHarianTelponan(response.paket_harian_teleponan)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchPaketHarian()
      fetchHarianTelponan()
   }, [])
   return (
      <div>
         <img src={baner} alt="Banner" className="w-full h-auto" />
         <div className="text-center mt-4">
            <h1 className="text-2xl text-gray-800 font-bold">Kuota Harian, Koneksi Tanpa Gangguan</h1>
            <h1 className="text-2xl text-gray-800 font-bold">Paket Hemat, Internet Cepat, Selalu Tersedia!</h1>
            <p className="mt-2">Kuota Harian, Koneksi Tanpa Gangguan!</p>
         </div>

         <div className="mt-10">
            <SectionHeader title={'Pilih Paket Harian'} des={'Sesuai dengan Kebutuhan Anda'} />

            <div className="grid grid-flow-col gap-4 overflow-x-auto pb-4 overX">
               {paketHarian && paketHarian.length > 0 ? (
                  paketHarian.map((item) => (
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

         <div className="mt-10">
            <SectionHeader title={'Paket Telepon Harian'} des={'Nikmati percakapan lancar dengan berbagai pilihan paket telepon harian'} />

            <div className="grid grid-flow-col gap-4 overflow-x-auto pb-4 overX">
               {harianTelopan && harianTelopan.length > 0 ? (
                  harianTelopan.map((item) => (
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

export default PaketHarian