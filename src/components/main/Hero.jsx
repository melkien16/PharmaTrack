import React from "react";
import SVG from "../../assets/icons/SearchIcon.svg";
import IMG from "../../assets/homeImg.png";

const Hero = () => {
  return (
    <div className="bg-gray-100 min-h-[90vh] flex flex-col items-center justify-center py-20 px-4">
      
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
        Find Medicines <br /> Instantly, Anytime, Anywhere.
      </h1>
      <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-600 mt-5 max-w-2xl">
        Your trusted platform to search for drugs and locate the nearest
        pharmacy in just seconds.
      </p>
      <p className="text-center text-gray-700 mt-10 text-lg md:text-3xl">
        What are you looking for?
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center mt-5 w-full max-w-lg">
        <div className="bg-white p-[11px] flex items-center justify-center border-2 border-gray-300 rounded-l-md  shadow-sm w-full md:w-auto -mr-[49px] z-50">
          <img src={SVG} />
        </div>
        <input
          type="text"
          placeholder="e.g., Paracetamol, Ibuprofen"
          id="medicin"
          className="bg-white border-2 border-gray-300 p-3 rounded-md shadow-sm w-full md:w-auto md:flex-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pl-14"
        />
        <button className="bg-primary-500 text-white px-6 py-3 rounded-md shadow-md mt-4 md:mt-0 md:ml-4 hover:bg-primary-600 transition duration-300">
          Search Now
        </button>
      </form>
    </div>
  );
};

export default Hero;
