import React from 'react';

function CarDetails() {
  return (
    <div className="flex justify-between p-6 bg-gray-100"> {/* Light background for contrast */}
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6"> {/* Card-like container for better readability */}
        {/* Car Details Sections */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-purple-700 transition-transform duration-300 hover:scale-105">
            Car Details
          </h2>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 transition-transform duration-300 hover:scale-105">
            Highlights
          </h2>
          <p className="mb-4 text-gray-800 transition-transform duration-300 hover:scale-105">
            <strong>THIS... </strong>is a 2023 Chevrolet Corvette Z06 Convertible, finished in Arctic White with a Carbon Flash hardtop and an Adrenaline Red interior.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              The attached Carfax history report lists no accidents in this convertible's brief past.
            </li>
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              Factory equipment includes the Z06 Ultimate Performance, Carbon Aero, and Stealth Interior Trim packages...
            </li>
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              Released for 2020, the eighth-generation Corvette switched to a mid-mounted engine...
            </li>
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              Power comes from a 5.5-liter V8, rated at 670 horsepower and 460 lb-ft of torque...
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 transition-transform duration-300 hover:scale-105">
            Equipment
          </h2>
          <p className="mb-4 text-gray-800 transition-transform duration-300 hover:scale-105">
            A window sticker is pictured in the gallery, and a partial list of notable equipment includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              Z06 Ultimate Performance Package (Brembo ceramic brakes, Michelin Pilot Sport Cup 2 tires...)
            </li>
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              Carbon Aero Package (carbon fiber high-wing, dive planes, and ground effects...)
            </li>
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              Stealth Interior Trim Package (dark-finished interior trim)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 transition-transform duration-300 hover:scale-105">
            Recent Service History
          </h2>
          <p className="mb-4 text-gray-800 transition-transform duration-300 hover:scale-105">
            Some service information appears in the attached Carfax history report. Recent work includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              July 2024 (1,799 miles): Headlight(s) replaced
            </li>
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              March 2024 (1,657 miles): Engine oil and filter changed, one tire mounted
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 transition-transform duration-300 hover:scale-105">
            Other Items Included in Sale
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              2 keys
            </li>
            <li className="text-gray-800 transition-transform duration-300 hover:scale-105">
              Owner's manual
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default CarDetails;
