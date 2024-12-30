"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-10 max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Sanity Blog
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;



// import Link from "next/link";
// import React from "react";

// const Header = () => {
//   return (
//     <header className="flex justify-between px-10 py-5 md:px-24 max-w-[1000px] mx-auto">
//       <Link href={"/"} className="text-2xl font-bold underline">
//         Sanity Blog
//       </Link>

//       <nav>
//         <ul className="flex gap-4">
//           <li className="hover:underline cursor-pointer">About</li>
//           <li className="hover:underline cursor-pointer">Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;