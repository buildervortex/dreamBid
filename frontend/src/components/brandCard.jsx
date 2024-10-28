// BrandCard.jsx
import React from 'react';

export default function BrandCard({ brandName, brandImages }) {
    return (
        <div className='w-48 h-48 p-2 bg-white border-2 border-purple-800 rounded-xl hover:scale-105 shadow-lg m-4 flex flex-col'>
            <div className='flex-1 mb-2'>
                {brandImages ? (
                    <div className='w-full h-32 flex items-center justify-center'>
                        <img
                            src={brandImages}
                            alt={brandName}
                            className='w-auto h-full object-contain mx-auto rounded' 
                        />
                    </div>
                ) : (
                    <div className='w-full h-32 flex items-center justify-center bg-gray-200 rounded'>
                        <p className='text-gray-500'>Image not available</p>
                    </div>
                )}
            </div>
            <h3 className='text-purple-800 text-lg font-bold text-center'>{brandName}</h3>
        </div>
    );
}
