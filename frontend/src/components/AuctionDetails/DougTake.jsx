import React from 'react';

function DougTake() {
  return (
    <div className="bg-purple-200 p-6 rounded-lg flex items-start space-x-4">
      <img 
        src="https://via.placeholder.com/50" 
        alt="Doug's Profile" 
        className="w-12 h-12 rounded-full" 
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">Doug’s Take</h3>
        <p className="text-sm">
        The new C8 Chevy Corvette is a lot of fun to drive – and it's a lot of car for the money. This is the desirable Z06 model, which boasts a 5.5-liter V8 rated at a muscular 670 horsepower – and it's a convertible, so it touts the wind-in-your-hair thrill that a coupe can't match. This C8 Z06 Convertible boasts some great equipment including the Z06 Ultimate Performance Package, a front-axle lift system, GT2 bucket seats, and much more – and I love the color combination, too, as the Adrenaline Red interior is gorgeous. This Corvette is also unmodified, which is a nice benefit – and the clean, accident-free Carfax report further enhances the appeal.
        </p>
      </div>
    </div>
  );
}

export default DougTake;
