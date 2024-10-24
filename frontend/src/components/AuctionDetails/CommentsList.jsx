import React from 'react';
import Comment from './Comment'; // Adjust the path according to your project structure

const CommentsList = ({ comments }) => {
  return (
    <div className="max-w-2xl mt-8 ml-4">
      <h3 className="text-3xl font-bold text-purple-700 transition-transform duration-300 hover:scale-105">Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentsList;
