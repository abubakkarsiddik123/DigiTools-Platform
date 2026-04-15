import React from "react";
import { CgShoppingCart } from "react-icons/cg";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100  max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Testimonials</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
          <a className=" text-3xl p-3 font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="Products">Products</a>
            </li>
            <li>
              <a href="Features">Features</a>
            </li>
            <li>
              <a href="Pricing">Pricing</a>
            </li>
            <li>
              <a href="Testimonials">Testimonials</a>
            </li>
            <li>
              <a href="FAQ">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div className="relative">
            <CgShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 rounded-full badge p-1 text-white badge-sm">
              2
            </span>
          </div>
          <a className="font-semibold" href="login">
            Login
          </a>
          <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-3 py-4 text-white rounded-full">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
