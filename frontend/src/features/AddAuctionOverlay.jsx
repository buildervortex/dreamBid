import React, { useState, useEffect } from "react";
import { X, Calendar, Clock } from "lucide-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Menu, MenuItem, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import AddAuctionDto from "../dto/auction/addAuctionDto";
import AuctionViewModel from "../viewModels/AuctionViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { toast } from "react-toastify";

dayjs.extend(utc);

const AddAuctionOverlay = ({ isOpen, onClose, onSubmit, cars = [] }) => {
  const [formData, setFormData] = useState({
    auctionStartDate: dayjs().utc().toDate(),
    auctionEndDate: dayjs().utc().add(1, "week").toDate(),
    selectedCar: null,
  });

  const [errors, setErrors] = useState({});

  const handleDateChange = (name, date) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCarSelect = (car) => {
    setFormData((prev) => ({
      ...prev,
      selectedCar: car,
    }));
    if (errors.selectedCar) {
      setErrors((prev) => ({ ...prev, selectedCar: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.auctionStartDate || formData.auctionStartDate < new Date()) {
      newErrors.auctionStartDate = "Invalid start date";
    }
    if (
      !formData.auctionEndDate ||
      formData.auctionEndDate <= formData.auctionStartDate
    ) {
      newErrors.auctionEndDate = "Invalid end date";
    }
    if (!formData.selectedCar) {
      newErrors.selectedCar = "Please select a car";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let addAuctionDto = new AddAuctionDto();

    addAuctionDto.auctionStartTime = formData.auctionStartDate.toISOString();
    addAuctionDto.auctionEndTime = formData.auctionEndDate.toISOString();

    let response = await AuctionViewModel.addAuction(
      addAuctionDto,
      formData.selectedCar.id
    );

    if (response instanceof ErrorMessage) {
      toast.error(response.error);
      onClose();
      return;
    }
    toast.success("The Auction is created");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Add New Auction
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Auction Dates
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Auction Start Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute top-1/2 transform -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
                    <input
                      type="datetime-local"
                      name="auctionStartDate"
                      value={dayjs(formData.auctionStartDate).format(
                        "YYYY-MM-DDTHH:mm"
                      )}
                      onChange={(e) =>
                        handleDateChange(
                          "auctionStartDate",
                          new Date(e.target.value)
                        )
                      }
                      className={`w-full px-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                        errors.auctionStartDate
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.auctionStartDate && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.auctionStartDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Auction End Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute top-1/2 transform -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
                    <input
                      type="datetime-local"
                      name="auctionEndDate"
                      value={dayjs(formData.auctionEndDate).format(
                        "YYYY-MM-DDTHH:mm"
                      )}
                      onChange={(e) =>
                        handleDateChange(
                          "auctionEndDate",
                          new Date(e.target.value)
                        )
                      }
                      className={`w-full px-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                        errors.auctionEndDate
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.auctionEndDate && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.auctionEndDate}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Select Car
              </h3>

              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      {formData.selectedCar
                        ? formData.selectedCar.title
                        : "Select a car"}
                      <ChevronDown
                        className="w-5 h-5 ml-2 -mr-1 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-4 py-3 space-y-1">
                        {cars.map((car) => (
                          <MenuItem key={car.car.id}>
                            {({ active }) => (
                              <button
                                type="button"
                                onClick={() => handleCarSelect(car.car)}
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } block w-full px-4 py-2 text-sm`}
                              >
                                {car.car.model}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {errors.selectedCar && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.selectedCar}
                  </p>
                )}
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t py-4 px-6 -mx-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Auction
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAuctionOverlay;
