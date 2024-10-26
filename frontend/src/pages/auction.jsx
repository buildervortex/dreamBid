import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import ButtonBar from '../components/ButtonBar';
import FilterCards from '../components/FilterCars';

function Auction() {
  const cars = [
    { id: 1, image: "car1.jpg", time: "8:24:57", price: "$99,999", model: "2012 Nissan GT-R", location: "Springfield, MO 65802" },
    { id: 2, image: "car2.jpg", time: "6:34:21", price: "$89,000", model: "2020 Porsche 911 Carrera", location: "Los Angeles, CA 90001" },
    { id: 3, image: "car3.jpg", time: "4:15:10", price: "$75,000", model: "2019 BMW M4", location: "New York, NY 10001" },
    { id: 4, image: "car4.jpg", time: "2:05:43", price: "$85,500", model: "2018 Audi R8", location: "Chicago, IL 60601" },
    { id: 5, image: "car5.jpg", time: "1:45:00", price: "$70,000", model: "2021 Tesla Model S", location: "San Francisco, CA 94101" },
    { id: 6, image: "car6.jpg", time: "3:25:30", price: "$55,000", model: "2015 Ford Mustang", location: "Austin, TX 73301" },
  ];

  const vans = [
    { id: 1, image: "car1.jpg", time: "8:24:57", price: "$99,999", model: "2012 Nissan GT-RS", location: "Springfield, MO 65802" },
    { id: 2, image: "car2.jpg", time: "6:34:21", price: "$89,000", model: "2020 Porsche 911 Carrera", location: "Los Angeles, CA 90001" },
    { id: 3, image: "car3.jpg", time: "4:15:10", price: "$75,000", model: "2019 BMW M4", location: "New York, NY 10001" },
    { id: 4, image: "car4.jpg", time: "2:05:43", price: "$85,500", model: "2018 Audi R8", location: "Chicago, IL 60601" },
    { id: 5, image: "car5.jpg", time: "1:45:00", price: "$70,000", model: "2021 Tesla Model S", location: "San Francisco, CA 94101" },
    { id: 6, image: "car6.jpg", time: "3:25:30", price: "$55,000", model: "2015 Ford Mustang", location: "Austin, TX 73301" },
  ];

  

  const [endingStartingIndex, setEndingStartingIndex] = useState(0);
  const [featuredStartingIndex, setFeaturedStartingIndex] = useState(0);
  const cardsToShow = 4; 
  const maxEndingIndex = cars.length - cardsToShow; 
  const maxFeaturedIndex = vans.length - cardsToShow; 

  // Handlers for Ending Soon section
  const handlePreviousEnding = () => {
    setEndingStartingIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : maxEndingIndex
    );
  };

  const handleNextEnding = () => {
    setEndingStartingIndex((prevIndex) => 
      prevIndex < maxEndingIndex ? prevIndex + 1 : 0
    );
  };

  // Handlers for Featured section
  const handlePreviousFeatured = () => {
    setFeaturedStartingIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : maxFeaturedIndex
    );
  };

  const handleNextFeatured = () => {
    setFeaturedStartingIndex((prevIndex) => 
      prevIndex < maxFeaturedIndex ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">

      {/* Ending Soon Section */}
      <h1 className='mt-4 mb-4 text-2xl'>Ending Soon</h1>
      <div className="relative flex items-center justify-center">
        <button onClick={handlePreviousEnding} className="absolute left-0 bg-purple-700 text-white px-2 py-1 rounded-lg">
          ◀
        </button>
        <div className="flex space-x-4">
          {cars.slice(endingStartingIndex, endingStartingIndex + cardsToShow).map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <button onClick={handleNextEnding} className="absolute right-0 bg-purple-700 text-white px-2 py-1 rounded-lg">
          ▶
        </button>
      </div>

      <br />

      {/* Featured Section */}
      <h1 className='mt-4 mb-4 text-2xl'>Featured</h1>
      <div className="relative flex items-center justify-center">
        <button onClick={handlePreviousFeatured} className="absolute left-0 bg-purple-700 text-white px-2 py-1 rounded-lg">
          ◀
        </button>
        <div className="flex space-x-4">
          {vans.slice(featuredStartingIndex, featuredStartingIndex + cardsToShow).map(van => (
            <CarCard key={van.id} car={van} />
          ))}
        </div>
        <button onClick={handleNextFeatured} className="absolute right-0 bg-purple-700 text-white px-2 py-1 rounded-lg">
          ▶
        </button>
      </div>
    </div>
  );
}

export default Auction;
