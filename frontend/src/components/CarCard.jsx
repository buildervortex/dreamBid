import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="flex-shrink-0 w-64 h-80 bg-white shadow-md rounded-lg overflow-hidden">
      <img src="mycar.jpg" alt={car.model} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{car.model}</h3>
        <p className="text-gray-600">{car.location}</p>
        <p className="text-purple-700 font-semibold">{car.price}</p>
        <p className="text-sm text-gray-500">{car.time}</p>
      </div>
    </div>
  );
};

export default CarCard;
