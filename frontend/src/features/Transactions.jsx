import React from 'react';

const transactions = [
  {
    id: 1,
    PaypalTransactionId: 'Jav1245785424132',
    amount: 823,
    transactionDate: '20 Dec 21',
    status: 'Complete',
  },
  {
    id: 2,
    PaypalTransactionId: 'Jav124578412012',
    amount: 1023,
    transactionDate: '18 Dec 21',
    status: 'Complete',
  },
  {
    id: 3,
    PaypalTransactionId: 'Jav124514454554',
    amount: 2125,
    transactionDate: '18 Dec 21',
    status: 'Complete',
  },
  {
    id: 4,
    PaypalTransactionId: 'Jav124575415661',
    amount: 500,
    transactionDate: '18 Dec 21',
    status: 'Cancelled',
  },
  {
    id: 5,
    PaypalTransactionId: 'Jav124500012001',
    amount: 289.01,
    transactionDate: '18 Dec 21',
    status: 'Complete',
  },
];

const Transactions = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Manage Transactions</h2>
      <div className="bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-gray-600 font-semibold">ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-gray-600 font-semibold">Paypal Transaction ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-gray-600 font-semibold">Amount</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-gray-600 font-semibold">Transaction Date</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-gray-600 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-100 transform hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                <td className="px-6 py-4 border-b border-gray-200">{transaction.id}</td>
                <td className="px-6 py-4 border-b border-gray-200">{transaction.PaypalTransactionId}</td>
                <td className="px-6 py-4 border-b border-gray-200">${transaction.amount}</td>
                <td className="px-6 py-4 border-b border-gray-200">{transaction.transactionDate}</td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <span
                    className={`px-3 py-1 inline-block text-xs font-semibold rounded-full ${
                      transaction.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transactions;
