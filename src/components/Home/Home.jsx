import React, { useEffect, useState } from 'react';
import { baner } from '../../assets';
import { getDatas } from '../../utils/fetch';
import Card from '../UI/Card';
import SectionHeader from '../UI/SectionHeader';

const Home = () => {
   const [penawaran, setPenawaran] = useState([])
   const [paketHarian, setPaketHarian] = useState([])

   const fetchPenawaran = async () => {
      try {
         const response = await getDatas('penawaran');
         setPenawaran(response.penawaran);
      } catch (error) {
         console.error('Error fetching penawaran:', error);
      }
   };

   const fetchPaketHarian = async () => {
      try {
         const response = await getDatas('paket_harian')
         setPaketHarian(response.paket_harian)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchPenawaran()
      fetchPaketHarian()
   }, []);

   return (
      <div className='pb-10'>
         <img src={baner} alt="Banner" className="w-full h-auto" />

         <div className="text-center mt-4">
            <h1 className="text-2xl text-gray-800 font-bold">Solusi Mudah & Cepat untuk</h1>
            <h1 className="text-2xl text-gray-800 font-bold">Kebutuhan Data Anda</h1>
            <p className="mt-2">Temukan Paket Data Terbaik, Hemat, dan Selalu Tersedia di Genggaman Anda!</p>
         </div>

         <div className="mt-12">
            <SectionHeader title={'Penawaran'} des={'Menarik untuk anda'} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
               {penawaran && penawaran.length > 0 ? (
                  penawaran.map((item) => (
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

         <div className="mt-12">
            <SectionHeader title={'Paket Harian'} des={'Menarik untuk anda'} />

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

         <img src={baner} alt="Banner" className="w-full h-auto" />
      </div >
   );
};

export default Home;
