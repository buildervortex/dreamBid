import React from 'react';

export default function CounterCard({ title, count, svg }) {
    return (
        <div>
            {/* Card */}
            <div className="w-64 h-50 flex items-center flex-col p-4 bg-white rounded-lg shadow-xs border-2 border-purple-800">
                <div className="p-3 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-purple-600">
                    {svg} {/* Render the SVG passed as a prop */}
                </div>
                <div className='flex items-center flex-col'>
                    <p className="mb-2 mt-2 text-lg font-medium text-purple-700">
                        {title}
                    </p>
                    <p className="text-purple-700 text-3xl font-bold">
                        {count}
                    </p>
                </div>
            </div>
        </div>
    );
}
