import React from 'react';

const SellCarBenefits = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      {/* Left Side: Benefits Section */}
      <div className="space-y-4 p-8 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-black">Why Sell on Car & Bids?</h2>
        <ul className="space-y-3">
          <li className="flex items-start transform transition-transform duration-200 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-8 w-8 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-2 text-black">Live support from listing to post-sale</span>
          </li>
          <li className="flex items-start transform transition-transform duration-200 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-8 w-8 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-2 text-black">
              Sell your car faster and go from submission to auction in under a week
            </span>
          </li>
          <li className="flex items-start transform transition-transform duration-200 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-8 w-8 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-2 text-black">
              Access our huge audience of engaged enthusiasts
            </span>
          </li>
          <li className="flex items-start transform transition-transform duration-200 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-8 w-8 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-2 text-black">
              Sell for free and receive 100% of the sale price
            </span>
          </li>
        </ul>
      </div>

      {/* Right Side: Testimonial Section */}
      <div className="p-6 bg-purple-100 rounded-lg transform transition-transform duration-200 hover:scale-105">
        <div className="flex items-center mb-2">
          {/* Star Ratings */}
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.357 4.176h4.385a1 1 0 01.588 1.81l-3.57 2.6 1.358 4.176a1 1 0 01-1.537 1.12l-3.573-2.6-3.572 2.6a1 1 0 01-1.537-1.12l1.358-4.176-3.57-2.6a1 1 0 01.588-1.81h4.385l1.357-4.176z" />
              </svg>
            ))}
          </div>
        </div>

        <p className="text-sm text-black mb-2">Ken S. Jun 2022</p>
        <p className="text-md text-black">
          The number of views and interested parties was staggering! The staff
          walked me through the entire process to make sure everything went
          smoothly, highly recommended.
        </p>
      </div>
    </div>
  );
};

export default SellCarBenefits;
