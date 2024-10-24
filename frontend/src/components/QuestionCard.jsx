import React from 'react';

const QuestionCard = ({ title, subtitle, icon }) => {
  return (
    <div className="bg-purple-100 rounded-lg p-6 shadow-md flex items-center justify-between hover:bg-purple-200 transition cursor-pointer">
      {/* Text Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>
      {/* Icon Section */}
      <div className="text-2xl text-purple-600">
        {icon}
      </div>
    </div>
  );
};

export default QuestionCard;
