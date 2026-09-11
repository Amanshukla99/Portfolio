import React from "react";
import "remixicon/fonts/remixicon.css";
import Left from "./Left";
import Right from "./Right";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col overflow-hidden pt-20 sm:pt-28 md:pt-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 xl:px-16 "
    >
      <Left />
      <Right />
    </section>
  );
};

export default Hero;