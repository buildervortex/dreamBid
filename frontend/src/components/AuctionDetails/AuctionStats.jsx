import React from 'react';

const AuctionStats = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-purple-700 transition-transform duration-300 hover:scale-105">
            2012 Nissan GT-R Premium
          </h1>
          <p className="text-sm text-gray-600 transition-opacity duration-300 hover:opacity-70">
            20-Year Owner, 4.6-Liter V8 Power, Unmodified, Southern Owned
          </p>
        </div>

        {/* Watch and Share Buttons */}
        <div className="flex space-x-4">
          <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-transform duration-300 hover:scale-105">
            <span>Watch</span>
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-transform duration-300 hover:scale-105">
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex mt-6 space-x-6">
        {/* Left Section: Large Image and Bid Part */}
        <div className="w-2/3 space-y-4">
          <div>
            <img
              src="/AuctionDetails/car1.jpg"
              alt="Main Car"
              className="rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              style={{ width: '955px', height: '607px' }} // Large image size
            />
          </div>

          {/* Auction Stats Section with Light Purple Background */}
          <div className="bg-purple-100 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center space-x-4">
              <div className="flex space-x-6 items-center">
                <div className="flex items-center text-gray-700 space-x-2 transition-opacity duration-300 hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m-3-7a9 9 0 110 18 9 9 0 010-18z"
                    />
                  </svg>
                  <span>Time Left 10:24</span>
                </div>
                <div className="flex items-center text-gray-700 space-x-2 transition-opacity duration-300 hover:opacity-70">
                  <span>Highest Bid $5,400</span>
                </div>
                <div className="flex items-center text-gray-700 space-x-2 transition-opacity duration-300 hover:opacity-70">
                  <span>Bids 15</span>
                </div>
                <div className="flex items-center text-gray-700 space-x-2 transition-opacity duration-300 hover:opacity-70">
                  <span>Comments 17</span>
                </div>
              </div>
              <button className="bg-purple-700 text-white px-4 py-1 rounded-lg hover:bg-purple-800 transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                Place Bid
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Small Pictures */}
        <div className="w-1/3">
          <div className="grid grid-cols-2 gap-4">
            {/* Small Images */}
            {Array.from({ length: 6 }, (_, index) => (
              <img
                key={index}
                src={`/AuctionDetails/car${index + 2}.jpg`} 
                alt={`Side View ${index + 1}`}
                className="rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                style={{ width: '186px', height: '186px' }} // Small image size
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionStats;
