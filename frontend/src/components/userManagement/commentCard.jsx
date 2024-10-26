import React from 'react';
import User from '../../Assets/User.png';
import Like from '../../Assets/Like.svg';
import Comment from '../../Assets/Comment.svg';

export default function CommentCard({ user, text, timestamp }) {
    return (
        <div className='p-4 bg-white shadow-md rounded-lg w-5/6 border-solid border-2 border-purple-800 mb-4'>
            {/* User info */}
            <div className='flex items-center space-x-3 mb-2'>
                <img src={User} alt='User profile' className='w-10 h-10 rounded-full' />
                <p className='font-semibold'>{user}</p>
            </div>

            {/* Comment text */}
            <div className='mb-4'>
                <p>{text}</p>
            </div>

            {/* Like, Comment and Timestamp */}
            <div className='flex items-end justify-between'>
                <div className='flex space-x-6'>
                    <img src={Like} alt='Like' className='w-5 h-5 cursor-pointer' />
                    <img src={Comment} alt='Comment' className='w-5 h-5 cursor-pointer' />
                </div>
                <p className='text-sm text-gray-500'>{timestamp}</p>
            </div>
        </div>
    );
}
