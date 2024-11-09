import React, { useEffect, useState } from 'react'

const RiwayatTransaksi = () => {
   const [transactions, setTransactions] = useState([]);

   useEffect(() => {
      const userData = localStorage.getItem('user');
      if (userData) {
         const user = JSON.parse(userData);
         setTransactions(user.transactions || []);
      }
   }, []);

   const getStatusColor = (status) => {
      switch (status) {
         case 'success':
            return 'bg-green-100 border-green-500 text-green-700';
         case 'pending':
            return 'bg-yellow-100 border-yellow-500 text-yellow-700';
         case 'failed':
            return 'bg-red-100 border-red-500 text-red-700';
         default:
            return 'bg-gray-100 border-gray-300 text-gray-700';
      }
   };

   return (
      <div className='pb-10'>
         {transactions.length > 0 ? (
            <div className="space-y-4">
               {transactions.map((transaction) => (
                  <div
                     key={transaction.transactionId}
                     className={`p-6 border-l-4 rounded-lg shadow-md ${getStatusColor(transaction.status)}`}
                  >
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">
                           Transaction ID: {transaction.transactionId}
                        </h3>
                        <span
                           className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}
                        >
                           {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                     </div>
                     <div className="text-gray-700 space-y-1">
                        <p><strong>Package ID:</strong> {transaction.packageId}</p>
                        <p><strong>Jumlah:</strong> Rp{transaction.amount.toLocaleString()}</p>
                        <p><strong>Tanggal:</strong> {transaction.date}</p>
                        <p><strong>Pembayaran:</strong> {transaction.paymentMethod}</p>
                     </div>
                     <div className="mt-4">
                        <strong>Details:</strong>
                        <ul className="ml-4 list-disc text-gray-600">
                           {transaction.details.items.map((item, index) => (
                              <li key={index}>
                                 {item.itemName} - Quantity: {item.quantity}, Harga: Rp{item.price.toLocaleString()}
                              </li>
                           ))}
                        </ul>
                        <p className="font-semibold mt-2">Total: Rp{transaction.details.total.toLocaleString()}</p>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <p className="text-center text-gray-500">No transactions found.</p>
         )}
      </div>
   )
}

export default RiwayatTransaksi