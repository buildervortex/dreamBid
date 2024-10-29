import React, { useEffect, useState } from "react";
import CarManagementCard from "../components/CarManagementCard"; // Adjust the import according to your file structure
import AuthViewModel from "../viewModels/AuthViewModel";
import CarViewModel from "../viewModels/CarViewModel";
import { getCurrentTheme } from "../utils/theme";


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




// AuctionManagement Component
const CarManagementPage = () => {

const [theme, setTheme] = useState(getCurrentTheme());
const [Cars,setCars] = useState([]);


useEffect(async()=>{
  let CarsObject = await CarViewModel.getAllCars();
  setCars(CarsObject);
},[]);



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
          <h2 className="mb-6 text-3xl font-bold text-black"> Active Bids</h2>
          <div className="flex flex-wrap -mx-2">
            {carsActive.map((car) => (
              <div className="w-1/3 p-2" key={car.name}>
                <CarManagementCard car={car} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarManagementPage;
