import React, { useState } from 'react';
import Table from '../components/AuctionDetails/Table';  // Default export
import DougTake from '../components/AuctionDetails/DougTake';  // Default export
import CarDetails from '../components/AuctionDetails/CarDetails';  // Default export
import CommentForm from '../components/AuctionDetails/CommentForm'; // Import CommentForm
import AuctionStats from '../components/AuctionDetails/AuctionStats';  // Default export
import Bids from '../components/AuctionDetails/Bids';  // Default export
import CommentsList from '../components/AuctionDetails/CommentsList'; // Import CommentsList

function AuctionDetails() {
  const [comments, setComments] = useState([
    {
      username: 'Shane',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      time: '30 hours ago',
      avatar: '/AuctionDetails/B6.jpeg',
    },
    {
      username: 'Daniel',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      time: '1 hour ago',
      avatar: '/AuctionDetails/B7.jpeg',
    },
    {
      username: 'Shon',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      time: '1 hours ago',
      avatar: '/AuctionDetails/B8.jpeg',
    },
    {
      username: 'Shahi',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      time: '2 hour ago',
      avatar: '/AuctionDetails/B10.jpeg',
    },
    {
      username: 'Senoli',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      time: '3 hour ago',
      avatar: '/AuctionDetails/G3.jpeg',
    },
  ]);

  const addComment = (text) => {
    const newComment = {
      username: 'Current User', // Replace with actual username or state
      text,
      time: 'Just now',
      avatar: 'https://example.com/default-avatar.jpg', // Use a default avatar or get from user
    };
    setComments([newComment, ...comments]);
  };

  return (
    <div className="flex min-w-full justify-center">
      <div className="flex-grow p-8 max-w-7xl">
        <AuctionStats />
        <div className="flex mt-8 space-x-4">
          <div className="flex-grow max-w-3xl space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Table />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <DougTake />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CarDetails />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CommentForm onAddComment={addComment} />
              <CommentsList comments={comments} />
            </div>
          </div>
          <div className="w-1/4 p-4">
            <Bids />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionDetails;
