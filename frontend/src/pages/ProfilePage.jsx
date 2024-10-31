import React, { useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SellerDashbord from "../features/sellerDashbord";
import { Link } from "react-router-dom";
import WishList from "../features/WishList";
import Transactions from "../features/Transactions";
import CarManagement from "../features/CarManagement";
import AuctionManagement from "../features/AuctionManagement";
import CarViewModel from "../viewModels/CarViewModel";
import ErrorMessage from "../viewModels/ErrorViewModel";
import { toast } from "react-toastify";
import ImageViewModel from "../viewModels/ImageViewModel";
import base64ToImageData from "../utils/image";
import AuctionViewModel from "../viewModels/AuctionViewModel";

const ProfilePage = ({ ...rest }) => {
  const [cars, setCars] = useState([]);
  const [auctions, setAuctions] = useState([]);

  useLayoutEffect(() => {
    const getData = async () => {
      let carsResponse = await CarViewModel.getAllCars();
      let auctionResponse = await AuctionViewModel.getAllAuctions({
        active: false,
        WithCar: true,
      });
      if (carsResponse instanceof ErrorMessage) {
        toast.error(carsResponse.error);
        return;
      }
      if (auctionResponse instanceof ErrorMessage) {
        toast.error(auctionResponse.error);
        return;
      }
      toast.success("Cars loaded successfully");
      toast.success("Auctions loaded successfully");

      const carsList = await Promise.all(
        carsResponse.map(async (car) => {
          let image = await ImageViewModel.getAllCarImages(car.id, {
            pageNumber: 1,
            pageSize: 1,
          });
          if (image instanceof ErrorMessage) {
            toast.error(image.error);
            return null; // handle error for specific car image fetch
          }
          return { image: base64ToImageData(image[0].image), car: car };
        })
      );

      setCars(carsList.filter(Boolean));
      setAuctions(auctionResponse);
    };
    getData();
  }, []);
  return (
    <div className="min-w-full min-h-screen p-4 py-8">
      {/* Main Content */}
      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="justify-start w-1/6 h-screen pr-8 text-white ">
          <ul className="space-y-6">
            <li>
              <Link
                to="/profile/dashbord"
                className="block w-full min-w-full py-3 px-4 transition duration-300 ease-in-out bg-purple-900 rounded hover:bg-purple-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="wishlist"
                className="block w-full py-3 px-4 transition duration-300 ease-in-out bg-purple-900 rounded hover:bg-purple-700"
              >
                WishList
              </Link>
            </li>
            <li>
              <Link
                to="car"
                className="block w-full py-3 px-4 transition duration-300 ease-in-out bg-purple-900 rounded hover:bg-purple-700"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="auction"
                className="block w-full py-3 px-4 transition duration-300 ease-in-out bg-purple-900 rounded hover:bg-purple-700"
              >
                Auctions
              </Link>
            </li>
            <li>
              <Link className="block w-full py-3 px-4 transition duration-300 ease-in-out bg-purple-900 rounded hover:bg-purple-700">
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="transactions"
                className="block w-full py-3 px-4 transition duration-300 ease-in-out bg-purple-900 rounded hover:bg-purple-700"
              >
                Transactions
              </Link>
            </li>
          </ul>
        </aside>
        <div className="w-5/6 px-5">
          <Routes>
            <Route
              path="dashbord"
              element={<SellerDashbord {...rest}></SellerDashbord>}
            ></Route>
            <Route
              path="car"
              element={<CarManagement cars={cars}></CarManagement>}
            ></Route>
            <Route
              path="auction"
              element={
                <AuctionManagement
                  cars={cars}
                  auctions={auctions}
                ></AuctionManagement>
              }
            ></Route>
            <Route path="wishlist" element={<WishList></WishList>}></Route>
            <Route
              path="transactions"
              element={<Transactions></Transactions>}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
