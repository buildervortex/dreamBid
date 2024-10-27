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

  const jeep = [
    { id: 1, image: "jeep1.jpg", time: "5:00:00", price: "$65,000", model: "2021 Jeep Wrangler", location: "Orlando, FL 32801" },
    { id: 2, image: "jeep2.jpg", time: "7:15:20", price: "$70,000", model: "2022 Jeep Gladiator", location: "Denver, CO 80202" },
    { id: 3, image: "jeep3.jpg", time: "6:00:00", price: "$58,000", model: "2020 Jeep Cherokee", location: "Houston, TX 77001" },
    { id: 4, image: "jeep4.jpg", time: "3:30:10", price: "$72,000", model: "2019 Jeep Grand Cherokee", location: "Las Vegas, NV 89101" },
    { id: 5, image: "jeep5.jpg", time: "4:00:00", price: "$68,000", model: "2021 Jeep Compass", location: "Miami, FL 33101" },
    { id: 6, image: "jeep6.jpg", time: "2:45:30", price: "$50,000", model: "2018 Jeep Renegade", location: "Phoenix, AZ 85001" },
  ];

  const vehicles = [
    { id: 1, image: "vehicle1.jpg", time: "10:00:00", price: "$105,000", model: "2023 Ford Bronco", location: "Salt Lake City, UT 84101" },
    { id: 2, image: "vehicle2.jpg", time: "12:15:00", price: "$110,000", model: "2022 Toyota Land Cruiser", location: "San Diego, CA 92101" },
    { id: 3, image: "vehicle3.jpg", time: "9:30:00", price: "$95,000", model: "2021 Mercedes-Benz", location: "Nashville, TN 37201" },
    { id: 4, image: "vehicle4.jpg", time: "8:50:20", price: "$120,000", model: "2023 Cadillac Escalade", location: "Seattle, WA 98101" },
    { id: 5, image: "vehicle5.jpg", time: "7:45:10", price: "$78,500", model: "2022 Lexus LX", location: "Dallas, TX 75201" },
    { id: 6, image: "vehicle6.jpg", time: "6:30:50", price: "$80,000", model: "2021 Land Rover Defender", location: "Philadelphia, PA 19019" },
  ];

  const [endingStartingIndex, setEndingStartingIndex] = useState(0);
  const [featuredStartingIndex, setFeaturedStartingIndex] = useState(0);
  const [resultStartingIndex, setResultStartingIndex] = useState(0);
  const [vehicleStartingIndex, setVehicleStartingIndex] = useState(0);

  const cardsToShow = 4;
  const maxEndingIndex = cars.length - cardsToShow;
  const maxFeaturedIndex = vans.length - cardsToShow;
  const maxResultIndex = jeep.length - cardsToShow;
  const maxVehicleIndex = vehicles.length - cardsToShow;

  // Handlers for cycling through each section
  const handlePreviousEnding = () => setEndingStartingIndex((prev) => prev > 0 ? prev - 1 : maxEndingIndex);
  const handleNextEnding = () => setEndingStartingIndex((prev) => prev < maxEndingIndex ? prev + 1 : 0);
  const handlePreviousFeatured = () => setFeaturedStartingIndex((prev) => prev > 0 ? prev - 1 : maxFeaturedIndex);
  const handleNextFeatured = () => setFeaturedStartingIndex((prev) => prev < maxFeaturedIndex ? prev + 1 : 0);
  const handlePreviousResult = () => setResultStartingIndex((prev) => prev > 0 ? prev - 1 : maxResultIndex);
  const handleNextResult = () => setResultStartingIndex((prev) => prev < maxResultIndex ? prev + 1 : 0);
  const handlePreviousVehicle = () => setVehicleStartingIndex((prev) => prev > 0 ? prev - 1 : maxVehicleIndex);
  const handleNextVehicle = () => setVehicleStartingIndex((prev) => prev < maxVehicleIndex ? prev + 1 : 0);

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
<<<<<<< HEAD
      <h1 className="text-2xl font-bold text-purple-900 mb-4">Auctions (40)</h1>

      <ButtonBar />
      <br></br>
      <FilterCards />
=======
>>>>>>> 146748e646ad1121eeb562d9f23da9b2cd647e1e

      {/* Ending Soon Section */}
      <h1 className="mt-4 mb-4 text-2xl">Ending Soon</h1>
      <div className="relative flex items-center justify-center">
        <button onClick={handlePreviousEnding} className="absolute left-0 bg-purple-700 text-white px-2 py-1 rounded-lg">◀</button>
        <div className="flex space-x-4">
          {cars.slice(endingStartingIndex, endingStartingIndex + cardsToShow).map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <button onClick={handleNextEnding} className="absolute right-0 bg-purple-700 text-white px-2 py-1 rounded-lg">▶</button>
      </div>

      {/* Featured Section */}
      <h1 className="mt-4 mb-4 text-2xl">Featured</h1>
      <div className="relative flex items-center justify-center">
        <button onClick={handlePreviousFeatured} className="absolute left-0 bg-purple-700 text-white px-2 py-1 rounded-lg">◀</button>
        <div className="flex space-x-4">
          {vans.slice(featuredStartingIndex, featuredStartingIndex + cardsToShow).map(van => (
            <CarCard key={van.id} car={van} />
          ))}
        </div>
        <button onClick={handleNextFeatured} className="absolute right-0 bg-purple-700 text-white px-2 py-1 rounded-lg">▶</button>
      </div>

      {/* Result Section */}
      <h1 className="mt-4 mb-4 text-2xl">Result</h1>
      <div className="relative flex items-center justify-center">
        <button onClick={handlePreviousResult} className="absolute left-0 bg-purple-700 text-white px-2 py-1 rounded-lg">◀</button>
        <div className="flex space-x-4">
          {jeep.slice(resultStartingIndex, resultStartingIndex + cardsToShow).map(jeepItem => (
            <CarCard key={jeepItem.id} car={jeepItem} />
          ))}
        </div>
        <button onClick={handleNextResult} className="absolute right-0 bg-purple-700 text-white px-2 py-1 rounded-lg">▶</button>
      </div>

      {/* Vehicle Section */}
      <h1 className="mt-4 mb-4 text-2xl">Vehicles</h1>

      <div class="flex space-x-4 mt-4">
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500 selected:border-purple-800 selected:font-bold">Ending soon</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">Newly listed</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">No reserved</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">Lowest Mileage</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">Closest to me</a>
</div>
<br></br>

      <div className="relative flex items-center justify-center">
        <button onClick={handlePreviousVehicle} className="absolute left-0 bg-purple-700 text-white px-2 py-1 rounded-lg">◀</button>
        <div className="flex space-x-4">
          {vehicles.slice(vehicleStartingIndex, vehicleStartingIndex + cardsToShow).map(vehicle => (
            <CarCard key={vehicle.id} car={vehicle} />
          ))}
        </div>
        <button onClick={handleNextVehicle} className="absolute right-0 bg-purple-700 text-white px-2 py-1 rounded-lg">▶</button>
      </div>
    </div>
  );
}

export default Auction;
