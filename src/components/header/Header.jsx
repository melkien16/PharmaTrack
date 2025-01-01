import React from "react";
import NavList from "./NavList";
import SVG from "../../assets/icons/SearchIcon.svg";

const Header = () => {
  return (
    <header className="bg-primary-700 text-white p-4 flex justify-between items-center px-20 fixed left-0 right-0 top-0 z-50">
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
