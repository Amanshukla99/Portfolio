import React from "react";

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
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-8 md:py-24 lg:px-10"
    >
      <div className="text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-base"
        >
          My Skills
        </p>

        <h1
          className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Technologies I Work With
        </h1>

        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:mt-5 sm:text-lg sm:leading-8"
        >
          These are the technologies I use to build modern,
          responsive and user-friendly websites.
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3 md:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-h-[180px] sm:rounded-3xl sm:p-7 md:min-h-[190px] lg:min-h-[200px] lg:p-8"
          >
            <i
              className={`${skill.icon} ${skill.color} text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-6xl`}
            ></i>

            <h2
              className="mt-4 text-base font-semibold sm:mt-6 sm:text-xl"
            >
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;