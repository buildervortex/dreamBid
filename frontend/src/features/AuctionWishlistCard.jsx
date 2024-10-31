import React, { useState } from 'react';
import { 
  Calendar, 
  User,
  DollarSign,
  PlusCircle,
  Trash2,
  XCircle
} from 'lucide-react';

const AuctionWishlistCard = ({ 
  auction = {
    id: 1,
    auctionStartTime: new Date().toISOString(),
    auctionEndTime: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).toISOString(), // 3 days from now
    winnerId: null,
    highestBidAmount: 20000,
    isActive: true,
    startingPrice: 18000,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    mileage: 35000,
    vin: '1FTHX26F2WKA12345',
    reservePrice: 22000
  }
}) => {
  const [isBidOverlayOpen, setIsBidOverlayOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState('');

  const handlePlaceBid = () => {
    // Add logic to place the bid
    console.log('Placing bid:', bidAmount);
    setIsBidOverlayOpen(false);
  };

  const handleRemoveFromWishlist = () => {
    // Add logic to remove the auction from the user's wishlist
    console.log('Removed auction from wishlist:', auction.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 w-full">
      <div className="flex">
        {/* Image */}
        <div className="w-1/3">
          <img
            src={`/api/placeholder/400/240`}
            alt={`${auction.make} ${auction.model}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="w-2/3 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xl font-bold text-gray-800">
              {auction.make} {auction.model} ({auction.year})
            </div>
            <div className="text-xl font-bold text-blue-600">
              ${auction.highestBidAmount.toLocaleString()}
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>
                Ends {new Date(auction.auctionEndTime).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>
                {auction.winnerId ? 'Won' : 'Active'}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>
                Starting Price: ${auction.startingPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>
                Reserve Price: ${auction.reservePrice.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-600 mb-1">Mileage</div>
              <div className="font-medium">{auction.mileage.toLocaleString()} mi</div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">VIN</div>
              <div className="font-medium">{auction.vin}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t px-4 py-3 flex justify-between items-center">
        <button
          disabled={!auction.isActive}
          onClick={() => setIsBidOverlayOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <PlusCircle className="h-5 w-5" />
          <span>Place a Bid</span>
        </button>
        <button
          onClick={handleRemoveFromWishlist}
          className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-gray-200 rounded-md transition-colors"
        >
          <Trash2 className="h-5 w-5" />
          <span>Remove</span>
        </button>
      </div>

      {/* Bid Overlay */}
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
                <label htmlFor="bid-amount" className="block text-gray-700 font-medium mb-1">
                  Bid Amount
                </label>
                <div className="flex items-center">
                  <span className="bg-gray-200 px-3 py-2 rounded-l-md">$</span>
                  <input
                    type="number"
                    id="bid-amount"
                    min={auction.highestBidAmount + 1}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-r-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your bid"
                  />
                </div>
              </div>
              <button
                onClick={handlePlaceBid}
                disabled={Number(bidAmount) <= auction.highestBidAmount}
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

export default AuctionWishlistCard;
    