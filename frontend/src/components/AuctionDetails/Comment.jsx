import React, { useState } from 'react';

const Comment = ({ username, text, time, avatar }) => {
  // State to keep track of likes and replies
  const [likeCount, setLikeCount] = useState(0);
  const [replyCount, setReplyCount] = useState(0);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);

  // Function to handle the "Like" button click
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  // Function to handle adding a reply
  const handleAddReply = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText]);
      setReplyText('');
      setReplyCount(replyCount + 1);
      setShowReplyForm(false);
    }
  };

  // Function to toggle the reply form visibility
  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-md mb-4 transform transition-transform duration-300 hover:scale-105 relative">
      <div className="flex items-start mb-2">
        <img
          src={avatar}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex flex-col flex-grow">
          <div className="text-gray-700 font-semibold">{username}</div>
          <p className="text-gray-700 mb-4">{text}</p>
          <div className="flex items-center space-x-4 text-gray-500">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 hover:text-purple-700"
            >
              <img src="/AuctionDetails/like1.png" alt="Like" className="w-5 h-5" />
              <span>Like</span>
              <span>({likeCount})</span> {/* Display the number of likes */}
            </button>
            {/* Reply Button */}
            <button
              onClick={toggleReplyForm}
              className="flex items-center space-x-1 hover:text-purple-700"
            >
              <img src="/AuctionDetails/Reply.png" alt="Reply" className="w-5 h-5" />
              <span>Reply</span>
              <span>({replyCount})</span> {/* Display the number of replies */}
            </button>
          </div>
        </div>
      </div>
      {/* Reply Form */}
      {showReplyForm && (
        <div className="mt-4">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full h-20 p-2 border border-gray-300 rounded-lg mb-2"
            placeholder="Write a reply..."
          />
          <div className="flex justify-end">
            <button
              onClick={handleAddReply}
              className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600"
            >
              Add Reply
            </button>
          </div>
        </div>
      )}
      {/* Display Replies */}
      {replies.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Replies:</h4>
          <ul className="space-y-2">
            {replies.map((reply, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded-md">
                {reply}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="absolute bottom-2 right-4 text-sm text-gray-500">{time}</div>
    </div>
  );
};

export default Comment;
