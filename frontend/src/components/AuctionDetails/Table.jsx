import React from 'react';

function Table() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm">
              <tbody>
                <tr className="bg-purple-100">
                  <td className="px-6 py-4 font-medium">Engine</td>
                  <td className="px-6 py-4">5.5L V8</td>
                  <td className="px-6 py-4 font-medium">Make</td>
                  <td className="px-6 py-4">Chevrolet</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Drivetrain</td>
                  <td className="px-6 py-4">Rear-wheel drive</td>
                  <td className="px-6 py-4 font-medium">Model</td>
                  <td className="px-6 py-4">C8 Corvette</td>
                </tr>
                <tr className="bg-purple-100">
                  <td className="px-6 py-4 font-medium">Transmission</td>
                  <td className="px-6 py-4">Automatic (8-Speed)</td>
                  <td className="px-6 py-4 font-medium">Mileage</td>
                  <td className="px-6 py-4">1,900Km</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Body Style</td>
                  <td className="px-6 py-4">Convertible</td>
                  <td className="px-6 py-4 font-medium">VIN</td>
                  <td className="px-6 py-4">1G1YE3D30P5602574</td>
                </tr>
                <tr className="bg-purple-100">
                  <td className="px-6 py-4 font-medium">Exterior Color</td>
                  <td className="px-6 py-4">Arctic White/Carbon Flash</td>
                  <td className="px-6 py-4 font-medium">Title Status</td>
                  <td className="px-6 py-4">Clean (FL)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Interior Color</td>
                  <td className="px-6 py-4">Adrenaline Red</td>
                  <td className="px-6 py-4 font-medium">Location</td>
                  <td className="px-6 py-4">Fort Pierce, FL 34982</td>
                </tr>
                <tr className="bg-purple-100">
                  <td className="px-6 py-4 font-medium">Seller Type</td>
                  <td className="px-6 py-4">Dealer</td>
                  <td className="px-6 py-4 font-medium">Sub Location</td>
                  <td className="px-6 py-4">mymigo555</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
