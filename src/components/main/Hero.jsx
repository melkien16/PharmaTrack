import React, { useRef, useState, useContext } from "react";
import SVG from "../../assets/icons/SearchIcon.svg";
import BG_IMG from "/images/pm2.jpg";

const Hero = () => {
  const [isValidInput, setIsValidInput] = useState(true);
  const inputRef = useRef();

  const handleFinder = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;

    if (name.trim().length === 0) {
      setIsValidInput(false);
      return;
    } else {
      setIsValidInput(true);
    }

    console.log(inputRef.current.value);
  };

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

      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100 font-poppins">
        Find <span className="med ">Medicines</span> <br />{" "}
        <span className="font-roboto text-5xl">
          Instantly, Anytime, Anywhere
        </span>
      </h1>

      <p className="text-md md:text-xl lg:text-2xl mt-5 max-w-2xl text-gray-300 font-serif">
        Your trusted platform to search for drugs and locate the nearest
        pharmacy in just seconds.
      </p>

      <p className="mt-10 text-lg md:text-3xl text-white">
        What are you looking for?
      </p>

      <form className="flex flex-col md:flex-row items-center justify-center mt-5 w-full max-w-lg">
        <div className="bg-white p-[11px] flex items-center justify-center border-gray-300 rounded-md shadow-sm w-full md:w-auto -mr-[49px] z-20">
          <img src={SVG} alt="Search Icon" />
        </div>

        <input
          type="text"
          placeholder="e.g., Paracetamol, Ibuprofen"
          id="medicin"
          className={`w-full  border  p-3 rounded-lg shadow-md pl-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            isValidInput
              ? "bg-white border-gray-300 "
              : "bg-red-200 border-red-800"
          }`}
          aria-label="Search for medicine"
          ref={inputRef}
        />

        <button
          className="bg-primary-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-primary-shade transition duration-300 whitespace-nowrap ml-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Search Now"
          onClick={handleFinder}
        >
          Search Now
        </button>
      </form>
      {!isValidInput && (
        <p className="m-2 text-red-800 text-2xl">Please Enter Valid Medicin </p>
      )}
    </div>
  );
};

export default Hero;
