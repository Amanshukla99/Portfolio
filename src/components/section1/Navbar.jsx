import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Certificates", "#certificates"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed top-4 left-0 z-50 w-full px-3 sm:px-5">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/95 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:px-6 md:h-16 md:px-8"
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105 sm:text-3xl"
        >
          Aman<span className="text-blue-500">.</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium lg:gap-8 md:flex">
          {navLinks.map(([name, link], index) => (
            <li key={name}>
              <a
                href={link}
                className={`group relative inline-block py-1 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-500 ${ index === 0 ? "text-blue-500" : "text-gray-300" }`}
              >
                {name}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${ index === 0 ? "w-full" : "w-0 group-hover:w-full" }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Aman_Shukla_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 md:block"
        >
          Resume
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 active:scale-90 md:hidden"
        >
          <span
            className={`transition-transform duration-300 ${ menuOpen ? "rotate-90" : "" }`}
          >
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      <div
        className={`mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-xl backdrop-blur-md transition-all duration-300 md:hidden ${ menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 border-transparent opacity-0" }`}
      >
        <div className="p-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map(([name, link], index) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:bg-blue-500/10 hover:text-blue-500 ${ index === 0 ? "bg-blue-500/10 text-blue-500" : "text-gray-300" }`}
                >
                  <span>{name}</span>

                  <span
                    className="translate-x-[-8px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Aman_Shukla_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600 active:scale-[0.98]"
          >
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;