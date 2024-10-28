import React from 'react';

// Data for the counter cards
const cardData = [
    {
        title: "Cars Listed",
        count: 250,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a1 1 0 00-1 1v5a1 1 0 001 1h1v2H3a1 1 0 000 2h1v3a1 1 0 001 1h10a1 1 0 001-1v-3h1a1 1 0 100-2h-2v-2h1a1 1 0 001-1V4a1 1 0 00-1-1H4zm2 8V5h8v6H6zm10 2H4v2h12v-2z" />
            </svg>
        )
    },
    {
        title: "Active Bidders",
        count: 120,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 100 4 2 2 0 000-4zm3.5 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.5 0a3 3 0 100 6 3 3 0 000-6zM2 10a3 3 0 00-3 3v5h18v-5a3 3 0 00-3-3H2zm16-5h2V3h-2v2zM0 8h2V6H0v2zm18 2h2V8h-2v2z" />
            </svg>
        )
    },
    {
        title: "Auctions Won",
        count: 320,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 1h12a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1zm5 4a2 2 0 11-4 0 2 2 0 014 0zM5 13v5h2v-5H5zm4 0v5h2v-5H9zm4 0v5h2v-5h-2zm-8 4h8v-2H5v2z" />
            </svg>
        )
    },
];

// Testimonial data with profile images
const testimonials = [
    {
        quote: "The bidding process was incredibly smooth. I found the perfect car at an unbeatable price!",
        name: "John D.",
        image: User // Using the imported User image
    },
    {
        quote: "I sold my car within days! The platform is not only user-friendly but also very secure.",
        name: "Sarah K.",
        image: User // Using the imported User image
    },
    {
        quote: "I loved the variety of cars available. Bidding was both fun and straightforward!",
        name: "Michael R.",
        image: User // Using the imported User image
    },
    {
        quote: "I loved the variety of cars available. Bidding was both fun and straightforward!",
        name: "Michael R.",
        image: User // Using the imported User image
    },
    {
        quote: "I loved the variety of cars available. Bidding was both fun and straightforward!",
        name: "Michael R.",
        image: User // Using the imported User image
    },
];


export default function AboutUs() {
    return (
        <div>

            {/* Image and Text Section */}
            <div className='relative h-[50vh] mb-10'> {/* Set height to half screen */}
                <img
                    src={AboutUsImg}
                    alt='A scenic image representing our mission'
                    className='absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80'
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col text-center z-10'>
                    <h1 className='text-6xl text-white font-extrabold drop-shadow-lg'>About Us!</h1>
                    <h3 className='text-lg text-white mt-4 drop-shadow-md'>
                        We drive your journey forward by connecting buyers and sellers with the perfect vehicle,<br />
                        making the car shopping experience smoother, smarter, and more accessible for everyone.
                    </h3>
                    <button className='bg-white text-black py-2 px-4 mt-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300'>
                        Read More
                    </button>
                </div>
            </div>

            {/* Mission and Counter Cards Section */}
            <div className='flex flex-row w-full p-6'>
                <div className='flex flex-col w-6/12 justify-center items-center'>
                    <h1 className='text-2xl font-bold'>Our Mission</h1>
                    <p className='mt-4 ml-8 mr-8 text-center'>
                        Our mission is to revolutionize the car auction process by providing a transparent, secure, and efficient platform.
                        We aim to connect car buyers and sellers seamlessly, offering a variety of vehicles at competitive prices through an
                        easy-to-use bidding system. Whether you're looking to buy or sell, our goal is to ensure a smooth and rewarding experience for all.
                    </p>
                </div>
                <div className='w-6/12'>
                    <div className='flex flex-row flex-wrap justify-between'>
                        {cardData.map((data, index) => (
                            <CounterCard
                                key={index}
                                title={data.title}
                                count={data.count}
                                svg={data.svg}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Steps Section */}
            <div className="bg-purple-200 py-10 mt-10">
                <h2 className="text-3xl font-semibold text-center mb-4">How To Bid on Cars in 3 Steps</h2>
                <p className="text-center text-gray-700 mb-10">Follow these simple steps to start bidding on your dream car today!</p>

                <div className="flex justify-center space-x-32">
                    {/* Step 1 */}
                    <div className="text-center flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-black mb-4 text-xl font-semibold">
                            1
                        </div>
                        <h3 className="text-xl font-bold">Find Your Car</h3>
                        <p className="text-gray-700 mt-2">Browse through a wide selection of vehicles<br /> and find the one that suits your needs.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-black mb-4 text-xl font-semibold">
                            2
                        </div>
                        <h3 className="text-xl font-bold">Place Your Bid</h3>
                        <p className="text-gray-700 mt-2">Enter your bid amount and compete with other buyers.<br /> Stay updated on the auction progress.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center text-white w-20 h-20 rounded-full bg-purple-800 border-4 border-black mb-4 text-xl font-semibold">
                            3
                        </div>
                        <h3 className="text-xl font-bold">Win Your Car!</h3>
                        <p className="text-gray-700 mt-2">If you have the highest bid, congratulations!<br /> You'll soon be the proud owner of your new car.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-10">
                <h2 className="text-3xl font-semibold text-center mb-4">What Our Customers Say</h2>
                <p className="text-center text-gray-700 mb-10">Join thousands of satisfied customers!</p>

                <div className="flex flex-wrap justify-center space-x-4"> {/* Ensure cards display side by side */}
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="max-w-xs w-full sm:w-1/3 p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mx-auto mb-2" />
                            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            <p className="text-right font-bold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-purple-200 py-10 px-6">
                <h2 className="text-3xl font-semibold text-center mb-6">Get In Touch With Us</h2>
                <p className="text-center text-gray-600 mb-8">If you have any questions or need assistance with the car bidding process, feel free to reach out.</p>

                <div className="flex items-center justify-center">
                    <div className="max-w-lg w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>

        </div >
    );
}
