import React from "react";

const projects = [
  {
    title: "Taste Haven",
    image: "/photos/Screenshot 2026-09-04 104531.png",
    tech: "React • Tailwind CSS",
    github: "https://github.com/Amanshukla99/Taste-Haven",
    live: "https://taste-haven-one.vercel.app",
  },
  {
    title: "HireFlow",
    image: "/photos/Screenshot 2026-09-04 105320.png",
    tech: "JavaScript • API",
    github: "https://github.com/Amanshukla99/HireFlow",
    live: "https://hireflow-gamma-virid.vercel.app",
  },
  {
    title: "Portfolio",
    image: "/photos/Screenshot 2026-09-04 105534.png",
    tech: "React • CSS",
    github: "https://github.com/Amanshukla99/Portfolio",
    live: "https://portfolio-inky-alpha-76.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-8 md:py-24 lg:px-10"
    >
      <div className="text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-base"
        >
          My Projects
        </p>

        <h1
          className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Featured Projects
        </h1>

        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:mt-5 sm:text-lg sm:leading-8"
        >
          Here are some of the projects I've built using modern
          frontend technologies.
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl border-2 border-white bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-60 md:h-64 lg:h-72"
              />
            </div>

            <div
              className="bg-blue-50 p-5 sm:p-6 md:p-7 lg:p-8"
            >
              <h2
                className="text-xl font-bold sm:text-2xl"
              >
                {project.title}
              </h2>

              <p
                className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-base"
              >
                {project.tech}
              </p>

              <div
                className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 sm:w-auto sm:px-6 sm:text-base"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-gray-100 hover:text-blue-600 active:scale-95 sm:w-auto sm:px-6 sm:text-base"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;