import React, { useEffect, useLayoutEffect, useState } from "react";
import CarManagementCard from "../components/CarManagementCard"; // Adjust the import according to your file structure
import AddCarOverlay from "./AddCarOverlay";
import CarViewModel from "../viewModels/CarViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { toast } from "react-toastify";
import ImageViewModel from "../viewModels/ImageViewModel";
import base64ToImageData from "../utils/image";

// Sample Car Data for Active Bids
const CarManagement = ({ cars }) => {
  const [addCarOverlayOpen, setOverlayOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="flex-grow overflow-y-auto">
        <section className="mb-12">
          <div className="flex justify-between items-center align-top min-w-full mb-4">
            <h2 className="text-3xl font-bold text-black">Cars</h2>
            <button
              className="text-xl bg-purple-800 text-white py-2 px-4"
              onClick={() => setOverlayOpen(true)}
            >
              Add Car
            </button>
          </div>
          <div className="flex flex-wrap -mx-2">
            {cars.map((car) => (
              <div className="w-1/3 p-2" key={car.car.id}>
                <CarManagementCard car={car.car} image={car.image} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <AddCarOverlay
        isOpen={addCarOverlayOpen}
        onClose={() => {
          setOverlayOpen(false);
        }}
        onSubmit={() => {}}
      ></AddCarOverlay>
    </div>
  );
};

export default CarManagement;
