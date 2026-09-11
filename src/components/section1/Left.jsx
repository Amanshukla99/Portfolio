import React from "react";

const Left = () => {
  return (
    <div
      className="w-full px-5 py-10 sm:px-8 md:w-[60%] md:px-8 md:py-12 lg:w-[55%]  lg:px-10 xl:w-[50%]"
    >
      <p className="text-lg font-semibold text-blue-600 sm:text-xl md:text-2xl">
        Hello, I'm
      </p>

      <h1
        className="mt-2 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:mt-3 md:text-6xl lg:text-7xl"
      >
        Aman Shukla
      </h1>

      <h2
        className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:mt-4 md:text-5xl lg:text-6xl"
      >
        <span className="text-blue-600">Frontend</span> Developer
        <span className="animate-pulse text-blue-600"> |</span>
      </h2>

      <p
        className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 md:mt-8 md:text-xl md:leading-9"
      >
        I create beautiful, responsive and performance-focused
        websites using React.js, Tailwind CSS and modern web
        technologies.
      </p>

      <div
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 md:mt-10 md:gap-6"
      >
        <button
          className="w-full rounded-2xl bg-blue-600 px-7 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2  active:scale-95 sm:w-auto sm:px-8 sm:text-lg"
        >
          View Projects
        </button>

        <button
          className="w-full rounded-2xl border-2 border-gray-300 px-7 py-3 text-base font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1  hover:bg-blue-600 hover:text-white hover:border-white active:scale-95 sm:w-auto sm:px-8 sm:text-lg"
        >
          Contact Me
        </button>
      </div>

      <div className="mt-12 sm:mt-14 md:mt-16">
        <h3
          className="text-xl font-semibold text-gray-700 sm:text-2xl"
        >
          Connect with me
        </h3>

        <div className="mt-5 flex gap-4 sm:mt-6 sm:gap-5">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-14 sm:w-14"
          >
            <i className="ri-github-fill text-2xl sm:text-3xl"></i>
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-14 sm:w-14"
          >
            <i className="ri-linkedin-fill text-2xl sm:text-3xl"></i>
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-14 sm:w-14"
          >
            <i className="ri-twitter-x-fill text-2xl sm:text-3xl"></i>
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-14 sm:w-14"
          >
            <i className="ri-instagram-line text-2xl sm:text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;