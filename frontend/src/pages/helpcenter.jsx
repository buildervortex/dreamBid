import Card from "../components/Card";
import FaqSection from "../components/FaqSection";

const Helpcenter = () => {
  
  return (
<>
<div className="px-4 py-8 max-w-screen-xl mx-auto">
<div className="flex flex-col items-center justify-center text-center py-12 bg-white">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6">
        Help Center
      </h1>

      {/* Subheading Paragraph */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
        Got a question about selling with <span className="font-semibold">Transfree</span>? 
        We’re here to help.
      </p>
    </div>

    <div className="flex justify-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search your solution"
          className="w-80 md:w-96 p-3 rounded-full shadow-md border-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-500"
        />
        <button className="absolute right-3 top-3 text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17.65 17.65a7.5 7.5 0 10-10.61 0 7.5 7.5 0 0010.61 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    

<div className=" mt-8">
      <button className="text-lg font-semibold text-purple-600 hover:text-purple-800 px-4 py-2 border-b-2 border-transparent hover:border-purple-600 transition-colors duration-300">
        Explore all topics
      </button>
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>

<br></br>
<br></br>
<div className="flex flex-col items-center justify-center p-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4 text-purple-800">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      
      {/* Subheading Paragraph */}
      <p className="text-center text-gray-600 max-w-2xl mb-8">
        Our Help Center is designed to make your learning journey smoother and more engaging. Can’t find what you need? Contact our support team for personalized assistance!
      </p>
</div>


<div className=" flex items-center justify-center ">
      <FaqSection />
    </div>

</div>

<div className="flex flex-col items-center justify-center mt-10 p-4">
      <h2 className="text-purple-600 text-lg font-semibold uppercase mb-2">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-6">
        Our Help Center is designed to make your learning journey smoother and more engaging. Can't find what you need? Contact our support team for personalized assistance!
      </p>

      <div className="flex justify-center items-center w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email address here..."
          className="flex-grow p-3 rounded-full text-gray-700 placeholder-gray-500 bg-pink-100 focus:outline-none focus:ring-2 focus:ring-purple-300 mr-2"
        />
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full">
          Button
        </button>
      </div>
    </div>



</>

  );
  
};

export default Helpcenter;
