import React from "react";

const certificates = [
  {
    title: "Frontend Development (React)",
    platform: "HackerRank",
    image: "/photos/frontend_developer_react certificate_page-0001.jpg",
  },
  {
    title: "CSS",
    platform: "HackerRank",
    image: "/photos/css certificate_page-0001.jpg",
  },
  {
    title: "JavaScript",
    platform: "HackerRank",
    image: "/photos/javascript_basic certificate_page-0001.jpg",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-8 md:py-24 lg:px-10"
    >
      <div className="text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-base"
        >
          Certificates
        </p>

        <h1
          className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Learning Journey
        </h1>

        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:mt-5 sm:text-lg sm:leading-8"
        >
          A few certifications that reflect my continuous learning and
          passion for frontend development.
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        {certificates.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl"
          >
            <div className="overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 md:h-60 lg:h-64"
              />
            </div>

            <div
              className="flex flex-col bg-blue-50 p-5 sm:p-6"
            >
              <h2
                className="text-xl font-bold leading-tight sm:text-2xl"
              >
                {item.title}
              </h2>

              <p
                className="mt-2 text-sm text-gray-500 sm:text-base"
              >
                Issued by {item.platform}
              </p>

              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 sm:mt-6 sm:text-base"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;