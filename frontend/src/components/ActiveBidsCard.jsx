const CarBidCard = ({ car, auction }) => {
  console.log(car);

  return (
    <div className="p-4 overflow-hidden transition-transform duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105">
      <div className="relative">
        <img
          src={car.image}
          alt={car.car.model}
          className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform rounded-md hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 px-2 py-1 text-white bg-black bg-opacity-50 rounded-tr-lg">
          <span className="text-sm">{auction.auctionEndTime.toString()}</span>
        </div>
      </div>

      <div className="p-2 mt-3 text-center bg-purple-900 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-sm text-white">
            <span>Current Bid: </span>
            <span className="text-lg font-semibold">
              {auction.highestBidAmount}
            </span>
          </div>
          <div className="text-sm text-white">
            <span>Start Bid: </span>
            <span className="text-lg font-semibold">
              {car.car.startingPrice}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h3 className="text-lg font-bold">{car.car.model}</h3>
        <p className="text-sm text-gray-700">{car.car.vin}</p>
      </div>

    </div>
  );
};

export default CarBidCard;
