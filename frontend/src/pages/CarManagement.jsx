import React from "react";
import CarBidCard from "../components/ActiveBidsCard"; // Adjust the import according to your file structure

// Sample Car Data for Active Bids
const carsActive = [
  {
    name: "Ford Mustang",
    details: "5.0L V8, Performance Exhaust, Weekend Cruiser with Low Mileage",
    image: "AuctionManagementCars/car1.jpg",
   
  },
  {
    name: "Chevrolet Camaro",
    details: "V6, Sporty Design, Perfect for Summer Drives",
    image: "AuctionManagementCars/car2.jpg",
    
  },
  {
    name: "Dodge Challenger",
    details: "Hemi V8, Classic Muscle Car, Impressive Power",
    image: "AuctionManagementCars/car3.jpg",
   
  },
];

// Sample Car Data for Won Auctions
const carsWon = [
  {
    name: "Tesla Model S",
    details: "Dual Motor All-Wheel Drive, Autopilot, Full Self-Driving, Long Range",
    image: "AuctionManagementCars/car4.jpg",
   
  },
  {
    name: "BMW i8",
    details: "Hybrid Sports Car, Innovative Design, Eco-Friendly Performance",
    image: "AuctionManagementCars/car5.jpg",
   
  },
  {
    name: "Porsche 911",
    details: "Iconic Sports Car, Exceptional Handling, Timeless Style",
    image: "AuctionManagementCars/car6.jpg",
   
  },
];

// Sample Car Data for Canceled Auctions
const carsCanceled = [
  {
    name: "Nissan GT-R",
    details: "High-Performance Sports Car, Track Ready",
    image: "AuctionManagementCars/car7.jpg",
    
  },
  {
    name: "Audi R8",
    details: "Luxury Supercar, Sleek Design, Powerful V10 Engine",
    image: "AuctionManagementCars/car8.jpg",
    
  },
  {
    name: "Lamborghini Huracan",
    details: "Exotic Sports Car, All-Wheel Drive, Eye-Catching Style",
    image: "AuctionManagementCars/car9.jpg",
    
  },
];

// AuctionManagement Component
const CarManagementPage = () => {
  return (
    <div className="flex h-screen">
      {/* Side Panel */}
      <div className="w-1/5 h-full p-4 bg-purple-900 text-white overflow-y-auto">
        <ul>
          <li className="mb-6">
            <button className="w-full py-3 bg-purple-800 rounded hover:bg-purple-700">
              Dashboard
            </button>
          </li>
          <li className="mb-6">
            <button className="w-full py-3 bg-purple-800 rounded hover:bg-purple-700">
              Auctions
            </button>
          </li>
          <li>
            <button className="w-full py-3 bg-purple-800 rounded hover:bg-purple-700">
              Comments
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8 overflow-y-auto ml-20">
        {/* Profile Section */}
        <div className="flex items-center justify-end mb-8">
          <img
            src="AuctionManagementCars/profile.jpeg"
            alt="Profile"
            className="mr-4 rounded-full w-14 h-14"
          />
          <span className="text-3xl font-bold text-purple-900">John Doe</span>
        </div>

        {/* Recently Active Bids Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">Recently Active Bids</h2>
          <div className="flex flex-wrap -mx-2">
            {carsActive.map((car) => (
              <div className="w-1/3 p-2" key={car.name}>
                <CarBidCard car={car} />
              </div>
            ))}
          </div>
        </section>

        {/* Won Auctions Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">Won Auctions</h2>
          <div className="flex flex-wrap -mx-2">
            {carsWon.map((car) => (
              <div className="w-1/3 p-2" key={car.name}>
                <CarBidCard car={car} />
              </div>
            ))}
          </div>
        </section>

        {/* Canceled Auctions Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">Canceled Auctions</h2>
          <div className="flex flex-wrap -mx-2">
            {carsCanceled.map((car) => (
              <div className="w-1/3 p-2" key={car.name}>
                <CarBidCard car={car} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarManagementPage;
