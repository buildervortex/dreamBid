import React from 'react';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 w-1/2 bg-purple-100 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      {/* Profile Section */}
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">John Arnold</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default TopBar;
