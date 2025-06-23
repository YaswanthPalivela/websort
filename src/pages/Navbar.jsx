
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import globe from '../assets/globe.svg' // Adjust path accordingly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 text-lightGray fixed w-screen z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo and title */}
        <div className="flex items-center gap-4">
          <img src={globe} alt="WebSort Logo" className="h-12 bg-amber-500 p-1 rounded" />
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold">WebSort</h1>
            <span className="text-sm">Your Vision Our Web</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium mr-8">
          {["Home", "About", "Services", "Contact"].map((section) => (
            <li key={section} className="hover:text-gold transition-colors hover:cursor-pointer">
              <Link to={section} smooth={true} duration={500}>
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800 text-white px-3 py-2 space-y-2 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {["Home", "About", "Services", "Contact"].map((section) => (
          <div key={section} className="text-xl">
            <Link
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)} // Close on click
              className="block py-2"
            >
              {section}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
