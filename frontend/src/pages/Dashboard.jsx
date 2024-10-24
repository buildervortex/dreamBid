import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import StatsCard from '../components/Dashboard/StatsCard';
import BarChart from '../components/Dashboard/BarChart';
import PieChart from '../components/Dashboard/PieChart';
import SellCarBenefits from '../components/Dashboard/SellCarBenefits';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <TopBar />

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatsCard title="Total Bids" value="25" percentage="7.35" />
          <StatsCard title="Active Auctions" value="60" percentage="7.35" />
          <StatsCard title="Won Auctions" value="50" percentage="7.35" />
          <StatsCard title="Failed Auctions" value="20" percentage="7.35" />
        </div>

        {/* Bidding History Overview (Bar Chart) */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <BarChart />
        </div>

        {/* Success Bid Rate (Pie Charts) */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <PieChart />
          <PieChart />
        </div>

        {/* Sell Benefits Section */}
        <div className="mb-8">
          <SellCarBenefits />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
