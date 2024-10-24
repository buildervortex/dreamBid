import React from "react";
import CarBidCard from "../components/ActiveBidsCard";
import CarWonCard from "../components/WonAuctionsCard";
import CarCancelCard from "../components/CancelCard";

// Sample Car Data for Active Bids
const activeBidsCars = [
  {
    name: "Ford Mustang",
    details: "5.0L V8, Performance Exhaust, Weekend Cruiser with Low Mileage",
    image: "AuctionManagementCars/car1.jpg",
    currentBid: "$99,999",
    startBid: "$99,999",
    timeRemaining: "3:22:50",
  },
  {
    name: "Chevrolet Camaro",
    details: "6.2L Supercharged V8, Track-Ready Mods, One Owner with Service Records",
    image: "AuctionManagementCars/car2.jpg",
    currentBid: "$99,999",
    startBid: "$99,999",
    timeRemaining: "10:24:27",
  },
  {
    name: "Audi Q5",
    details: "2.0L Turbocharged Engine, Premium Package, Well-Maintained Family SUV",
    image: "AuctionManagementCars/car3.jpg",
    currentBid: "$99,999",
    startBid: "$99,999",
    timeRemaining: "12:20:57",
  },
  
];

// Sample Car Data for Won Auctions
const wonAuctionCars = [
  {
    name: "Tesla Model S",
    details: "Dual Motor All-Wheel Drive, Autopilot, Full Self-Driving, Long Range",
    image: "AuctionManagementCars/car4.jpg",
    finalBid: "$120,000",
    startBid: "$110,000",
    timeRemaining: "Auction Won",
  },
  {
    name: "BMW M3",
    details: "3.0L Inline-6, Twin-Turbo, Competition Package, Recent Maintenance",
    image: "AuctionManagementCars/car5.jpg",
    finalBid: "$95,000",
    startBid: "$90,000",
    timeRemaining: "Auction Won",
  },
  {
    name: "BMW M3",
    details: "3.0L Inline-6, Twin-Turbo, Competition Package, Recent Maintenance",
    image: "AuctionManagementCars/car6.jpg",
    finalBid: "$95,000",
    startBid: "$90,000",
    timeRemaining: "Auction Won",
  },
];

// Sample Car Data for Canceled Auctions
const cancelBidsCars = [
  {
    name: "Ford Mustang",
    details: "5.0L V8, Performance Exhaust, Weekend Cruiser with Low Mileage",
    image: "AuctionManagementCars/car7.jpg",
    startBid: "$99,999",
    timeRemaining: "Canceled Auction",
  },
  {
    name: "Chevrolet Camaro",
    details: "6.2L Supercharged V8, Track-Ready Mods, One Owner with Service Records",
    image: "AuctionManagementCars/car8.jpg",
    startBid: "$99,999",
    timeRemaining: "Canceled Auction",
  },
  {
    name: "Audi Q5",
    details: "2.0L Turbocharged Engine, Premium Package, Well-Maintained Family SUV",
    image: "AuctionManagementCars/car9.jpg",
    startBid: "$99,999",
    timeRemaining: "Canceled Auction",
  },
];

// AuctionManagement Component
const AuctionManagementPage = () => {
  return (
    <div className="flex min-w-full">
      {/* Side Panel */}
      <div className="fixed top-0 left-0 w-1/5 h-full p-4 mt-20 text-white ">
        <ul>
          <li className="mb-6">
            <button className="w-full py-3 bg-purple-900 rounded hover:bg-purple-800">
              Dashboard
            </button>
          </li>
          <li className="mb-6">
            <button className="w-full py-3 bg-purple-900 rounded hover:bg-purple-800">
              Auctions
            </button>
          </li>
          <li>
            <button className="w-full py-3 bg-purple-900 rounded hover:bg-purple-800">
              Comments
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8 ml-1/6">
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {activeBidsCars.map((car) => (
              <CarBidCard key={car.name} car={car} />
            ))}
          </div>
        </section>

        {/* Won Auctions Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">Won Auctions</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {wonAuctionCars.map((car) => (
              <CarWonCard key={car.name} car={car} />
            ))}
          </div>
        </section>

        {/* Canceled Auctions Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">Canceled Auctions</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {cancelBidsCars.map((car) => (
              <CarCancelCard key={car.name} car={car} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuctionManagementPage;
