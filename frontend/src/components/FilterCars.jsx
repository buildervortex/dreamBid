// src/FilterCards.jsx
import React from 'react';


const FilterCars = () => {
  return (
    <div className="flex space-x-4">
      <div>
        <select className="bg-purple-200 text-black rounded-lg px-4 py-2">
          <option>Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
      
      <div>
        <select className="bg-purple-200 text-black rounded-lg px-4 py-2">
          <option>Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>

      <div>
        <select className="bg-purple-200 text-black rounded-lg px-4 py-2">
          <option>Body Style</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
        </select>
      </div>
    </div>
  );
}

export default FilterCars;
