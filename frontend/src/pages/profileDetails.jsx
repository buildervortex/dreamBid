import React, { useState } from 'react';

const ProfileDetailsOverlay = ({ onClose }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [bio, setBio] = useState('');

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
    document.getElementById('fileInput').click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      dob,
      bio,
      profileImage,
    };
    console.log('Form submitted:', formData);
    // Additional form processing logic can go here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-80 p-6 shadow-lg relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-xl text-gray-600"
          aria-label="Close"
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
            aria-label="Choose Profile Picture"
          >
            Choose Profile Picture
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input 
              type="date" 
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <input 
              type="text" 
              placeholder="Enter your bio" 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="bg-purple-500 text-white w-full py-2 mt-6 rounded"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetailsOverlay;
