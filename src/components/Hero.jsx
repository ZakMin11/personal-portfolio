// filepath: /Users/zakmineiko/school/personalWebsite/zakPortfolio/src/components/Hero.jsx
import React, { useState } from 'react';
import { FaSchool, FaGraduationCap, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Modal from './Modal';


const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="hero" className="py-20 bg-secondary font-manrope relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-8 md:space-y-0 mb-8">
          <img src="src/assets/headshot/headshot-green.png" alt="Zak Mineiko" className="rounded-full w-32 h-32 object-cover" />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-text mb-2">Zak Mineiko</h1>
            <p className="text-xl text-text flex items-center justify-center md:justify-start">
              <FaSchool className="mr-2" /> University of Iowa
            </p>
            <p className="text-xl text-text flex items-center justify-center md:justify-start">
              <FaGraduationCap className="mr-2" /> Computer Science and Engineering
            </p>
          </div>
          <div className="text-center md:text-right space-y-4">
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaPhone className="mr-2" /> (708) 321-0211
            </p>
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaEnvelope className="mr-2" /> zmineiko@gmail.com
            </p>
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaLinkedin className="mr-2" /> <a href="https://linkedin.com/in/zakmineiko" className="hover:text-accent">LinkedIn</a>
            </p>
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaGithub className="mr-2" /> <a href="https://github.com/zakmin11" className="hover:text-accent">GitHub</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://teamadmin.io" target="_blank" rel="noopener noreferrer">
            <button className="bg-accent text-text dark:text-text-dark px-4 py-2 rounded-full hover:bg-accent-dark glow-effect">
              Senior Design Team
            </button>
          </a>
          <button
            onClick={() => setShowResume(true)}
            className="bg-accent text-text dark:text-text-dark px-4 py-2 rounded-full hover:bg-accent-dark glow-effect"
          >
            View Resume
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <nav className="px-4 py-2">
          <ul className="flex justify-around items-center text-accent text-sm md:text-base">
            <li className="px-2"><a href="#about" className="hover:text-text">About</a></li>
            <li className="border-l border-text h-6"></li>
            <li className="px-2"><a href="#projects" className="hover:text-text">Projects</a></li>
            <li className="border-l border-text h-6"></li>
            <li className="px-2"><a href="#experience" className="hover:text-text">Experience</a></li>
            <li className="border-l border-text h-6"></li>
            <li className="px-2"><a href="#certifications" className="hover:text-text">Extras</a></li>
            <li className="border-l border-text h-6"></li>
            <li className="px-2"><a href="#environment" className="hover:text-text">Environment</a></li>
            <li className="border-l border-text h-6"></li>
            <li className="px-2"><a href="#contact" className="hover:text-text">Contact</a></li>
          </ul>
        </nav>
      </div>
      <Modal show={showResume} onClose={() => setShowResume(false)}>
        <iframe
          src="src/assets/resume/2024FallResumeTimesGO.pdf"
          width="100%"
          height="650px"
          
          title="Resume"
        ></iframe>
      </Modal>
    </section>
  );
};

export default Hero;