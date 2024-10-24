import React from 'react';

const StatsCard = ({ title, value, percentage }) => {
  return (
    <div className="bg-purple-700 text-white p-6 rounded-md shadow-md transform transition-transform duration-200 hover:scale-105">
      <div className="text-lg">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm mt-2">increased by {percentage}%</div>
    </div>
  );
};

export default StatsCard;
