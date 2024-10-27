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

        </div>
    );
}
