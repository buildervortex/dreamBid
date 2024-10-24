import React from 'react';

const Card = () => {
  return (
    <div className="bg-purple-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 w-full max-w-xs">
      {/* Image Section */}
      <div className="mb-4">
        <img
          src="bid.webp"  // Replace with your image URL
          alt="Vehicle"
          className="rounded-t-lg w-16 mx-auto"
        />
      </div>

      {/* Title and Description */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">How to List Vehicle for Auction</h3>
        <p className="text-gray-600 mb-4">How to list and upload photos for your auction</p>
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="text-purple-700 font-semibold flex items-center justify-center hover:underline">
          See Detail <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
