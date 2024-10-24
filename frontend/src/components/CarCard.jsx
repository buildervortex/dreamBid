import React from 'react'

function CarCard() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-purple-100 p-4">
    <img
      className="w-full rounded-lg"
      src="mycar.jpg"
      alt="Car"
    />
    <div className="pt-4">
      <div className="flex justify-between items-center mb-2">
        <div className="bg-gray-800 text-white px-2 py-1 rounded-full text-sm flex items-center">
          <svg
            className="h-4 w-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
          
          </svg>
          8:24:57
        </div>
        <div className="text-lg font-semibold">$99,999</div>
      </div>
      <div className="text-xl font-bold mb-2">2012 Nissan GT-R Premium</div>
      <p className="text-gray-700 text-base">Springfield, MO 65802</p>
    </div>
  </div>
  )
}

export default CarCard