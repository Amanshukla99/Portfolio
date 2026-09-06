import React from 'react'

const certificates = [
  {
    title: "Frontend Development(React)",
    platform: "HackerRank",
    image: "/photos/frontend_developer_react certificate_page-0001.jpg"
  },
  {
    title: "CSS",
    platform: "HackerRank",
    image: "/photos/css certificate_page-0001.jpg",
  },
  {
    title: "Java script",
    platform: "HackerRank",
    image: "/photos/javascript_basic certificate_page-0001.jpg",
  },
 
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      {/* Heading */}

      <div className="text-center">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Certificates
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Learning Journey
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          A few certifications that reflect my continuous learning and
          passion for frontend development.
        </p>

      </div>

      {/* Cards */}

      <div className="h-120 w-300 flex  gap-14 mt-16 ">

        {certificates.map((item, index) => (

          <div
            key={index}
            className= "  bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-70 object-fill"
            />

            <div className="p-6 flex flex-col">

              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.platform}
              </p>

              <a className="mt-6 cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 duration-300">
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