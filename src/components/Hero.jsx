// filepath: /Users/zakmineiko/school/personalWebsite/zakPortfolio/src/components/Hero.jsx
import React, { useState } from 'react';
import { FaSchool, FaGraduationCap, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaClock, FaChevronDown } from "react-icons/fa";
import Modal from './Modal';
import headshot from '../assets/headshot/headshot-green.png';
import EEResume from "../assets/resume/EE/2025EEResume.pdf";
import WDResume from "../assets/resume/SW/2025WDResume.pdf";
import '../styles/About.css';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [currentResume, setCurrentResume] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openResume = (resumeType) => {
    setCurrentResume(resumeType === 'ee' ? EEResume : WDResume);
    setShowResume(true);
    setIsDropdownOpen(false);
  };

  return (
    <section id="hero" className="py-20 bg-secondary font-manrope relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-8 md:space-y-0 mb-8">
          <img src={headshot} alt="Zak Mineiko" className="rounded-full w-32 h-32 object-cover" />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-text mb-2">Zak Mineiko</h1>
            <p className="text-xl text-text flex items-center justify-center md:justify-start">
              <FaSchool className="mr-2" /> University of Iowa
            </p>
            <p className="text-xl flex items-center text-text justify-center md:justify-start">
              <FaGraduationCap className="text-text mr-2" />  
              Electrical Engineering          
            </p>
            <p className="text-sm flex items-center text-darkerText justify-center md:justify-start">
              <FaGraduationCap className=" invisible text-xl  mr-2" />  
              Computer Science Focus
            </p>
            
            <p className="text-xl text-text flex items-center justify-center md:justify-start">
              <FaClock className="mr-2" /> Graduated May 2025
            </p>
          </div>
          
          <div className="text-center md:text-right space-y-2">
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaPhone className="mr-2" /> (708) 321-0211
            </p>
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaEnvelope className="mr-2" /> zmineiko@gmail.com
            </p>
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaLinkedin className="mr-2" /> <a href="https://www.linkedin.com/in/zak-mineiko-3b154b1a9/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
            </p>
            <p className="text-xl text-text flex items-center justify-center md:justify-end">
              <FaGithub className="mr-2" /> <a href="https://github.com/zakmin11" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          
          
          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-accent text-text dark:text-text-dark px-4 py-2 rounded-full hover:bg-accent-dark glow-effect flex items-center space-x-2"
            >
              <span>View Resume</span>
              <FaChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-primary rounded-lg shadow-lg overflow-hidden z-10 min-w-full">
                <button
                  onClick={() => openResume('wd')}
                  className="block w-full text-left px-4 py-3 text-text hover:bg-accent hover:text-text-dark transition-colors whitespace-nowrap"
                >
                  SW Variant
                </button>
                <button
                  onClick={() => openResume('ee')}
                  className="block w-full text-left px-4 py-3 text-text hover:bg-accent hover:text-text-dark transition-colors whitespace-nowrap"
                >
                  EE Variant
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <nav className="px-4 py-2">
          <ul className="flex justify-around items-center text-accent text-sm md:text-base navbar-small-screen">
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
        <div className="w-full h-full">
          <iframe
            src={currentResume}
            className="w-screen h-screen"
            style={{ border: "none"}}
            title="Resume"
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;