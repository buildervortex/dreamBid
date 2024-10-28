import React from 'react';

// Sample data array
const tableData = [
  { label1: 'Engine', value1: '5.5L V8', label2: 'Make', value2: 'Chevrolet' },
  { label1: 'Drivetrain', value1: 'Rear-wheel drive', label2: 'Model', value2: 'C8 Corvette' },
  { label1: 'Transmission', value1: 'Automatic (8-Speed)', label2: 'Mileage', value2: '1,900Km' },
  { label1: 'Body Style', value1: 'Convertible', label2: 'VIN', value2: '1G1YE3D30P5602574' },
  { label1: 'Exterior Color', value1: 'Arctic White/Carbon Flash', label2: 'Title Status', value2: 'Clean (FL)' },
  { label1: 'Interior Color', value1: 'Adrenaline Red', label2: 'Location', value2: 'Fort Pierce, FL 34982' },
  { label1: 'Seller Type', value1: 'Dealer', label2: 'Sub Location', value2: 'mymigo555' },
];

function Table() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full py-2">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm">
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-purple-50' : ''}>
                  <td className="px-6 py-4 font-medium text-gray-800">{row.label1}</td>
                  <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">{row.value1}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{row.label2}</td>
                  <td className="px-6 py-4 text-gray-700 hover:scale-105 transition-transform">{row.value2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
