import React, { useState } from 'react';

function CarDetailsForm() {
    // State to handle uploaded images
    const [images, setImages] = useState([]);

    // Function to handle multiple image uploads
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    // Function to handle form submission (to be implemented as needed)
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-purple-500 text-2xl font-bold mb-4">Car Details</h2>

                {/* Form Fields */}
                {['Make', 'Model', 'Year', 'Mileage', 'Vin', 'Condition Report', 'Starting Price', 'Reserve Price'].map((field) => (
                    <div key={field} className="mb-4">
                        <label className="block text-gray-700">{field}</label>
                        <input
                            type="text"
                            placeholder={`Enter your ${field.toLowerCase()}`}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                ))}

                {/* Car Images Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700">Car Images</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleImageUpload}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <div className="flex gap-2 mt-2">
                        {images.map((image, index) => (
                            <div key={index} className="border border-gray-300 p-1 rounded">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Uploaded ${index + 1}`}
                                    className="w-16 h-16 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button
                        type="reset"
                        className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                    >
                        Clean
                    </button>
                    <button
                        type="submit"
                        className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CarDetailsForm;
