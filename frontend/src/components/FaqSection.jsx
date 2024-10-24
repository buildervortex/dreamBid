// FaqSection.jsx
import React from 'react';
import FaqCategory from './FaqCategory';
import FaqCard from './FaqCard';

const FaqSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-lg">
      {/* Left side - FAQ categories */}
      <div className="flex flex-col w-full md:w-1/3">
        <FaqCategory title="General Questions" icon="➡️" />
        <FaqCategory title="Additional Questions" icon="➡️" />
        <div className="bg-purple-200 p-4 rounded-lg text-center mt-6 hover:bg-purple-300 transition">
          <p className="font-semibold">You Have a Different Question?</p>
          <p className="text-sm">Our team will answer all your questions. We ensure a quick response.</p>
        </div>
      </div>

      {/* Right side - FAQ cards */}
      <div className="flex flex-col w-full md:w-2/3">
        <FaqCard 
          question="How can I integrate SaaS into my existing platform?" 
          answer="Our Help Center is designed to make your learning journey smoother and more engaging. Can't find what you need? Contact our support team for personalized assistance!" 
          icon="➡️" 
        />
        <FaqCard question="How do I register on Dream Bid?" icon="🔄" />
        <FaqCard question="Is there a minimum bid amount?" icon="➡️" />
        <FaqCard question="How does the bidding process work?" icon="🔄" />
        <FaqCard question="Are there any fees for winning an auction?" icon="➡️" />
      </div>
    </div>
  );
};

export default FaqSection;
