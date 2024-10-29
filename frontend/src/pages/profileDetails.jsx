import React, { useState } from 'react';

const ProfileDetailsOverlay = ({ onClose }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-80 p-6 shadow-lg relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-xl text-gray-600"
        >
          &times;
        </button>
        
        {/* Title */}
        <h2 className="text-purple-600 text-lg font-bold mb-2">Profile Details</h2>
        <hr className="border-t-2 border-purple-400 mb-4" />

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>
          {/* Hidden File Input */}
          <input 
            type="file" 
            id="fileInput" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: 'none' }} 
          />
          {/* Custom Button */}
          <button 
            onClick={handleButtonClick} 
            className="bg-purple-500 text-white py-1 px-4 rounded mb-6"
          >
            Choose Profile Picture
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input 
              type="date" 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <input 
              type="text" 
              placeholder="Enter your bio" 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>

        {/* Update Button */}
        <button className="bg-purple-500 text-white w-full py-2 mt-6 rounded">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsOverlay;
