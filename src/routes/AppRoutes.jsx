import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Layout from '../pages/Layout'
import Login from '../components/Login/Login'
import PaketHarian from '../components/PaketHarian/PaketHarian'
import PaketMingguan from '../components/PaketMinguan/PaketMingguan'
import PaketBulanan from '../components/PaketBulanan/PaketBulanan'
import RiwayatTransaksi from '../components/Riwayat/RiwayatTransaksi'
import Profile from '../components/Profile/Profile'

const AppRoutes = () => {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='/paketdata/harian' element={<PaketHarian />} />
               <Route path='/paketdata/mingguan' element={<PaketMingguan />} />
               <Route path='/paketdata/bulanan' element={<PaketBulanan />} />
               <Route path='/transaksi' element={<RiwayatTransaksi />} />
               <Route path='/akun' element={<Profile />} />
               <Route path="/login" element={<Login />} />
            </Route>
         </Routes>
      </Router>
   )
}

export default AppRoutes