import React, { useState } from "react";
import {
  Calendar,
  User,
  DollarSign,
  PlusCircle,
  Heart,
  XCircle,
} from "lucide-react";
import AddBidDto from "../dto/bid/addBidDto";
import BidViewModel from "../viewModels/BidViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { toast } from "react-toastify";

const AuctionCategoryCard = ({
  id,
  auctionEndTime,
  winnerId,
  highestBidAmount,
  isActive,
  startingPrice,
  make,
  model,
  year,
  mileage,
  vin,
  reservePrice,
  image,
}) => {
  const [isBidOverlayOpen, setIsBidOverlayOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  const handlePlaceBid = async () => {
    let addBidDto = new AddBidDto();
    addBidDto.bidAmount = bidAmount;

    let response = await BidViewModel.placeBid(id, addBidDto);

    if (response instanceof ErrorMessage) {
      toast.error(response.error);
      return;
    }
    toast.success("Placed the bid successfully");
    window.location.href = response.approvalUrl;

    setIsBidOverlayOpen(false);
  };

  const handleAddToWishlist = () => {
    console.log("Added auction to wishlist:", id);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-sm">
      <div className="relative">
        <img
          src={image}
          alt={`${make} ${model}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={handleAddToWishlist}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart className="h-5 w-5 text-red-500" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xl font-bold text-gray-800">
            {make} {model} ({year})
          </div>
          <div className="text-xl font-bold text-blue-600">
            ${highestBidAmount}
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Ends {new Date(auctionEndTime).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{winnerId != null ? "Won" : "Active"}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>Starting Price: ${startingPrice.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>Reserve Price: ${reservePrice.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-600 mb-1">Mileage</div>
            <div className="font-medium">{mileage.toLocaleString()} mi</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">VIN</div>
            <div className="font-medium">{vin}</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t px-4 py-3 flex justify-between items-center">
        <button
          disabled={!isActive}
          onClick={() => setIsBidOverlayOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <PlusCircle className="h-5 w-5" />
          <span>Place a Bid</span>
        </button>
      </div>

      {isBidOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50">
          <div className="bg-white rounded-t-lg md:rounded-lg shadow-lg w-full md:max-w-md">
            <div className="px-6 py-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">Place a Bid</h3>
                <button
                  onClick={() => setIsBidOverlayOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <XCircle className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="bid-amount"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Bid Amount
                </label>
                <div className="flex items-center">
                  <span className="bg-gray-200 px-3 py-2 rounded-l-md">$</span>
                  <input
                    type="number"
                    id="bid-amount"
                    min={highestBidAmount === null ? 0 : startingPrice + 1}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-r-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your bid"
                  />
                </div>
              </div>
              <button
                onClick={() => handlePlaceBid()}
                disabled={
                  Number(bidAmount) <=
                  (highestBidAmount === null
                    ? startingPrice + 1
                    : highestBidAmount + 1)
                }
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Place the Bid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionCategoryCard;
