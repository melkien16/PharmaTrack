import React, { useState, useContext } from "react";
import NavList from "./NavList";
import SVG from "../../assets/icons/SearchIcon.svg";
import Modal from "../../functionality/Overlay";
import Pharmacies from "../../pharmacyData/Pharmacies";

const Header = () => {
  const [isCliked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    setIsClicked(true);

    console.log(isCliked);
  };

  return (
    <header className="bg-primary-700 text-white p-4 flex justify-between items-center px-20 fixed left-0 right-0 top-0 z-50">
      {isCliked && (
        <Modal>
          <div className="overflow-auto h-[600px]">
            <h1 className="text-4xl text-center text-gray-800 font-bold my-3">
              Available pharmacies
            </h1>
            <div>
              {Pharmacies.map((pharmacy) => (
                <div className="border-b-2 mt-4">
                  <h1 className="text-2xl font-bold text-center">
                    {pharmacy.name}
                  </h1>
                  <div className="flex justify-between items-center py-8 px-8">
                    <div className="w-1/2 p-4 rounded-lg">
                      <p>{pharmacy.description}</p>
                      <button className="bg-slate-400 py-2 px-6 rounded-lg mt-5">
                        See More
                      </button>
                      <p className="mt-6">has {pharmacy.rate} rate</p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 bg-slate-400 p-4 rounded-lg">
                      <p className="border-b-2">
                        <span className="text-2xl font-bold">
                          {pharmacy.drugs[0].price}
                        </span>{" "}
                        ETB
                      </p>
                      <p>
                        34 km <br />
                        away
                      </p>
                      <button className="bg-slate-500 py-2 px-4 rounded-2xl">
                        Go
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}

      <div className="flex flex-col items-center">
        <h1 className="text-[32px] font-bold">PharmaTrack</h1>
      </div>
      <nav className="flex items-center space-x-10">
        <form className="flex items-center space-x-2" action="">
          <div className="bg-primary-200 p-[11px] flex items-center justify-center border-gray-300 rounded-md shadow-sm w-full md:w-auto -mr-[49px] z-50">
            <img src={SVG} alt="Search Icon" className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="e.g., Paracetamol, Ibuprofen"
            id="medicine"
            className="w-full bg-primary-200 border border-gray-300 p-3 py-2 rounded-lg shadow-md pl-12 text-gray-700 focus:outline-none"
            aria-label="Search for medicine"
          />
          <button
            className="bg-primary-300 text-primary-shade px-8 py-2 rounded-xl shadow-md hover:bg-primary-400 transition duration-300 whitespace-nowrap hover:shadow-lg focus:outline-none "
            aria-label="Search Now"
            onClick={handleClick}
          >
            Find
          </button>
        </form>
        <ul className="flex space-x-9 text-[18px]">
          {NavList.map(({ id, title, href }) => (
            <li key={id}>
              <a
                href={href}
                className="hover:text-primary-500 transition duration-300"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4">
          <button className="py-[6px] px-7 rounded-xl bg-primary-800 mx-2 border-2 border-primary-800 hover:bg-primary-700 transition duration-300">
            Login
          </button>
          <button className="py-[6px] px-5 rounded-xl border-2 hover:bg-primary-shade  transition duration-300">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
