import React from 'react';

const Header = () => {
  return (
    <nav className="bg-primary shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-24"> {/* Adjusted height */}
          <h1 className="text-lg font-bold text-card text-text">Zak Mineiko</h1> {/* Adjusted font size */}
          <div className="flex space-x-4">
            <a href="#hero" className="text-card hover:text-accent text-sm">Home</a>
            <a href="#projects" className="text-card hover:text-accent text-sm">Projects</a>
            <a href="#experience" className="text-card hover:text-accent text-sm">Experience</a>
            <a href="#Certifications" className="text-card hover:text-accent text-sm">Extras</a>
            <a href="#environment" className="text-card hover:text-accent text-sm">Technologies</a>
            <a href="#contact" className="text-card hover:text-accent text-sm">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;