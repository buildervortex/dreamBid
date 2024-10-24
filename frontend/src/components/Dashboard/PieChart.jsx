import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Auction Won', 'Auction Lost'],
    datasets: [
      {
        label: 'Success Bid Rate',
        data: [80, 20], // 80% won, 20% lost
        backgroundColor: ['#A78BFA', '#EDE9FE'], // Purple and Light Purple
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md transform transition-transform duration-200 hover:scale-105">
      <h2 className="text-lg font-bold mb-4 text-black">Success Bid Rate</h2>
      <Pie data={data} />
      <div className="flex justify-center mt-4 text-sm">
        <div className="mr-4">
          <span className="block w-4 h-4 bg-purple-500 inline-block"></span>
          <span className="text-gray-700 dark:text-Black ml-2">Auction won</span> {/* Set suitable text color */}
        </div>
        <div>
          <span className="block w-4 h-4 bg-purple-100 inline-block"></span>
          <span className="text-gray-700 dark:text-black ml-2">Auction lost</span> {/* Set suitable text color */}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
