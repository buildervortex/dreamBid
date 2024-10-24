import React from 'react';
import User from '../Assets/User.png';

export default function SayAboutCard({ name, date, message }) {
    return (
        <div className='flex flex-row gap-4' style={{ width: '32.5%' }}>
            <div className='p-4 border bg-white border-gray-300 rounded-lg w-full hover:scale-105 shadow-lg'>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                        <img src={User} alt={`Profile of ${name}`} className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <p className='font-semibold'>{name}</p>
                        <time className='text-gray-500'>{date}</time>
                    </div>
                </div>

                <div className='mt-3'>
                    <p className='text-gray-700'>{message}</p>
                </div>
            </div>
        </div>
    );
}
