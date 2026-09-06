import React from 'react'

const projects = [
  {
    title: "Taste haven",
    image: "/projects/Screenshot 2026-09-04 104531.png",
    tech: "React • Tailwind CSS",
  },
  {
    title: "HireFlow",
    image: "/projects/Screenshot 2026-09-04 105320.png",
    tech: "JavaScript • API",
  },
  {
    title: "Portfolio",
    image: "/projects/Screenshot 2026-09-04 105534.png",
    tech: "React • CSS",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      {/* Heading */}

      <div className="text-center">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          My Projects
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Featured Projects
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Here are some of the projects I've built using modern
          frontend technologies.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-10 mt-20 ">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 border-2 border-white"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-82 object-cover"
            />

            <div className="p-8 bg-blue-50">

              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <p className="text-gray-500 mt-3">
                {project.tech}
              </p>

              <div className="flex gap-4 mt-8">

                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 duration-300">
                  Live Demo
                </button>

                <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 duration-300">
                  GitHub
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;