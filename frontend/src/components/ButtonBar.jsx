// src/ButtonBar.jsx
import React from 'react';

const ButtonBar = () => {
  const carModels = [
    'M2', 'X5', 'E36 M3', 'E39 M5', 'Z4', 'F80 M3', 
    'E60 M5', 'X3', 'M8', 'Z8', 'i3', 'Z3'
  ];

  return (
    <div className="flex overflow-x-auto space-x-2 p-4 border-b w-full">
      {carModels.map((model, index) => (
        <button
          key={index}
          className="px-8 py-2 bg-purple-900 text-gray-200 rounded-full whitespace-nowrap hover:bg-gray-800"
        >
          {model}
        </button>
      ))}
    </div>
  );
};

export default ButtonBar;

