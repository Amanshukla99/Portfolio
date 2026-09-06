import React from 'react'

const Left = () => {
  return (
   <div className="w-[44%] pl-8">

  {/* Greeting */}
  <p className="text-2xl font-semibold text-blue-600">
    Hello, I'm
  </p>

  {/* Name */}
  <h1 className="text-7xl font-bold mt-3 leading-tight">
    Aman Shukla
  </h1>

  {/* Profession */}
  <h2 className="text-6xl font-bold mt-4">
    <span className="text-blue-600">Frontend</span> Developer
    <span className="animate-pulse text-blue-600"> |</span>
  </h2>

  {/* Description */}
  <p className="text-gray-500 text-xl leading-9 mt-8 max-w-xl">
    I create beautiful, responsive and performance-focused
    websites using React.js, Tailwind CSS and modern web
    technologies.
  </p>

  {/* Buttons */}
  <div className="flex items-center gap-6 mt-10">

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold duration-300">
      View Projects
    </button>

    <button className="border-2 text-blue-600  border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-2xl text-lg font-semibold duration-300">
      Contact Me
    </button>

  </div>

  {/* Social */}
  <div className="mt-16">

    <h3 className="text-2xl font-semibold text-gray-700">
      Connect with me
    </h3>

    <div className="flex gap-5 mt-6">

      <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300 cursor-pointer">
        <i className="ri-github-fill text-3xl"></i>
      </div>

      <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300 cursor-pointer">
        <i className="ri-linkedin-fill text-3xl"></i>
      </div>

      <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300 cursor-pointer">
        <i className="ri-twitter-x-fill text-3xl"></i>
      </div>

      <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300 cursor-pointer">
        <i className="ri-instagram-line text-3xl"></i>
      </div>

    </div>

  </div>

</div>
  )
}

export default Left