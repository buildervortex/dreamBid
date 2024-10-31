import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        service: [],
    });

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'service') {
            if (checked) {
                setFormData({
                    ...formData,
                    service: [...formData.service, value],
                });
            } else {
                setFormData({
                    ...formData,
                    service: formData.service.filter((service) => service !== value),
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md border-solid border-2 border-purple-800 rounded-xl">
            <h2 className="text-2xl font-semibold text-center text-purple-500">Contact Our Team</h2>
            <p className="text-center text-gray-500 mb-6">Looking for help with buying or selling a vehicle? Reach out to us!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-500"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-500"
                    />
                </div>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-500"
                />

                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-500"
                />

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-500"
                />

                <div className="space-y-2">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="service"
                            value="Buy vehicle"
                            onChange={handleChange}
                            className="h-4 w-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <label className="ml-2">Buy vehicle</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="service"
                            value="Sell vehicle"
                            onChange={handleChange}
                            className="h-4 w-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <label className="ml-2">Sell vehicle</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="service"
                            value="Exchange vehicle"
                            onChange={handleChange}
                            className="h-4 w-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <label className="ml-2">Exchange vehicle</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="service"
                            value="Buy parts"
                            onChange={handleChange}
                            className="h-4 w-4 bg-purple-500 border-gray-300 rounded focus:ring--purple-500"
                        />
                        <label className="ml-2">Buy parts</label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-6 text-center">
                <p>Chat with us: <span className="text-purple-500">Start a live chat</span></p>
                <p>Call us: <span className="text-purple-500">077-9345670</span></p>
                <p>Visit us: <span className="text-purple-500">No 19, Malabe, Colombo</span></p>
            </div>
        </div>
    );
};

export default ContactForm;
