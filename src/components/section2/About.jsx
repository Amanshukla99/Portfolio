import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Image */}
        <div className="relative flex justify-center items-end h-[550px] md:h-[600px]">

          <div className="absolute bottom-5 w-[390px] h-[390px] md:w-[490px] md:h-[490px] rounded-full bg-blue-100 overflow-hidden">
              <img
            src="/photos/1788501375862.png"
            alt="Aman Shukla"
            className="relative z-10 h-[800px] md:h-[880px] pb-70  object-contain scale-[1.35] drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
          />
          </div>

        

        </div>

        {/* Content */}
        <div>

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Passionate Frontend Developer
          </h2>

          <p className="text-gray-500 mt-6 leading-8 text-lg">
            I'm Aman Shukla, a Frontend Developer who enjoys building
            beautiful, responsive and user-friendly websites. I work with
            React.js, JavaScript and Tailwind CSS to create modern web
            experiences.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">2+</h3>
              <p className="text-gray-500 mt-1">
                Projects Completed
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">1+</h3>
              <p className="text-gray-500 mt-1">
                Years Learning
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">
                React
              </h3>
              <p className="text-gray-500 mt-1">
                Frontend Development
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">
                India
              </h3>
              <p className="text-gray-500 mt-1">
                Based in Indore
              </p>
            </div>

          </div>

          {/* Resume */}
          <a
            href="/Aman_Shukla_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;