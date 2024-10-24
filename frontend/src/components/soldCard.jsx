import React from 'react';

function SoldCard({ item2 }) {
    return (
        <div className="w-64 relative flex flex-col border-solid border-2 border-purple-800 rounded-2xl max-w-xs bg-white shadow-3xl p-3">
        <div className="relative w-full">
            <img
                src={item2.image}
                className="mb-3 h-full w-full rounded-xl"
                alt="Auction Item"
            />
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
            <div>
                <p className="text-sm font-bold text-navy-700">{item2.productName}</p>
                <p className="mt-1 text-sm font-medium text-gray-600">{item2.owner}</p>
            </div>

        </div>
        <div className="">
            <div className="">
                <p className="text-sm font-bold text-brand-500">Win Bid: {item2.currentBid}</p>
            </div>
        </div>
    </div>
    );
}

export default SoldCard;
