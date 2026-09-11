import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#0B0F19] text-white sm:mt-20">
      <div
        className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 md:px-8 md:py-16 lg:px-10"
      >
        <div
          className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          <div>
            <h1
              className="text-3xl font-bold sm:text-4xl"
            >
              Aman<span className="text-blue-500">.</span>
            </h1>

            <p
              className="mt-4 max-w-md text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8"
            >
              Passionate Frontend Developer dedicated to building
              modern, responsive and user-friendly web applications.
            </p>
          </div>

          <div>
            <h2
              className="mb-5 text-xl font-semibold sm:mb-6 sm:text-2xl"
            >
              Quick Links
            </h2>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-400 sm:flex sm:flex-col sm:gap-4 sm:text-base">
              <a
                href="#home"
                className="transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
              >
                Projects
              </a>

              <a
                href="#certificates"
                className="transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
              >
                Certificates
              </a>

              <a
                href="#contact"
                className="transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h2
              className="mb-5 text-xl font-semibold sm:mb-6 sm:text-2xl"
            >
              Connect
            </h2>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://github.com/Amanshukla99"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
              >
                <i className="ri-github-fill text-xl"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>

              <a
                href="mailto:aman8103091827@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
              >
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Let's connect and build something amazing together.
            </p>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-4 border-t border-gray-700 pt-6 text-center sm:mt-12 sm:pt-8 md:flex-row md:items-center md:justify-between md:text-left"
        >
          <p className="text-xs text-gray-400 sm:text-sm">
            © 2026 Aman Shukla. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-400 sm:text-sm">
            Made with <span className="text-red-500">❤️</span> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;