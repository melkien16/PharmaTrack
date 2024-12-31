import React from "react";
import SVG from "../../assets/icons/SearchIcon.svg";
import IMG from "../../assets/homeImg.png";
import BG_IMG from "/images/pm1.jpg";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 mt-20">
      <div className="fixed -z-10 w-full h-screen top-20">
        <img src={BG_IMG} className="w-full h-full object-cover opacity-90" />
      </div>
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        Find Medicines <br /> Instantly, Anytime, Anywhere.
      </h1>
      <p className="text-center text-lg md:text-xl lg:text-2xl  mt-5 max-w-2xl">
        Your trusted platform to search for drugs and locate the nearest
        pharmacy in just seconds.
      </p>
      <p className="text-center mt-10 text-lg md:text-3xl">
        What are you looking for?
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center mt-5 w-full max-w-lg">
        <div className="bg-white p-[11px] flex items-center justify-center border-gray-300 rounded-md  shadow-sm w-full md:w-auto -mr-[49px] z-50">
          <img src={SVG} />
        </div>
        <input
          type="text"
          placeholder="e.g., Paracetamol, Ibuprofen"
          id="medicin"
          className="w-full bg-white border border-gray-300 p-3 rounded-lg shadow-md pl-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button className="bg-primary-900 text-white px-6 py-3 rounded-md shadow-md hover:bg-primary-shade transition duration-300 whitespace-nowrap ml-4 hover:shadow-lg">
          Search Now
        </button>
      </form>
    </div>
  );
};

export default Hero;
