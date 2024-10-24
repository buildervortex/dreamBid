import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen flex flex-col justify-start p-4">
      <button className="text-white bg-purple-600 px-4 py-2 mb-4 rounded-md hover:bg-purple-500 transition-colors duration-200 ease-in-out">
        Dashboard
      </button>
      <button className="text-white bg-purple-600 px-4 py-2 mb-4 rounded-md hover:bg-purple-500 transition-colors duration-200 ease-in-out">
        Auctions
      </button>
      <button className="text-white bg-purple-600 px-4 py-2 mb-4 rounded-md hover:bg-purple-500 transition-colors duration-200 ease-in-out">
        Comments
      </button>
      <button className="text-white bg-purple-600 px-4 py-2 mb-4 rounded-md hover:bg-purple-500 transition-colors duration-200 ease-in-out">
        Sell Benefits
      </button>
    </div>
  );
};

export default Sidebar;
