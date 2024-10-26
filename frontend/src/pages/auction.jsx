import React from 'react'
import CarCard from '../components/CarCard'
import ButtonBar from '../components/ButtonBar'
import FilterCards from '../components/FilterCars'


function Auction() {
  return (
    <>
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
    <h2 className="text-3xl font-bold  mb-4 text-purple-900">
        Auctions(40)
      </h2>
    <ButtonBar/>
    <br></br>
    <FilterCards/>
    <br></br>
    
    <h1>Ending soon</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
    <CarCard/>
    <CarCard/>
    <CarCard/>
    <CarCard />
    <CarCard />
    <CarCard />
    <CarCard />
    </div>

<br></br>
    <h1>Featured</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
    <CarCard/>
    <CarCard/>
    <CarCard/>
    <CarCard />
    </div>

<br></br>
    <h1>Result(385)</h1>

    <div class="flex space-x-4 mt-4">
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500 selected:border-purple-800 selected:font-bold">Ending soon</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">Newly listed</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">No reserved</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">Lowest Mileage</a>
  <a href="#" class="text-black hover:underline pb-1 border-b-2 border-transparent hover:border-gray-500">Closest to me</a>
</div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
    <CarCard/>
    <CarCard/>
    <CarCard/>
    <CarCard />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
    <CarCard/>
    <CarCard/>
    <CarCard/>
    <CarCard />
    </div>


<br></br>
<br></br>


<div className="flex items-center justify-center">
      <div className="bg-purple-900 text-white px-4 py-1.5 rounded-full flex items-center">
        {/* Left Arrow */}
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Text */}
        <span className="px-4">1 to 10</span>

        {/* Right Arrow */}
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>

    </>
  )
}

export default Auction;