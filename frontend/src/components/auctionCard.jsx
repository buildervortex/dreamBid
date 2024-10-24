import React from 'react';

function AuctionCard({ item }) {
    return (
        <div className="w-64 relative flex flex-col border-solid border-2 border-purple-800 rounded-2xl max-w-xs bg-white shadow-3xl p-3 hover:scale-105 shadow-lg">
            <div className="relative w-full">
                <img
                    src={item.image}
                    className="mb-3 h-full w-full rounded-xl"
                    alt="Auction Item"
                />
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                    <div className="flex h-full w-full items-center justify-center rounded-full text-xl">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                            ></path>
                        </svg>
                    </div>
                </button>
            </div>
            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                <div>
                    <p className="text-sm font-bold text-navy-700">{item.productName}</p>
                    <p className="mt-1 text-sm font-medium text-gray-600">{item.owner}</p>
                </div>

                {/* Profile Pictures */}
                <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
                    <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700">
                        +{item.extraBidders}
                    </span>
                    {item.avatars.map((avatar, index) => (
                        <span key={index} className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                            <img
                                className="h-full w-full rounded-full object-cover"
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                            />
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex">
                    <p className="text-sm font-bold text-brand-500">Current Bid: {item.currentBid}</p>
                </div>
                <button className="rounded-2xl bg-purple-700 ml-2 px-4 py-2 text-xs text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">
                    Place Bid
                </button>
            </div>
        </div>
    );
}

export default AuctionCard;
