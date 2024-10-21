import React from 'react';

const WishListCarCard = ({ car }) => {
  return (
    <div className="flex items-center max-w-full p-4 space-x-4 transition-transform duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
      {/* Checkbox & Image Section */}
      <div className="relative flex-shrink-0">
       
        {/* Image */}
        <img 
          src={car.imageUrl} 
          alt={car.name} 
          className="object-cover w-32 h-24 transition-all duration-300 ease-in-out rounded-md md:w-40 md:h-32 lg:w-48 lg:h-36 hover:opacity-90 hover:shadow-md" 
        />
      </div>

      {/* Car Details Section */}
      <div className="flex-1 space-y-2 ml-80">
        <h3 className="text-2xl font-bold text-purple-900 truncate">{car.name}</h3>
        <p className="text-xl text-gray-800">{car.description}</p>
        <button className="px-4 py-2 mt-3 text-white transition-colors duration-300 ease-in-out bg-purple-900 rounded-lg hover:bg-purple-800 hover:shadow-lg">
          Place Bid
        </button>
      </div>

      {/* Price, Time Left, and Views Section */}
      <div className="space-y-1 text-right">
        <p className="mt-2 text-2xl font-semibold text-purple-900">{car.price}</p>
        <p className="text-gray-600">{car.timeLeft}</p>
        <p className="text-gray-600">👁️ {car.views}</p>
      </div>
    </div>
  );
};

export default WishListCarCard;
