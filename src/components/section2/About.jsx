import React from "react";
import resumePdf from "../../assets/Aman_Shukla_Resume_Final_Now.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-8 md:py-24 lg:px-10"
    >
      <div
        className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-16"
      >
        <div
          className="relative flex h-[420px] items-end justify-center sm:h-[500px] md:h-[550px] lg:h-[600px]"
        >
          <div
            className="absolute bottom-5 h-[300px] w-[300px] overflow-hidden rounded-full bg-blue-100 sm:h-[380px] sm:w-[380px] md:h-[430px] md:w-[430px] lg:h-[490px] lg:w-[490px]"
          >
            <img
              src="/photos/1788501375862.png"
              alt="Aman Shukla"
              className="relative z-10 mx-auto h-[500px] object-cover drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] sm:h-[680px] md:h-[760px] lg:h-[500px] "
            />
          </div>
        </div>

        <div className="w-full">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-base"
          >
            About Me
          </p>

          <h2
            className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Passionate Frontend Developer
          </h2>

          <p
            className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8"
          >
            I'm Aman Shukla, a Frontend Developer who enjoys building beautiful,
            responsive and user-friendly websites. I work with React.js,
            JavaScript and Tailwind CSS to create modern web experiences.
          </p>

          <div
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-8"
          >
            <div
              className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600">5+</h3>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Projects Completed
              </p>
            </div>

            <div
              className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600">1+</h3>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Years Learning
              </p>
            </div>

            <div
              className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600">React</h3>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Frontend Development
              </p>
            </div>

            <div
              className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600">India</h3>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Based in Jabalpur
              </p>
            </div>
          </div>

          <a
            href={resumePdf}
            download="Aman_Shukla_Resume.pdf"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-7 py-3 text-sm  hover:bg-white hover:text-blue-600  font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 sm:mt-8 sm:w-auto sm:px-8 sm:text-base"
          >
            Download Resume 
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
