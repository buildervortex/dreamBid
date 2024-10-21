import React from 'react';
import Table from '../components/AuctionDetails/Table'
import DougTake from '../components/AuctionDetails/DougTake';
import CarDetails from '../components/AuctionDetails/CarDetails';
import Comment from '../components/AuctionDetails/Comment';
import AuctionStats from '../components/AuctionDetails/AuctionStats';
import Bids from '../components/AuctionDetails/Bids';

function AuctionDetails() {
  return (
    <div>
      <AuctionStats />
      <Table />
      <DougTake />
      <CarDetails />
      <Comment />
      <Bids />
    </div>
  );
}

export default AuctionDetails;
