// CarBidCard.jsx
import PropTypes from 'prop-types';

// CarBidCard Component
const CarBidCard = ({ car }) => {
  return (
    <div className="p-4 overflow-hidden transition-transform duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105">
      {/* Car Image */}
      <div className="relative">
        <img src={car.image} alt={car.name} className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform rounded-md hover:scale-105" />
        {/* Timer Overlay */}
        <div className="absolute bottom-0 left-0 px-2 py-1 text-white bg-black bg-opacity-50 rounded-tr-lg">
          <span className="text-sm">{car.timeRemaining}</span>
        </div>
      </div>

      {/* Bid Information */}
      <div className="p-2 mt-3 text-center bg-purple-900 rounded-lg">
  <div className="flex items-center justify-between">
    <div className="text-sm text-white">
      <span>Current Bid: </span>
      <span className="text-lg font-semibold">{car.currentBid}</span>
    </div>
    <div className="text-sm text-white">
      <span>Start Bid: </span>
      <span className="text-lg font-semibold">{car.startBid}</span>
    </div>
  </div>
</div>


      {/* Car Details */}
      <div className="mt-2">
        <h3 className="text-lg font-bold">{car.name}</h3>
        <p className="text-sm text-gray-700">{car.details}</p>
      </div>

      {/* Buttons */}
      <div className="flex mt-4 space-x-4">
        <button className="px-4 py-1 text-white transition-colors duration-300 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-700">Edit</button>
        <button className="px-4 py-1 text-white transition-colors duration-300 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-700">Delete</button>
      </div>
    </div>
  );
};

// Define PropTypes for the CarBidCard component
CarBidCard.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    currentBid: PropTypes.string.isRequired,
    startBid: PropTypes.string.isRequired,
    timeRemaining: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarBidCard;
