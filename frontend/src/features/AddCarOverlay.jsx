import React, { useState } from "react";
import { X, Upload, Image as ImageIcon, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";
import AddCarDto from "../dto/car/addCarDto";
import CarViewModel from "../viewModels/CarViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import ImageViewModel from "../viewModels/ImageViewModel";

const AddCarOverlay = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    mileage: "",
    vin: "",
    conditionReport: "",
    startingPrice: "",
    reservePrice: "",
  });

  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const clearState = () => {
    setFormData((prev) => {
      return {
        make: "",
        model: "",
        year: new Date().getFullYear(),
        mileage: "",
        vin: "",
        conditionReport: "",
        startingPrice: "",
        reservePrice: "",
      };
    });

    setImages((prev) => []);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const removeImage = (index) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.make) newErrors.make = "Make is required";
    if (!formData.model) newErrors.model = "Model is required";
    if (
      !formData.year ||
      formData.year < 1900 ||
      formData.year > new Date().getFullYear() + 1
    ) {
      newErrors.year = "Invalid year";
    }
    if (!formData.mileage || formData.mileage < 0)
      newErrors.mileage = "Invalid mileage";
    if (!formData.vin) newErrors.vin = "VIN is required";
    if (!formData.startingPrice || formData.startingPrice <= 0)
      newErrors.startingPrice = "Invalid starting price";
    if (
      formData.reservePrice &&
      formData.reservePrice < formData.startingPrice
    ) {
      newErrors.reservePrice =
        "Reserve price must be greater than starting price";
    }
    if (images.length === 0)
      newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    let addCarDto = new AddCarDto();
    addCarDto.conditionReport = formData.conditionReport;
    addCarDto.make = formData.make;
    addCarDto.mileage = formData.mileage;
    addCarDto.model = formData.model;
    addCarDto.reservePrice = formData.reservePrice;
    addCarDto.startingPrice = formData.startingPrice;
    addCarDto.vin = formData.vin;
    addCarDto.year = formData.year;

    let response = await CarViewModel.createCar(addCarDto);
    if (response instanceof ErrorMessage) {
      toast.error(response.error);
      clearState();
      onClose();
      return;
    } else {
      toast.success("The car is created");
    }

    images.forEach(async (image) => {
      let imageResponse = await ImageViewModel.uploadCarImage(
        response.id,
        new Blob([image.file], { type: image.file.type })
      );

      if (imageResponse instanceof ErrorMessage)
        toast.error(imageResponse.error);
      else toast.success("Image uploaded successfully");
    });
    clearState();
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={() => {
            clearState();
            onClose();
          }}
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
              Add New Vehicle
            </h2>
            <button
              onClick={() => {
                clearState();
                onClose();
              }}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Basic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Make
                  </label>
                  <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.make ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.make && (
                    <p className="mt-1 text-sm text-red-500">{errors.make}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.model ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.model && (
                    <p className="mt-1 text-sm text-red-500">{errors.model}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.year ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.year && (
                    <p className="mt-1 text-sm text-red-500">{errors.year}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mileage
                  </label>
                  <input
                    type="number"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    min="0"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.mileage ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.mileage && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.mileage}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Vehicle Details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  VIN
                </label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.vin ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.vin && (
                  <p className="mt-1 text-sm text-red-500">{errors.vin}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Condition Report
                </label>
                <textarea
                  name="conditionReport"
                  value={formData.conditionReport}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Describe the vehicle's condition..."
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Pricing</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Starting Price ($)
                  </label>
                  <input
                    type="number"
                    name="startingPrice"
                    value={formData.startingPrice}
                    onChange={handleChange}
                    min="0"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.startingPrice
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.startingPrice && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.startingPrice}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reserve Price ($)
                  </label>
                  <input
                    type="number"
                    name="reservePrice"
                    value={formData.reservePrice}
                    onChange={handleChange}
                    min="0"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.reservePrice ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.reservePrice && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.reservePrice}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Vehicle Images
              </h3>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 text-center ${
                  isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Drag and drop images here, or click to select files
                  </p>
                </label>
              </div>

              {errors.images && (
                <p className="text-sm text-red-500">{errors.images}</p>
              )}

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.preview}
                        alt={`Vehicle preview ${index + 1}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white border-t py-4 px-6 -mx-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCarOverlay;
