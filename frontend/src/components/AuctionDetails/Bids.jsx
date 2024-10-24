import React from 'react';

function Bids() {
  const bids = [
    { name: 'Nuwan', amount: '$90,000', avatar: '/AuctionDetails/B1.jpg' },
    { name: 'Kanishka', amount: '$74,000', avatar: '/AuctionDetails/B2.jpeg' },
    { name: 'Sapna', amount: '$60,000', avatar: '/AuctionDetails/G1.jpeg' },  
    { name: 'Sadun', amount: '$52,000', avatar: '/AuctionDetails/B3.jpg' },
    { name: 'Sewwandhi', amount: '$45,000', avatar: '/AuctionDetails/G2.jpeg' },  
    { name: 'Sahan', amount: '$40,000', avatar: '/AuctionDetails/B4.jpeg' },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-purple-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
      {/* Current Bid Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-700 transition-opacity duration-300 hover:opacity-70">Current Bid</p>
          <p className="text-3xl font-bold text-purple-900 transform transition-transform duration-300 hover:scale-110">$40,000</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 transition-opacity duration-300 hover:opacity-70">Bids # <span className="font-medium">10</span></p>
          <p className="text-sm text-gray-600 transition-opacity duration-300 hover:opacity-70">Views <span className="font-medium">👁 40</span></p>
        </div>
      </div>

      {/* Bids List Section */}
      <div className="bg-purple-200 p-4 rounded-lg">
        {bids.map((bid, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-2 border-b border-purple-300 last:border-b-0 transition-transform transform hover:bg-purple-300"
          >
            <div className="flex items-center space-x-3">
              <img
                src={bid.avatar}
                alt={`${bid.name}'s avatar`}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-purple-700">{bid.name}</span>
                <button className="bg-purple-800 text-white text-sm font-semibold py-1 px-3 rounded-lg mt-1 transition-transform transform hover:scale-110">
                  Bid {bid.amount}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bids;
