import React from 'react';

function Bids() {
  const bids = [
    { name: 'Nuwan', amount: '$90,000', avatar: 'https://via.placeholder.com/40' },
    { name: 'Kanishka', amount: '$74,000', avatar: 'https://via.placeholder.com/40' },
    { name: 'Sapna', amount: '$60,000', avatar: 'https://via.placeholder.com/40' },
    { name: 'Sadun', amount: '$52,000', avatar: 'https://via.placeholder.com/40' },
    { name: 'Sewwandhi', amount: '$45,000', avatar: 'https://via.placeholder.com/40' },
    { name: 'Sahan', amount: '$40,000', avatar: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-purple-100 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-700">Current Bid</p>
          <p className="text-3xl font-bold text-purple-900">$40,000</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Bids # <span className="font-medium">10</span></p>
          <p className="text-sm text-gray-600">Views <span className="font-medium">👁 40</span></p>
        </div>
      </div>

      <div className="bg-purple-200 p-4 rounded-lg">
        {bids.map((bid, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-purple-300 last:border-b-0">
            <div className="flex items-center space-x-3">
              <img
                src={bid.avatar}
                alt={`${bid.name}'s avatar`}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-purple-700">{bid.name}</span>
            </div>
            <button className="bg-purple-800 text-white text-sm font-semibold py-1 px-3 rounded-lg">
              Bid {bid.amount}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bids;
