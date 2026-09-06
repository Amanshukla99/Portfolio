import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      {/* Heading */}

      <div className="text-center">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Contact Me
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Let's Work Together
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
          Have a project in mind or want to collaborate?
          Feel free to contact me. I'm always open to new
          opportunities.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-16 mt-20">

        {/* Left Side */}

        <div>

          <div className="flex items-center gap-5 bg-white shadow-lg rounded-2xl p-6 mb-6">

            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-mail-fill text-white text-2xl"></i>
            </div>

            <div>
              <h2 className="font-bold text-xl">Email</h2>
              <p className="text-gray-500">
                aman8103091827@gmail.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5 bg-white shadow-lg rounded-2xl p-6 mb-6">

            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-phone-fill text-white text-2xl"></i>
            </div>

            <div>
              <h2 className="font-bold text-xl">Phone</h2>
              <p className="text-gray-500">
                +91 9926831248
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5 bg-white shadow-lg rounded-2xl p-6">

            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-map-pin-fill text-white text-2xl"></i>
            </div>

            <div>
              <h2 className="font-bold text-xl">Location</h2>
              <p className="text-gray-500">
                Indore, Madhya Pradesh
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <form className="bg-white shadow-xl rounded-3xl p-8">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl p-4 mb-5 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-xl p-4 mb-5 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-xl p-4 mb-5 outline-none focus:border-blue-600"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-xl p-4 mb-6 outline-none focus:border-blue-600 resize-none"
          ></textarea>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold duration-300">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;