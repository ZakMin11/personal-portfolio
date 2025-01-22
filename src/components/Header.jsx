// filepath: /Users/zakmineiko/school/personalWebsite/zakPortfolio/src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-t from-accent to-background shadow-lg fixed top-0 left-0 w-full z-50 px-4 py-2">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">Zak Mineiko</h1>
      </div>
      <div className="max-w-6xl mx-auto mt-2">
        <ul className="flex justify-around items-center text-white text-sm md:text-base navbar-small-screen">
          <li className="px-2"><a href="#about" className="hover:text-yellow-300 transition duration-300">About</a></li>
          <li className="border-l border-white h-6"></li>
          <li className="px-2"><a href="#projects" className="hover:text-yellow-300 transition duration-300">Projects</a></li>
          <li className="border-l border-white h-6"></li>
          <li className="px-2"><a href="#experience" className="hover:text-yellow-300 transition duration-300">Experience</a></li>
          <li className="border-l border-white h-6"></li>
          <li className="px-2"><a href="#certifications" className="hover:text-yellow-300 transition duration-300">Extras</a></li>
          <li className="border-l border-white h-6"></li>
          <li className="px-2"><a href="#environment" className="hover:text-yellow-300 transition duration-300">Environment</a></li>
          <li className="border-l border-white h-6"></li>
          <li className="px-2"><a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;