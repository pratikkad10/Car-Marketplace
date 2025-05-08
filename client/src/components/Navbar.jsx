import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AppContext } from '../context/AppContext';

function Navbar() {
  const { logout, isLoggedIn } = useContext(AppContext);

  return (
    <div className="flex justify-between px-[1rem] py-[12px] bg-[#F9FAFB] fixed top-0 w-full shadow-md z-10">
      {/* Logo */}
      <div>
        <NavLink to="/" className="logo cursor-pointer text-xl font-bold">
          autoMarket
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-12 font-medium">
        <NavLink to="/" className="cursor-pointer hover:text-blue-500">
          Home
        </NavLink>
        <NavLink to="/cars/buy" className="cursor-pointer hover:text-blue-500">
          Buy Car
        </NavLink>
        <NavLink to="/cars/sell" className="cursor-pointer hover:text-blue-500">
          Sell Car
        </NavLink>
        <NavLink to="/about" className="cursor-pointer hover:text-blue-500">
          About
        </NavLink>
        <NavLink to="/contact" className="cursor-pointer hover:text-blue-500">
          Contact
        </NavLink>
      </div>

      {/* Conditional Buttons */}
      <div className="flex gap-2 font-medium items-center justify-center">
        {isLoggedIn ? (
          <>
            {/* Logout button */}
            <NavLink
              to="/user/logout"
              onClick={() => logout()}
              className="hover:bg-blue-600 px-4 py-1 rounded-full bg-blue-500 text-zinc-50 transition-all delay-75"
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            {/* Login and Signup buttons */}
            <NavLink
              to="/user/login"
              className="hover:bg-blue-600 px-4 py-1 rounded-full bg-blue-500 text-zinc-50 transition-all delay-75"
            >
              Login
            </NavLink>
            <NavLink
              to="/user/signup"
              className="hover:bg-blue-600 px-4 py-1 rounded-full bg-blue-500 text-zinc-50 transition-all delay-75"
            >
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
