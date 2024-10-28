import React, { useState } from 'react';

import SellImage from '../Assets/SellImage.png';
import BrandCard from '../components/brandCard';
import AuctionCard from '../components/auctionCard';
import SellDetails from '../components/sellDetails';
import CounterCard from '../components/counterCard';
import SayAboutCard from '../components/sayAboutCard';
import SoldCard from '../components/soldCard';
import { motion } from 'framer-motion';


import Bmw from '../Assets/bmw.png'
import Nissan from '../Assets/nissan.png'
import Benz from '../Assets/benz.png'
import Suzuki from '../Assets/suzuki.png'
import Toyota from '../Assets/toyota.png'
import Honda from '../Assets/honda.png'

import Convertible from '../Assets/convertible.svg'
import Coupe from '../Assets/coupe.svg'
import Estate from '../Assets/estate.svg'
import Hatchback from '../Assets/hatchback.svg'
import Suv from '../Assets/suv.svg'
import Saloon from '../Assets/saloon.svg'
import HeroSection from '../components/heroSection';

// Example auction items data
const auctionItems = [
    {
        id: 1,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2016 Land Rover LR4",
        owner: "By Esthera Jackson",
        currentBid: "$10,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 1
    },
    {
        id: 2,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 2
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 3
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 4
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 5
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 6
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 7
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 8
    },

];

const SoldItems = [
    {
        id: 1,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2016 Land Rover LR4",
        owner: "By Esthera Jackson",
        currentBid: "$10,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 1
    },
    {
        id: 2,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 2
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$51,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 3
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$45,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 4
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$85,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 5
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$95,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 6
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$35,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 7
    },
    {
        id: 3,
        image: "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
        productName: "2020 Tesla Model X",
        owner: "By John Doe",
        currentBid: "$55,000",
        avatars: [
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
            "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
        ],
        extraBidders: 8
    },

];

const sellingDetails = [
    "Wide buyer reach",
    "Competitive bidding prices.",
    "Fast transaction process.",
    "Expert valuation services.",
    "Secure payment options.",
    "Comprehensive marketing strategies.",
    "Dedicated customer support."
];

const cardData = [
    {
        title: "My Blog Posts",
        count: 190,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
        )
    },
    {
        title: "Comments",
        count: 50,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {/* SVG path for comments icon */}
                <path d="M10 3a7 7 0 00-6.32 10.407A2.5 2.5 0 011 16.5V17a1 1 0 001 1h2a2 2 0 002 2h10a1 1 0 001-1v-.5a2.5 2.5 0 01-2.68-2.093A7 7 0 0010 3z"></path>
            </svg>
        )
    },
    {
        title: "Likes",
        count: 320,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {/* SVG path for likes icon */}
                <path d="M10 18l-1.45-1.32C4.4 12.36 1 9.28 1 5.5 1 3.42 3.42 1 5.5 1c1.74 0 3.41.81 4.5 2.09C11.09 1.81 12.76 1 14.5 1 16.58 1 19 3.42 19 5.5c0 3.78-3.4 6.86-7.55 11.18L10 18z"></path>
            </svg>
        )
    },
    {
        title: "Likes",
        count: 320,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {/* SVG path for likes icon */}
                <path d="M10 18l-1.45-1.32C4.4 12.36 1 9.28 1 5.5 1 3.42 3.42 1 5.5 1c1.74 0 3.41.81 4.5 2.09C11.09 1.81 12.76 1 14.5 1 16.58 1 19 3.42 19 5.5c0 3.78-3.4 6.86-7.55 11.18L10 18z"></path>
            </svg>
        )
    },
    {
        title: "Likes",
        count: 320,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {/* SVG path for likes icon */}
                <path d="M10 18l-1.45-1.32C4.4 12.36 1 9.28 1 5.5 1 3.42 3.42 1 5.5 1c1.74 0 3.41.81 4.5 2.09C11.09 1.81 12.76 1 14.5 1 16.58 1 19 3.42 19 5.5c0 3.78-3.4 6.86-7.55 11.18L10 18z"></path>
            </svg>
        )
    },
    {
        title: "Likes",
        count: 320,
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {/* SVG path for likes icon */}
                <path d="M10 18l-1.45-1.32C4.4 12.36 1 9.28 1 5.5 1 3.42 3.42 1 5.5 1c1.74 0 3.41.81 4.5 2.09C11.09 1.81 12.76 1 14.5 1 16.58 1 19 3.42 19 5.5c0 3.78-3.4 6.86-7.55 11.18L10 18z"></path>
            </svg>
        )
    },
];

const AboutItems = [
    { name: "Emily Johnson1", date: "04/03/2024", message: "I placed a bid on my dream car and won! The process was smooth, and I appreciated the detailed car history provided. Highly recommend Dream Bid for hassle-free car auctions" },
    { name: "Emily Johnson2", date: "04/03/2024", message: "I placed a bid on my dream car and won! The process was smooth, and I appreciated the detailed car history provided. Highly recommend Dream Bid for hassle-free car auctions" },
    { name: "Emily Johnson3", date: "04/03/2024", message: "I placed a bid on my dream car and won! The process was smooth, and I appreciated the detailed car history provided. Highly recommend Dream Bid for hassle-free car auctions" },
    { name: "Emily Johnson4", date: "04/03/2024", message: "ss was smooth, and I appreciated the detailed car history provided. Highly recommend Dream Bid for hassle-free car auctions" },

];



