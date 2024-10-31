import React, { useState } from "react";
import { Camera, X } from "lucide-react";
import AccountViewModel from "../viewModels/AccountViewModel";
import UpdateAccountDto from "../dto/account/updateAccountDto";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { toast } from "react-toastify";
import ImageViewModel from "../viewModels/ImageViewModel";

const EditProfile = ({
  isOpen,
  onClose,
  profilePic: existingProfilePicture,
}) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState(existingProfilePicture);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    let updateAccountDto = new UpdateAccountDto();
    updateAccountDto.bio = bio;
    updateAccountDto.DOB = dob;
    updateAccountDto.fullName = name;

    let response = await AccountViewModel.updateAccount(updateAccountDto);

    if (response instanceof ErrorMessage) {
      toast.error(response.error);
    } else {
      toast.success("Updated the profile data");
    }

    response = await ImageViewModel.setOwnProfilePicture(profilePic);
    if (response instanceof ErrorMessage) {
      toast.error(response.error);
    } else {
      toast.success("Updated the profile picture");
    }
    onClose();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const imageBlob = new Blob([file], { type: file.type });
    setProfilePic(imageBlob);
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div>
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
              <Camera className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Edit Profile
              </h3>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <div className="mt-1">
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                  <input
                    type="file"
                    className=""
                    onChange={handleProfilePicChange}
                  />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
