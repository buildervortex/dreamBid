// FaqCategory.jsx
import React from 'react';

const FaqCategory = ({ title, icon }) => {
  return (
    <button className="flex justify-between items-center p-4 bg-purple-200 rounded-lg w-full mb-4 hover:bg-purple-300 transition">
      <span className="text-lg font-semibold">{title}</span>
      <span className="text-xl">{icon}</span>
    </button>
  );
};

export default FaqCategory;
