import React from 'react'

const skills = [
  {
    name: "HTML",
    icon: "ri-html5-fill",
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: "ri-css3-fill",
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: "ri-javascript-fill",
    color: "text-yellow-500",
  },
  {
    name: "React",
    icon: "ri-reactjs-line",
    color: "text-cyan-500",
  },
  {
    name: "Tailwind",
    icon: "ri-tailwind-css-fill",
    color: "text-sky-500",
  },
  {
    name: "Git",
    icon: "ri-git-branch-fill",
    color: "text-red-500",
  },
  {
    name: "GitHub",
    icon: "ri-github-fill",
    color: "text-black",
  },
  {
    name: "VS Code",
    icon: "ri-code-box-fill",
    color: "text-blue-600",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      {/* Heading */}

      <div className="text-center">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          My Skills
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Technologies I Work With
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
          These are the technologies I use to build modern,
          responsive and user-friendly websites.
        </p>

      </div>

      {/* Skills Grid */}

      <div className="grid grid-cols-4 gap-8 mt-20">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer"
          >

            <i className={`${skill.icon} text-6xl ${skill.color}`}></i>

            <h2 className="mt-6 text-xl font-semibold">
              {skill.name}
            </h2>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;