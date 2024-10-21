import React from 'react';

const AuctionStats = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-purple-700">2012 Nissan GT-R Premium</h1>
          <p className="text-sm text-gray-600">20-Year Owner, 4.6-Liter V8 Power, Unmodified, Southern Owned</p>
        </div>

        {/* Watch and Share Buttons */}
        <div className="flex space-x-4">
          {/* Watch Button */}
          <button className="flex items-center space-x-2 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
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
                d="M13 10V7l5 5-5 5v-3H4v-4h9z"
              />
            </svg>
            <span>Watch</span>
          </button>

          {/* Share Button */}
          <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
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
                d="M15 8a3 3 0 11-2.82 1.993A3 3 0 0115 8zm-6 4.198a3 3 0 00-1.993 2.82 3 3 0 001.993 2.82m-1.993-6.54L5 16m2.018-2.018L9.993 20m0 0L16 16m-6.007 4L5.007 16m4-8.993L15 7M7.018 7l2.988-3.007"
              />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex mt-6 space-x-6">
        {/* Left Section: Large Image and Bid Part */}
        <div className="w-2/3 space-y-4">
          {/* Main Image */}
          <div>
            <img
              src="main-car-image-url.jpg" // Replace with the actual URL of the main image
              alt="Main Car"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '955px', height: '607px' }} // Large image size
            />
          </div>

          {/* Auction Stats Section */}
          <div className="flex justify-between items-center bg-purple-100 p-4 rounded-lg space-x-4">
            {/* Left side: Auction stats */}
            <div className="flex space-x-6 items-center">
              {/* Time Left */}
              <div className="flex items-center text-gray-700 space-x-2">
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

              {/* Highest Bid */}
              <div className="flex items-center text-gray-700 space-x-2">
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
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                <span>Highest Bid $5,400</span>
              </div>

              {/* Bids */}
              <div className="flex items-center text-gray-700 space-x-2">
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
                    d="M13 7H7m0 4h6m-6 4h6m4-8h2m0 4h-2m0 4h2M5 7a2 2 0 00-2-2v12a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                <span>Bids 15</span>
              </div>

              {/* Comments */}
              <div className="flex items-center text-gray-700 space-x-2">
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
                    d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 00-2 2v2a2 2 0 01-2 2H7l-4 4v-4a2 2 0 01-2-2v-7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 002 2v-7a2 2 0 00-2-2z"
                  />
                </svg>
                <span>Comments 17</span>
              </div>
            </div>

            {/* Right side: Place Bid Button */}
            <button className="bg-purple-700 text-white px-4 py-1 rounded-lg hover:bg-purple-800">
              Place Bid
            </button>
          </div>
        </div>

        {/* Right Section: Small Pictures */}
        <div className="w-1/3">
          <div className="grid grid-cols-2 gap-4">
            {/* Small Images - Adjust the source URLs as needed */}
            <img
              src="side-image1-url.jpg"
              alt="Side View 1"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '186px', height: '186px' }} // Small image size
            />
            <img
              src="side-image2-url.jpg"
              alt="Side View 2"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '186px', height: '186px' }} // Small image size
            />
            <img
              src="side-image3-url.jpg"
              alt="Side View 3"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '186px', height: '186px' }} // Small image size
            />
            <img
              src="side-image4-url.jpg"
              alt="Side View 4"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '186px', height: '186px' }} // Small image size
            />
            <img
              src="side-image5-url.jpg" // New image
              alt="Side View 5"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '186px', height: '186px' }} // Small image size
            />
            <img
              src="side-image6-url.jpg" // New image
              alt="Side View 6"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: '186px', height: '186px' }} // Small image size
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionStats;
