import React from 'react';

export default function BrandCard({ brandName, brandImages }) {
    return (
        <div className='w-64 h-64 p-4 bg-white border-solid border-2 border-purple-800 rounded-xl hover:scale-105 shadow-lg '>
            <div className='flex-1 mb-2'>
                {brandImages ? (
                    <div className='w-full h-48 flex items-center justify-center'>
                        <img
                            src={brandImages}
                            alt={brandName}
                            className='w-auto h-4/6 object-contain mx-auto rounded' 
                        />
                    </div>
                ) : (
                    <div className='w-full h-48 flex items-center justify-center bg-gray-200 rounded'>
                        <p className='text-gray-500'>Image not available</p>
                    </div>
                )}
            </div>
            <h3 className='text-purple-800 text-2xl font-bold flex items-center justify-center'>{brandName}</h3>
        </div>
    );
}
