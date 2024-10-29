
import PropTypes from 'prop-types';

const CarManagementCard = ({ car }) => {
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

           


            {/* Car Details */}
            <div className="mt-2">
                <h3 className="text-lg font-bold">{car.name}</h3>
                <p className="text-sm text-gray-700">{car.details}</p>
            </div>

          
        </div>
    );
};

// Define PropTypes for the CarBidCard component
CarManagementCard.propTypes = {
    car: PropTypes.shape({
        name: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,

    }).isRequired,
};

export default CarManagementCard;
