import React from "react";
import NavList from "./NavList";

const Header = () => {
  return (
    <div className="bg-primary-default text-white p-4 flex justify-between items-center px-20 fixed left-0 right-0 top-0">
      <div>
        <h1 className="text-[32px] font-bold text-center">PharmaTrack</h1>
      </div>
      <div className="flex items-center space-x-10">
        <ul className="flex space-x-9 text-[18px]">
          {NavList.map(({ id, title, href }) => (
            <li key={id}>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
        <div>
          <button className="py-[6px] px-7 rounded-xl bg-primary-800 mx-2 border-2 border-primary-800">
            Login
          </button>
          <button className="py-[6px] px-5 rounded-xl border-2">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
