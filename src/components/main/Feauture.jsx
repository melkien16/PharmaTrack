import React from "react";
import Img from "/images/pm2.jpg";
import Img1 from "/images/filter.png";
import Img2 from "/images/map.png";
import Img3 from "/images/medical.png";
import Img4 from "/images/mortar.png";

const Feauture = () => {
  return (
    <div className="bg-primary-100 p-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Explore Our Features
      </h1>
      <div className="relative">
        <img src={Img} alt="" width={950} className="rounded-lg shadow-lg" />
        <div className="absolute top-0 right-0 flex flex-col items-center justify-between p-4 rounded-lg space-y-6 h-full">
          <div className="w-full bg-primary-100 p-6 px-14 rounded-full shadow-xl hover:bg-primary-200 transition duration-300 flex items-center space-x-10 hover:scale-110">
            <img src={Img1} alt="" className="w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Search and Filter</h2>
              <p className="text-lg mb-4">Search and filter pharmacies by distance</p>
            </div>
          </div>
          <div className="w-full bg-primary-100 p-6 px-14 rounded-full shadow-xl hover:bg-primary-200 transition duration-300 flex items-center space-x-10 hover:scale-110">
            <img src={Img2} alt="" className="w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Locate on Map</h2>
              <p className="text-lg mb-4">
                Locate pharmacies on Interactive Map View
              </p>
            </div>
          </div>
          <div className="w-full bg-primary-100 p-6 px-14 rounded-full shadow-xl hover:bg-primary-200 transition duration-300 flex items-center space-x-10 hover:scale-110">
            <img src={Img3} alt="" className="w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Drug Information</h2>
              <p className="text-lg mb-4">Get drug information</p>
            </div>
          </div>
          <div className="w-full bg-primary-100 p-6 px-14 rounded-full shadow-xl hover:bg-primary-200 transition duration-300 flex items-center space-x-10 hover:scale-110">
            <img src={Img4} alt="" className="w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Pharmacy informarions</h2>
              <p className="text-lg mb-4">
                Get the detail informarion about pharmacies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feauture;
