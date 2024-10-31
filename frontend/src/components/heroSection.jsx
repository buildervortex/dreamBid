import React, { useState, useEffect, useRef } from "react";
import heroImage from "../Assets/HeroImage.png"; // Update with correct path
import Hero1 from "../Assets/Hero1.avif";
import Hero2 from "../Assets/Hero2.avif";
import Hero3 from "../Assets/Hero3.avif";

const HeroSection = () => {
  const carouselImages = [Hero1, Hero2, Hero3];
  const [backgroundImage, setBackgroundImage] = useState(heroImage);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Create a ref for the target section
  const targetSectionRef = useRef(null);

  const changeBackgroundImage = () => {
    const nextIndex = (selectedImageIndex + 1) % carouselImages.length;
    setBackgroundImage(carouselImages[nextIndex]);
    setSelectedImageIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(changeBackgroundImage, 5000);
    return () => clearInterval(intervalId);
  }, [selectedImageIndex]);

  const handleImageClick = (image, index) => {
    setBackgroundImage(image);
    setSelectedImageIndex(index);
  };

  const visibleImages = [
    carouselImages[selectedImageIndex],
    carouselImages[(selectedImageIndex + 1) % carouselImages.length],
    carouselImages[(selectedImageIndex + 2) % carouselImages.length],
  ];

  // Function to scroll to the target section
  const scrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="relative bg-cover h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "right center",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 lg:px-32 text-white">
          <div className="mt-10 bg-gray-600 bg-opacity-70 p-6 rounded-xl w-full max-w-lg ">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg animate-fade-in">
              Discover Tomorrow's Rides Today!
            </h1>
            <p className="mt-3 text-xl md:text-1xl text-gray-300 drop-shadow-lg max-w-lg animate-fade-in-delayed">
              Your premier destination to bid on and win the car of your dreams.
            </p>
            <button className="mt-6 font-semibold bg-purple-500 hover:bg-purple-900 text-white py-3 px-6 rounded-lg">
              Start Bidding
            </button>
            <button className="ml-5 mt-6 font-semibold border-dotted border-2 border-purple-300 hover:bg-purple-900 text-white py-3 px-6 rounded-lg">
              Get Starting
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-10 bg-gray-600 bg-opacity-70 p-6 rounded-md w-full max-w-lg flex items-center">
            <input
              type="text"
              className="w-5/6 py-3 px-5 text-gray-900 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              placeholder="Search for your dream car..."
            />
            <button className="bg-purple-700 text-white font-semibold py-3 px-5 rounded-r-lg transition-all duration-300 ease-in-out hover:bg-purple-500 focus:ring-4 focus:ring-purple-400 shadow-lg">
              Search
            </button>
          </div>

          {/* Carousel */}
          <div className="mt-10 flex space-x-4 items-center carousel-container">
            {visibleImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`w-32 h-24 bg-gray-700 rounded-md flex items-center justify-center border border-transparent transition duration-300 ease-in-out ${
                    selectedImageIndex ===
                    (index === 0
                      ? selectedImageIndex
                      : (selectedImageIndex + index) % carouselImages.length)
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-70"
                  }`}
                  onClick={() =>
                    handleImageClick(
                      image,
                      (selectedImageIndex + index) % carouselImages.length
                    )
                  }
                >
                  <img
                    src={image}
                    alt={`Car thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              );
            })}

            <button
              onClick={changeBackgroundImage}
              className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white"
            >
              <span>&#10095;</span>
            </button>
          </div>

          {/* Centered Button */}
          <div className="absolute bottom-0 right-0 left-0 flex justify-center mb-10">
            <button
              onClick={scrollToSection}
              className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-110"
            >
              <span className="text-2xl font-semibold rotate-180">&#8593;</span>{" "}
              {/* Up arrow symbol */}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
