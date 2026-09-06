import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <h1 className="text-4xl font-bold">
              Aman<span className="text-blue-500">.</span>
            </h1>

            <p className="text-gray-400 mt-5 leading-8">
              Passionate Frontend Developer dedicated to building
              modern, responsive and user-friendly web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="#home" className="hover:text-blue-500 duration-300">
                Home
              </a>

              <a href="#about" className="hover:text-blue-500 duration-300">
                About
              </a>

              <a href="#skills" className="hover:text-blue-500 duration-300">
                Skills
              </a>

              <a href="#projects" className="hover:text-blue-500 duration-300">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-500 duration-300">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Connect
            </h2>

            <div className="flex gap-5">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300"
              >
                <i className="ri-github-fill text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300"
              >
                <i className="ri-mail-fill text-xl"></i>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-12 pt-8 flex justify-between items-center">

          <p className="text-gray-400">
            © 2026 Aman Shukla. All Rights Reserved.
          </p>

          <p className="text-gray-400">
            Made with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;