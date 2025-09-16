import React from "react";

const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:justify-between px-6 sm:px-10 lg:px-16"
    >
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-200 mb-4 text-center lg:text-left drop-shadow-lg">
          Jashan Maan
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center lg:text-left">
          Full Stack Developer
        </h2>
        <p className="text-lg text-amber-50 max-w-lg text-center lg:text-left mt-2 drop-shadow-md">
          Crafting intuitive and beautiful digital experiences with a passion
          for user-centric design.
        </p>
        <a
          href="#Contacts"
          className="mt-8 shadow-lg transform transition-all duration-300 bg-blue-600 px-7 py-3 rounded-full text-lg font-semibold text-white hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/50"
        >
          Contact Me
        </a>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center">
        <img
          className="object-cover rounded-full h-64 w-64 sm:h-80 sm:w-80 shadow-2xl shadow-amber-400/20"
          src="./pfp.png"
          alt="Jashan Maan's profile picture"
        />
      </div>
    </section>
  );
};

export default Home;
