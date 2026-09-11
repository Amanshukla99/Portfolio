import React from "react";

const Right = () => {
  return (
    <div
      className="flex w-full justify-center px-4 sm:px-6 md:w-[40%] md:justify-end md:px-0 lg:w-[45%]"
    >
      <div
        className="relative flex h-[430px] w-full max-w-[400px] items-end justify-center mt-17 sm:h-[500px] sm:max-w-[450px] md:h-[550px] md:max-w-[480px] lg:h-[650px] lg:max-w-[550px]"
      >
        <div
          className="absolute bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600 sm:h-[350px] sm:w-[350px] md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px]"
        />

        <div
          className="absolute right-2 top-12 h-10 w-10 rounded-full bg-blue-200 sm:right-4 sm:top-16 sm:h-14 sm:w-14 md:right-2 md:top-20 md:h-16 md:w-16"
        />

        <div
          className="absolute left-0 top-24 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl sm:top-28 sm:px-5 sm:py-4 md:top-32 md:px-6 md:py-4"
        >
          <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl">
            1+
          </h2>

          <p className="text-sm text-gray-600 sm:text-base">
            Years Learning
          </p>
        </div>

        <div
          className="absolute bottom-16 right-0 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl sm:bottom-20 sm:px-5 sm:py-4 md:bottom-24 md:px-6 md:py-4"
        >
          <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl">
            3+
          </h2>

          <p className="text-sm text-gray-600 sm:text-base">
            Projects
          </p>
        </div>

        <img
          src="/photos/1788501007733.png"
          alt="Aman"
          className="relative z-10 h-[530px] max-w-full object-cover  drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] sm:h-[500px] md:h-[550px] lg:h-[650px]"
        />
      </div>
    </div>
  );
};

export default Right;