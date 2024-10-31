import React from "react";
import WishListCarCard from "../components/WishlistCards";
import AuctionWishlistCard from "./AuctionWishlistCard";

const WishList = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Prius",
      description:
        "Hybrid Synergy Drive, Impressive Fuel Economy, Primarily City-Driven",
      price: "$41,500",
      imageUrl: "AuctionManagementCars/car8.jpg",
      timeLeft: "1 Day",
      views: 10,
    },
    {
      id: 2,
      name: "Toyota Prius",
      description:
        "4-Cylinder Hybrid, Eco-Friendly Upgrades, Well-Maintained by One Owner",
      price: "$36,000",
      imageUrl: "AuctionManagementCars/car9.jpg",
      timeLeft: "2 Days",
      views: 8,
    },
    {
      id: 3,
      name: "Toyota Corolla",
      description:
        "Reliable 4-Cylinder Engine, Smooth Handling, Mostly Highway Miles",
      price: "$50,500",
      imageUrl: "AuctionManagementCars/car6.jpg",
      timeLeft: "1 Day",
      views: 11,
    },
    {
      id: 4,
      name: "Toyota Prius",
      description:
        "Hybrid Synergy Drive, Impressive Fuel Economy, Primarily City-Driven",
      price: "$41,500",
      imageUrl: "AuctionManagementCars/car2.jpg",
      timeLeft: "1 Day",
      views: 10,
    },
    {
      id: 5,
      name: "Toyota Prius",
      description:
        "4-Cylinder Hybrid, Eco-Friendly Upgrades, Well-Maintained by One Owner",
      price: "$36,000",
      imageUrl: "AuctionManagementCars/car1.jpg",
      timeLeft: "2 Days",
      views: 8,
    },
    {
      id: 6,
      name: "Toyota Corolla",
      description:
        "Reliable 4-Cylinder Engine, Smooth Handling, Mostly Highway Miles",
      price: "$50,500",
      imageUrl: "AuctionManagementCars/car3.jpg",
      timeLeft: "1 Day",
      views: 11,
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-bold text-purple-900">Wish List</h2>

        {/* Right section for total car count */}
        <div className="flex justify-end w-1/4 ml-auto ">
          {/* Content inside the right section */}
          <h4 className="text-2xl font-semibold text-purple-900">
            Results: {cars.length}{" "}
          </h4>
        </div>
      </header>

      {/* Main content area for car listings */}
      <div className="flex flex-col gap-8">
        {/* "Live" Link Section */}
        <div className="mb-4">
          <a href="#" className="text-xl text-blue-600 hover:underline">
            Live
          </a>
        </div>

        {/* Left section for car listings */}
        <div className="flex-grow space-y-4 md:w-full">
          {cars.map((car) => (
            <div key={car.id} className="relative">
              {/* Display each car's card */}
              <AuctionWishlistCard></AuctionWishlistCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
