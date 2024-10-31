import React, { useState } from "react";
import CarBidCard from "../components/ActiveBidsCard"; // Adjust the import according to your file structure
import AddAuctionOverlay from "./AddAuctionOverlay";

// AuctionManagement Component
const AuctionManagement = ({ cars, auctions }) => {
  const [addAuctionOverlayOpen, setOverlayOpen] = useState(false);
  return (
    <div className="flex-grow overflow-y-auto">
      {/* Recently Active Bids Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center align-top min-w-full mb-4">
          <h2 className="text-3xl font-bold text-black">Auctions</h2>
          <button
            className="text-xl bg-purple-800 text-white py-2 px-4"
            onClick={() => setOverlayOpen(true)}
          >
            Place Auction
          </button>
        </div>

        <div className="flex flex-wrap -mx-2">
          {auctions.map((auction, index) => {
            let car = cars.find((c) => c.car.id === auction.car.id);
            if (car === undefined) return;

            return (
              <div className="w-1/3 p-2" key={auction.id}>
                <CarBidCard car={car} auction={auction} />
              </div>
            );
          })}
        </div>
      </section>
      <AddAuctionOverlay
        isOpen={addAuctionOverlayOpen}
        onClose={() => setOverlayOpen(false)}
        onSubmit={() => {}}
        cars={cars}
      ></AddAuctionOverlay>
    </div>
  );
};

export default AuctionManagement;
