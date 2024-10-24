// FaqCard.jsx
import React from 'react';

const FaqCard = ({ question, answer, icon }) => {
  return (
    <div className="bg-purple-200 p-4 rounded-lg mb-4 hover:bg-purple-300 transition">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-xl">{icon}</span>
      </div>
      {answer && <p className="text-sm mt-2">{answer}</p>}
    </div>
  );
};

export default FaqCard;
