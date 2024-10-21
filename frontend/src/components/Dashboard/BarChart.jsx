import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Data configuration for the bar chart
  const data = {
    labels: ['1860', '1870', '1880', '1890', '1900', '1910', '1920', '1930'],
    datasets: [
      {
        label: 'Immigrant Population (in millions)',
        data: [4, 6, 7, 9, 10, 12, 14, 14],
        backgroundColor: 'rgba(128, 90, 213, 0.7)', // Purple color
        borderColor: 'rgba(128, 90, 213, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Bidding History Overview</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
