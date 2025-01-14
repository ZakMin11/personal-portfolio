import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import EnvironmentSection from '../components/EnviromentSection';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import AnimateOnScroll from '../components/AnimateOnScroll';
import About from '../components/About';
import Certifications from '../components/Certifications';

const Portfolio = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowHeader(heroBottom <= 0);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {showHeader && <Header />}

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/*About section*/}
      <AnimateOnScroll>
        <section id="about">
          <About />
        </section>
      </AnimateOnScroll>

      {/* Projects Section */}
      <AnimateOnScroll>
        <section id="projects">
            <Projects />
        </section>
      </AnimateOnScroll>

      {/* Experience Section */}
      <AnimateOnScroll>
        <section id="experience">
            <Experiences />
        </section>
      </AnimateOnScroll>

      {/* Certifications Section */}
      <AnimateOnScroll>
        <section id="certifications">
          <Certifications />
        </section>
      </AnimateOnScroll>

      {/* Environment Section */}
      <AnimateOnScroll>
        <section id="environment">
            <EnvironmentSection />
        </section>
      </AnimateOnScroll>
      
      {/* Contact Section */}
      <AnimateOnScroll>
        <section id="contact">
          <Contact />
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default Portfolio;