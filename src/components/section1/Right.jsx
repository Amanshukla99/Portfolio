import React from 'react'

const Right = () => {
  return (
    <div className="w-1/2 flex justify-end">

  <div className="relative w-[550px] h-[650px] flex items-end justify-center">

    {/* Background Circle */}
    <div className="absolute bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600"></div>

    {/* Small Decorative Circle */}
    <div className="absolute top-20 right-5 w-16 h-16 rounded-full bg-blue-200"></div>

    {/* Experience Card */}
    <div className="absolute left-0 top-36 bg-white shadow-xl rounded-2xl px-6 py-4 z-20">
      <h2 className="text-3xl font-bold text-blue-600">1+</h2>
      <p className="text-gray-600">Years Learning</p>
    </div>

    {/* Projects Card */}
    <div className="absolute right-0 bottom-24 bg-white shadow-xl rounded-2xl px-6 py-4 z-20">
      <h2 className="text-3xl font-bold text-blue-600">3+</h2>
      <p className="text-gray-600">Projects</p>
    </div>

    {/* Main Image */}
    <img
      src="/photos/1788501007733.png"
      alt="Aman"
      className="relative z-10 h-[650px] object-cover drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
    />

  </div>

</div>
  )
}

export default Right