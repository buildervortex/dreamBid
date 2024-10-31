import { useState } from "react";
import EditProfile from "./EditProfile";

const SellerDashbord = ({ profilePic }) => {
  const [editProfileOverlay, setEditProfileOverlay] = useState(false);

  return (
    <div>
      {/* Profile Section */}
      <div className="flex items-center justify-between p-6 mb-8 bg-purple-200 rounded-lg shadow-md">
        <div className="flex items-center">
          {/* Profile Picture */}
          <img
            src={profilePic}
            alt="Profile"
            className="w-16 h-16 mr-4 rounded-full shadow-lg"
          />
          <div>
            <div className="text-2xl font-bold text-purple-900">John Doe</div>
            <div className="text-gray-600">Joined October 2024</div>
          </div>
        </div>
        <button
          className="px-4 py-2 text-white transition duration-300 ease-in-out bg-purple-900 rounded hover:bg-purple-800"
          onClick={() => {
            setEditProfileOverlay(true);
          }}
        >
          Edit Profile
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 text-center transition duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
          <img
            src="AuctionManagementCars/totalbids.png"
            alt="Total Bids"
            className="mx-auto mb-4 w-14 h-14"
          />
          <h3 className="text-xl font-semibold">Total Bids</h3>
        </div>
        <div className="p-6 text-center transition duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
          <img
            src="AuctionManagementCars/activeauction.png"
            alt="Active Auctions"
            className="mx-auto mb-4 w-14 h-14"
          />
          <h3 className="text-xl font-semibold">Active Auctions</h3>
        </div>
        <div className="p-6 text-center transition duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
          <img
            src="AuctionManagementCars/wonaucion.png"
            alt="Won Auctions"
            className="mx-auto mb-4 w-14 h-14"
          />
          <h3 className="text-xl font-semibold">Won Auctions</h3>
        </div>
        <div className="p-6 text-center transition duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
          <img
            src="AuctionManagementCars/cancelauction.png"
            alt="Cancel Auctions"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Cancel Auctions</h3>
        </div>
      </div>

      {/* Sell Benefits & Testimonial Section */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* Sell Benefits Section */}
        <div className="p-6 transition duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
          <h3 className="mb-4 text-2xl font-bold">Why Sell on Car & Bids?</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2 font-bold text-purple-900">&#10003;</span>{" "}
              Live support from listing to post-sale
            </li>
            <li className="flex items-center">
              <span className="mr-2 font-bold text-purple-900">&#10003;</span>{" "}
              Sell your car faster and go from submission to auction in under a
              week
            </li>
            <li className="flex items-center">
              <span className="mr-2 font-bold text-purple-900">&#10003;</span>{" "}
              Access our huge audience of engaged enthusiasts
            </li>
            <li className="flex items-center">
              <span className="mr-2 font-bold text-purple-900">&#10003;</span>{" "}
              Sell for free and receive 100% of the sale price
            </li>
          </ul>
        </div>

        {/* Testimonial Section */}
        <div className="p-6 transition duration-300 ease-in-out transform bg-purple-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
          <h3 className="mb-4 text-xl font-semibold">Ken S. Jun 2022</h3>
          <p className="mb-4 text-gray-700">
            The number of views and interested parties was staggering! The staff
            walked me through the entire process to make sure everything went
            smoothly, highly recommended.
          </p>
          <div className="flex justify-center space-x-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-20">
        <button className="px-8 py-3 text-white transition duration-300 ease-in-out transform bg-purple-900 rounded-lg hover:bg-purple-800 hover:scale-105">
          Button
        </button>
      </div>
      <EditProfile
        isOpen={editProfileOverlay}
        profilePic={profilePic}
        onClose={() => {
          setEditProfileOverlay(false);
        }}
      ></EditProfile>
    </div>
  );
};

export default SellerDashbord;
