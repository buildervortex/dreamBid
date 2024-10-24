import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(commentText);
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-3xl font-bold text-purple-700 transition-transform duration-300 transform hover:scale-110">
        Write a Comment
      </h2>
      <div className="flex flex-col">
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 mb-2 bg-purple-100 text-black transition-opacity duration-300 hover:opacity-50"
          placeholder="Write your comment (maximum is 500 words)"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 transform transition-transform duration-300 hover:scale-110"
          >
            Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
