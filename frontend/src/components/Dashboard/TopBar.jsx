import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

// Sample data for valid search terms
const validWords = ["Auction", "Bidding", "DreamBid", "Car", "Vehicle", "Sale", "Purchase", "Marketplace"];

const TopBar = () => {
  const [searchText, setSearchText] = useState('');
  const [autoSuggestions, setAutoSuggestions] = useState([]);
  const searchRef = useRef(null); // Create a ref for the search area

  // Handle the search input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Provide auto-suggestions based on input
    if (value.length > 0) {
      const filteredSuggestions = validWords.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setAutoSuggestions(filteredSuggestions);
    } else {
      setAutoSuggestions([]);
    }
  };

  // Handle search action when the search icon is clicked
  const handleSearch = () => {
    if (searchText.trim() !== '') {
      // Check if the searchText is valid
      const isValid = validWords.some(word => word.toLowerCase() === searchText.toLowerCase());
      if (!isValid) {
        alert(`"${searchText}" is not a valid word. Please check your spelling.`);
      } else {
        alert(`Searching for: ${searchText}`);
        // Here you can call a search API or perform the desired search action
      }
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setAutoSuggestions([]);
  };

  // Clear search text when clicking outside of the search area
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchText('');
      setAutoSuggestions([]);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center mb-8" ref={searchRef}>
      {/* Search Bar */}
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleInputChange}
          className="px-4 py-2 w-full bg-purple-100 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black transition duration-200 ease-in-out hover:bg-purple-200 pr-10"
        />
        {/* Search Icon on the right */}
        <span
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          onClick={handleSearch}
        >
          <FaSearch className="text-gray-500 h-5 w-5" />
        </span>
        {/* Auto-suggestions Dropdown */}
        {autoSuggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-purple-100 text-black border border-gray-300 rounded-md mt-1 shadow-lg z-10">
            {autoSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-purple-200 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Profile Section */}
      <div className="flex items-center">
        {/* Zoom Hover Effect for Profile Picture */}
        <img
          src="/Dashboard/B1.jpeg"
          alt="Profile"
          className="rounded-full w-10 h-10 transition-transform duration-300 ease-in-out hover:scale-110"
          style={{ width: '40px', height: '40px' }}
        />
        {/* Blind Hover Effect for Name */}
        <span className="ml-4 text-gray-600 transition-opacity duration-300 ease-in-out hover:opacity-50">
          John Arnold
        </span>
      </div>
    </div>
  );
};

export default TopBar;
