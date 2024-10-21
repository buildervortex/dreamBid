import React from 'react';

const Comment = ({ username, text, time }) => {
  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-700 font-semibold">{username}</div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>
      <p className="text-gray-700 mb-4">{text}</p>
      <div className="flex items-center">
        <button className="flex items-center mr-4 text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 9l-3 3m0 0l-3-3m3 3V4m0 7l3 3-3-3z"
            />
          </svg>
          Like
        </button>
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2h2m3 5v5m-4-5v5m8 0v5m-4 0v-5m0 0V3a1 1 0 112 0v8"
            />
          </svg>
          Reply
        </button>
      </div>
    </div>
  );
};

const CommentForm = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Write a Comment</h2>
      <textarea
        className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        placeholder="Write your comment (maximum is 500 words)"
      />
      <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600">
        Comment
      </button>
    </div>
  );
};

const CommentsList = () => {
  // Sample comment data
  const comments = [
    { username: 'user name', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', time: '2 hours ago' },
    { username: 'user name', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', time: '2 hours ago' },
    { username: 'user name', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', time: '2 hours ago' },
    { username: 'user name', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', time: '2 hours ago' },
    { username: 'user name', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', time: '2 hours ago' },

  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h3 className="text-xl font-bold mb-4 text-gray-700">Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <CommentForm />
      <CommentsList />
    </div>
  );
};

export default App;