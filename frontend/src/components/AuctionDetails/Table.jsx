import React from 'react';

function Table() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full py-2">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm">
            <tbody>
              {/** Table rows with alternating background colors */}
              <tr className="bg-purple-50">
                <td className="px-6 py-4 font-medium text-gray-800">Engine</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">5.5L V8</td>
                <td className="px-6 py-4 font-medium text-gray-800">Make</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Chevrolet</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-800">Drivetrain</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Rear-wheel drive</td>
                <td className="px-6 py-4 font-medium text-gray-800">Model</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">C8 Corvette</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="px-6 py-4 font-medium text-gray-800">Transmission</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Automatic (8-Speed)</td>
                <td className="px-6 py-4 font-medium text-gray-800">Mileage</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">1,900Km</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-800">Body Style</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Convertible</td>
                <td className="px-6 py-4 font-medium text-gray-800">VIN</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">1G1YE3D30P5602574</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="px-6 py-4 font-medium text-gray-800">Exterior Color</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Arctic White/Carbon Flash</td>
                <td className="px-6 py-4 font-medium text-gray-800">Title Status</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Clean (FL)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-800">Interior Color</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Adrenaline Red</td>
                <td className="px-6 py-4 font-medium text-gray-800">Location</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Fort Pierce, FL 34982</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="px-6 py-4 font-medium text-gray-800">Seller Type</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">Dealer</td>
                <td className="px-6 py-4 font-medium text-gray-800">Sub Location</td>
                <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">mymigo555</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
