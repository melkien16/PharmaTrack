import React from "react";
import SVG from "../../assets/icons/SearchIcon.svg";
import BG_IMG from "/images/pm2.jpg";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 mt-20 relative">
      <div className="fixed -z-10 w-full h-screen top-20">
        <img
          src={BG_IMG}
          alt="Pharmacy Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
        Find Medicines <br /> Instantly, Anytime, Anywhere.
      </h1>

      <p className="text-center text-lg md:text-xl lg:text-2xl mt-5 max-w-2xl text-gray-300">
        Your trusted platform to search for drugs and locate the nearest
        pharmacy in just seconds.
      </p>

      <p className="text-center mt-10 text-lg md:text-3xl text-white">
        What are you looking for?
      </p>

      <form className="flex flex-col md:flex-row items-center justify-center mt-5 w-full max-w-lg">
        <div className="bg-white p-[11px] flex items-center justify-center border-gray-300 rounded-md shadow-sm w-full md:w-auto -mr-[49px] z-50">
          <img src={SVG} alt="Search Icon" />
        </div>

        <input
          type="text"
          placeholder="e.g., Paracetamol, Ibuprofen"
          id="medicin"
          className="w-full bg-white border border-gray-300 p-3 rounded-lg shadow-md pl-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Search for medicine"
        />

        <button
          className="bg-primary-900 text-white px-6 py-3 rounded-md shadow-md hover:bg-primary-shade transition duration-300 whitespace-nowrap ml-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Search Now"
        >
          Search Now
        </button>
      </form>
    </div>
  );
};

export default Hero;