export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, auctionItems.length - 1));
    };

    const handlePrevious2 = () => {
        setCurrentIndex2(prevIndex2 => Math.max(prevIndex2 - 1, 0));
    };

    const handleNext2 = () => {
        setCurrentIndex2(prevIndex2 => Math.min(prevIndex2 + 1, SoldItems.length - 1));
    };
    const handlePrevious3 = () => {
        setCurrentIndex3(prevIndex3 => Math.max(prevIndex3 - 1, 0));
    };

    const handleNext3 = () => {
        setCurrentIndex3(prevIndex3 => Math.min(prevIndex3 + 1, AboutItems.length - 1));
    };




    return (

        <div>
            {/* Hero Section */}
            <div>
                <HeroSection />
            </div>
            
             <div className='mx-4 md:mx-10'>
            {/* Top Model Brand Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className='flex items-center justify-center w-full mt-4 mb-4'>
                    <h1 className='text-4xl'>Top Model Brand</h1>
                </div>

                <div className='flex flex-row flex-wrap justify-center'>
                    <BrandCard brandName="BMW" brandImages={Bmw} />
                    <BrandCard brandName="HONDA" brandImages={Honda} />
                    <BrandCard brandName="BENZ" brandImages={Benz} />
                    <BrandCard brandName="SUSUKI" brandImages={Suzuki} />
                    <BrandCard brandName="TOYOTA" brandImages={Toyota} />
                    <BrandCard brandName="NISSAN" brandImages={Nissan} />
                </div>
            </motion.div>

            {/* Body Styles Section */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className='flex items-center justify-center w-full mt-4 mb-4'>
                    <h1 className='text-4xl'>Body Styles</h1>
                </div>

                <div className='flex flex-row flex-wrap justify-center pb-6'>
                    <BrandCard brandName="SUV" brandImages={Suv} />
                    <BrandCard brandName="SALOON" brandImages={Saloon} />
                    <BrandCard brandName="HATCHBACK" brandImages={Hatchback} />
                    <BrandCard brandName="CONVERTIBLE" brandImages={Convertible} />
                    <BrandCard brandName="COUPE" brandImages={Coupe} />
                    <BrandCard brandName="ESTATE" brandImages={Estate} />
                </div>
            </motion.div>
        </div>

            {/* Live Auctions Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='bg-purple-200'
            >
                <div className='flex items-center justify-center w-full mt-4 mb-4'>
                    <h1 className='text-4xl mt-4'>Live Auctions</h1>
                </div>

                <div className='flex flex-col mr-10 ml-10'>
                    <div className='flex justify-end mb-4 gap-5 mr-8 rounded-xl'>
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className='bg-purple-800 text-white py-2 px-4 rounded-l cursor-pointer'
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex + 6 >= auctionItems.length}
                            className='bg-purple-800 text-white py-2 px-4 rounded-r cursor-pointer'
                        >
                            Next
                        </button>
                    </div>

                    <div className='flex flex-row flex-wrap justify-between ml-6 mr-6 mb-8'>
                        {auctionItems.slice(currentIndex, currentIndex + 6).map((item, index) => (
                            <AuctionCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Recently Sold Cars Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className='flex items-center justify-center w-full mt-4 mb-4'>
                    <h1 className='text-4xl mt-4'>Recently Sold Cars</h1>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-end mb-4 gap-5 mr-16 rounded-xl'>
                        <button
                            onClick={handlePrevious2}
                            disabled={currentIndex2 === 0}
                            className='bg-purple-800 text-white py-2 px-4 rounded-l cursor-pointer'
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext2}
                            disabled={currentIndex2 + 6 >= SoldItems.length}
                            className='bg-purple-800 text-white py-2 px-4 rounded-r cursor-pointer'
                        >
                            Next
                        </button>
                    </div>

                    <div className='flex flex-row flex-wrap justify-between ml-16 mr-16 mb-8'>
                        {SoldItems.slice(currentIndex2, currentIndex2 + 6).map((item2, index2) => (
                            <SoldCard key={index2} item2={item2} />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Place Bid Section */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='bg-purple-200'
            >
                <div className='flex items-center justify-center w-full mt-4 mb-4'>
                    <h1 className='text-4xl mt-4'>Place Bid On Your Car</h1>
                </div>

                <div className='flex flex-row items-center justify-between'>
                    <div className='ml-40'>
                        <h1 className='text-3xl font-semibold mb-4'>Make more money by selling your car with us</h1>
                        <SellDetails details={sellingDetails} />
                    </div>
                    <div className='mr-40'>
                        <img src={SellImage} alt="A check icon representing financial transactions" />
                    </div>
                </div>
            </motion.div>

            {/* Counter Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className='flex flex-row flex-wrap justify-between m-6'>
                    {cardData.map((data, index) => (
                        <CounterCard
                            key={index}
                            title={data.title}
                            count={data.count}
                            svg={data.svg}
                        />
                    ))}
                </div>
            </motion.div>

            {/* What They Say Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className='bg-purple-200 pb-4'
            >
                <div className='flex items-center justify-center w-full mt-4 mb-4'>
                    <h1 className='text-4xl mt-4'>What they say about us</h1>
                </div>

                <div className='flex justify-end mb-4 gap-5  rounded-xl mr-16'>
                    <button
                        onClick={handlePrevious3}
                        disabled={currentIndex3 === 0}
                        className='bg-purple-800 text-white py-2 px-4 rounded-l cursor-pointer'
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext3}
                        disabled={currentIndex3 + 3 >= AboutItems.length}
                        className='bg-purple-800 text-white py-2 px-4 rounded-r cursor-pointer'
                    >
                        Next
                    </button>
                </div>

                <div className='flex flex-row flex-wrap justify-between ml-16  mb-8 mr-16 '>
                    {AboutItems.slice(currentIndex3, currentIndex3 + 3).map((item, index) => (
                        <SayAboutCard
                            key={index}
                            name={item.name}
                            date={item.date}
                            message={item.message}
                        />
                    ))}
                </div>
            </motion.div>

        </div>

    );
}
