import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center">
      <nav className="w-[92%] max-w-6xl h-16 px-6 md:px-8 bg-black/95 backdrop-blur-md text-white rounded-2xl flex items-center justify-between shadow-xl">

        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold tracking-tight">
          Aman<span className="text-blue-500">.</span>
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="text-blue-500 border-b-2 border-blue-500 pb-1"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-500 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="/Aman_Shukla_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl hover:bg-white hover:text-blue-600 text-sm font-semibold transition duration-300"
        >
          Resume
        </a>

      </nav>
    </header>
  );
};

export default Navbar;