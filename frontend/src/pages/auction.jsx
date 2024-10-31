import React, { useState, useEffect, useLayoutEffect } from "react";
import AuctionDto from "../dto/auction/auctionDto";
import AuctionCategoryCard from "../features/AuctionCategoryCard";
import CarViewModel from "../viewModels/CarViewModel";
import AuctionViewModel from "../viewModels/AuctionViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { toast } from "react-toastify";
import ImageViewModel from "../viewModels/ImageViewModel";
import base64ToImageData from "../utils/image";

const Auction = () => {
  const [filteredAuctions, setFilteredAuctions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("EndTime");
  const [sortDirection, setSortDirection] = useState(true);
  const [filterActive, setFilterActive] = useState(true);

  const [cars, setCars] = useState([]);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let carsResponse = await CarViewModel.getAllCars();
      let auctionResponse = await AuctionViewModel.getAllAuctions({
        active: filterActive,
        WithCar: true,
        IsDecsending: sortDirection,
        OrderBy: sortBy,
        PageNumber: currentPage,
        PageSize: itemsPerPage,
        WithBids: true,
      });
      if (carsResponse instanceof ErrorMessage) {
        toast.error(carsResponse.error);
        return;
      }
      if (auctionResponse instanceof ErrorMessage) {
        toast.error(auctionResponse.error);
        return;
      }
      toast.success("Cars loaded successfully");
      toast.success("Auctions loaded successfully");

      const carsList = await Promise.all(
        carsResponse.map(async (car) => {
          let image = await ImageViewModel.getAllCarImages(car.id, {
            pageNumber: 1,
            pageSize: 1,
          });
          if (image instanceof ErrorMessage) {
            toast.error(image.error);
            return null; // handle error for specific car image fetch
          }
          return { image: base64ToImageData(image[0].image), car: car };
        })
      );

      setCars(carsList.filter(Boolean));
      setAuctions(auctionResponse);
    };
    getData();
  }, [currentPage, itemsPerPage, sortBy, sortDirection, filterActive]);

  useEffect(() => {
    // Filter and sort the auctions based on the current state
    filterAndSortAuctions();
  }, [auctions, sortBy, sortDirection, filterActive]);

  const filterAndSortAuctions = () => {
    let filtered = auctions.filter((auction) => {
      return filterActive ? auction.isActive : true;
    });

    filtered = filtered.sort((a, b) => {
      const sortValue = (a, b) => {
        switch (sortBy) {
          case "year":
            return a.year - b.year;
          case "mileage":
            return a.mileage - b.mileage;
          case "startingPrice":
            return a.startingPrice - b.startingPrice;
          case "endTime":
            return (
              new Date(a.auctionEndTime).getTime() -
              new Date(b.auctionEndTime).getTime()
            );
          case "startTime":
            return (
              new Date(a.auctionStartTime).getTime() -
              new Date(b.auctionStartTime).getTime()
            );
          default:
            return 0;
        }
      };

      return sortDirection === "asc" ? sortValue(a, b) : sortValue(b, a);
    });

    setFilteredAuctions(filtered);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (field, direction) => {
    setSortBy(field);
    setSortDirection(direction);
  };

  const handleFilterActiveChange = () => {
    setFilterActive(!filterActive);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAuctions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value, sortDirection)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Year">Year</option>
              <option value="Mileage">Mileage</option>
              <option value="StartingPrice">Starting Price</option>
              <option value="EndTime">End Time</option>
              <option value="StartTime">Start Time</option>
            </select>
            <select
              value={sortDirection}
              onChange={(e) => handleSortChange(sortBy, e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={true}>Ascending</option>
              <option value={false}>Descending</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium">Filter:</label>
            <button
              onClick={handleFilterActiveChange}
              className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                filterActive
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filterActive ? "Active Auctions" : "All Auctions"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {auctions.map((auction, index) => {
            let car = cars.find((c) => c.car.id === auction.car.id);
            if (car === undefined) return;

            return (
              <AuctionCategoryCard
                key={auction.id}
                id={auction.id}
                auctionStartTime={auction.auctionStartTime}
                auctionEndTime={auction.auctionEndTime}
                winnerId={auction.winnerId}
                highestBidAmount={auction.highestBidAmount}
                isActive={auction.isActive}
                startingPrice={auction.car.startingPrice}
                make={auction.car.make}
                model={auction.car.model}
                year={auction.car.year}
                mileage={auction.car.mileage}
                vin={auction.car.vin}
                reservePrice={auction.car.reservePrice}
                image={car.image}
              ></AuctionCategoryCard>
            );
          })}
        </div>

        <div className="flex justify-center mt-6">
          {Array.from({
            length: Math.ceil(filteredAuctions.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
