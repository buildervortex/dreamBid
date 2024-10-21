import React from 'react';

function CarDetails() {
  return ( // Add return statement here
    <div>
      {/* Car Details Sections */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-purple-700">Car Details</h2>
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <p className="mb-4">
          <strong>THIS... </strong>is a 2023 Chevrolet Corvette Z06 Convertible, finished in Arctic White with a Carbon Flash hardtop and an Adrenaline Red interior.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The attached Carfax history report lists no accidents in this convertible's brief past.</li>
          <li>Factory equipment includes the Z06 Ultimate Performance, Carbon Aero, and Stealth Interior Trim packages, a limited-slip differential, the Magnetic Selective Ride Control suspension system, a front-axle lift system with a memory function, heated, ventilated, and power-adjustable GT2 bucket seats, a heated steering wheel, a wireless device charger, a 14-speaker Bose sound system, and the performance data and video recorder, according to a window sticker shown in the gallery. The selling dealer reports no modifications.</li>
          <li>Released for 2020, the eighth-generation Corvette switched to a mid-mounted engine, a configuration that represented the most drastic change in the nameplate's decades-long history. Placing the V8 behind the passenger compartment allowed designers to completely reinvent the Corvette's proportions, while engineers took advantage of the rear-biased weight distribution to dial in sharper handling. Production continues today.</li>
          <li>Power comes from a 5.5-liter V8, rated at 670 horsepower and 460 lb-ft of torque. Called LT6 internally, it spins the rear wheels via an 8-speed automatic transmission.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Equipment</h2>
        <p className="mb-4">A window sticker is pictured in the gallery, and a partial list of notable equipment includes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Z06 Ultimate Performance Package (Brembo ceramic brakes, Michelin Pilot Sport Cup 2 tires, and Z07 suspension system)</li>
          <li>Carbon Aero Package (carbon fiber high-wing, dive planes, and ground effects painted Carbon Flash)</li>
          <li>Stealth Interior Trim Package (dark-finished interior trim)</li>
          <li>Limited-slip differential</li>
          <li>Magnetic Selective Ride Control suspension system</li>
          <li>Front-axle lift system with memory function</li>
          <li>20-inch front and 21-inch rear wheels</li>
          <li>LED headlights</li>
          <li>Carbon Flash-painted door mirror caps</li>
          <li>Black exhaust outlets</li>
          <li>Power-operated hardtop</li>
          <li>Carbon fiber interior trim</li>
          <li>Leather upholstery</li>
          <li>Heated, ventilated, and power-adjustable GT2 bucket seats</li>
          <li>Heated and power-folding door mirrors</li>
          <li>Heated steering wheel</li>
          <li>Power-adjustable steering column</li>
          <li>12-inch digital instrument cluster</li>
          <li>Wireless device charger</li>
          <li>8-inch touchscreen for the infotainment system</li>
          <li>14-speaker Bose sound system</li>
          <li>Wireless Apple CarPlay and wireless Android Auto compatibility</li>
          <li>Remote engine starter</li>
          <li>Head-up display</li>
          <li>Rear parking sensors</li>
          <li>Front- and rear-view cameras</li>
          <li>Rear camera mirror</li>
          <li>Performance data and video recorder</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Service History</h2>
        <p className="mb-4">Some service information appears in the attached Carfax history report. Recent work includes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>July 2024 (1,799 miles): Headlight(s) replaced</li>
          <li>March 2024 (1,657 miles): Engine oil and filter changed, one tire mounted</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Other Items Included in Sale</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>2 keys</li>
          <li>Owner's manual</li>  
        </ul>
      </section>
    </div>
  );
}

export default CarDetails;
