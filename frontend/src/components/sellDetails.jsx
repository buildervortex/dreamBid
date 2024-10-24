import React from 'react';
import checkIcon from '../Assets/Check.svg';

export default function SellDetails({ details }) {
    return (
        <div>
            <ul className="list-none p-0">
                {details.map((detail, index) => (
                    <li key={index} className="flex items-center mb-2">
                        <img src={checkIcon} alt="check icon" className="mr-2 w-4 h-4" />
                        <span className="text-2xl">{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
