import React, { useEffect, useState } from 'react';

const Profile = () => {
   const [userProfile, setUserProfile] = useState(null);

   useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
         setUserProfile(userData.profile);
      }
   }, []);

   if (!userProfile) {
      return <div>Loading...</div>;
   }

   return (
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-8 md:p-12">
         <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-blue-600">{userProfile.fullName}</h2>
            <p className="text-gray-500 text-lg">{userProfile.email}</p>
            <p className="text-gray-500 text-lg">{userProfile.phoneNumber}</p>
         </div>

         <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg shadow-md">
               <h3 className="text-xl font-semibold text-gray-700">Pengaturan Akun</h3>
               <p className="text-gray-600">Metode Pembayaran Default: {userProfile.accountSettings.defaultPaymentMethod}</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg shadow-md">
               <h3 className="text-xl font-semibold text-gray-700">Detail Pembayaran</h3>
               <p className="text-gray-600">Saldo E-Wallet: Rp{userProfile.paymentDetails.eWalletBalance}</p>
               <p className="text-gray-600">Poin Reward: {userProfile.paymentDetails.rewardPoints}</p>
            </div>


            <div className="p-4 bg-yellow-50 rounded-lg shadow-md">
               <h3 className="text-xl font-semibold text-gray-700">Favorit Paket</h3>
               <ul className="space-y-2">
                  {userProfile.favorites.map((fav) => (
                     <li key={fav.packageId} className="flex justify-between items-center">
                        <span className="text-gray-700">{fav.packageName}</span>
                        <span className="text-gray-500">Rp{fav.price}</span>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg shadow-md">
               <h3 className="text-xl font-semibold text-gray-700">Alamat</h3>
               <p className="text-gray-600">
                  {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country} - {userProfile.address.postalCode}
               </p>
            </div>
         </div>
      </div>
   );
};

export default Profile;
