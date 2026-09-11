import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-8 md:py-24 lg:px-10"
    >
      <div className="text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-base"
        >
          Contact Me
        </p>

        <h1
          className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Let's Work Together
        </h1>

        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:mt-5 sm:text-lg sm:leading-8"
        >
          Have a project in mind or want to collaborate?
          Feel free to contact me. I'm always open to new
          opportunities.
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2 md:gap-12 lg:mt-20 lg:gap-16"
      >
        <div className="w-full">
          <div
            className="mb-5 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:mb-6 sm:gap-5 sm:p-6"
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 sm:h-14 sm:w-14"
            >
              <i className="ri-mail-fill text-xl text-white sm:text-2xl"></i>
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-bold sm:text-xl">
                Email
              </h2>

              <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
                aman8103091827@gmail.com
              </p>
            </div>
          </div>

          <div
            className="mb-5 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:mb-6 sm:gap-5 sm:p-6"
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 sm:h-14 sm:w-14"
            >
              <i className="ri-phone-fill text-xl text-white sm:text-2xl"></i>
            </div>

            <div>
              <h2 className="text-lg font-bold sm:text-xl">
                Phone
              </h2>

              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                +91 9926831248
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-5 sm:p-6"
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 sm:h-14 sm:w-14"
            >
              <i className="ri-map-pin-fill text-xl text-white sm:text-2xl"></i>
            </div>

            <div>
              <h2 className="text-lg font-bold sm:text-xl">
                Location
              </h2>

              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Indore, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        <form
          className="w-full rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-7 md:p-8"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 w-full rounded-xl border border-gray-300 p-3.5 text-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:mb-5 sm:p-4 sm:text-base"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 w-full rounded-xl border border-gray-300 p-3.5 text-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:mb-5 sm:p-4 sm:text-base"
          />

          <input
            type="text"
            placeholder="Subject"
            className="mb-4 w-full rounded-xl border border-gray-300 p-3.5 text-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:mb-5 sm:p-4 sm:text-base"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="mb-5 w-full resize-none rounded-xl border border-gray-300 p-3.5 text-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:mb-6 sm:p-4 sm:text-base"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] sm:py-4 sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;