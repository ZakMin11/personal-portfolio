import React, { useState } from 'react';
import experiences from '../data/experiences';
import '../styles/About.css';
const Experiences = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const handleMouseEnter = (index) => {
    if (!expandAll) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(setTimeout(() => setExpandedExperience(index), 300));
    }
  };

  const handleMouseLeave = () => {
    if (!expandAll) {
      clearTimeout(hoverTimeout);
      setExpandedExperience(null);
    }
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    setExpandedExperience(null); // Reset individual expansion
  };

  return (
    <section id="experience" className="py-20 bg-background font-manrope">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-8">
          <button
            onClick={toggleExpandAll}
            className="absolute left-0 bg-accent text-text px-3 py-1 rounded-full hover:bg-accent-dark glow-effect"
          >
            {expandAll ? 'Collapse All' : 'Expand All'}
          </button>
          <h2 className="text-3xl font-bold text-center text-text">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-secondary rounded-lg shadow-md p-6 transition-all duration-500 ease-in-out ${expandAll || expandedExperience === index ? 'max-h-screen' : 'max-h-40 overflow-hidden relative'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-xl font-semibold text-text">{exp.company}</h3>
              <div className="text-text mb-2">{exp.position}</div>
              <div className="text-accent mb-4">{exp.duration}</div>
              <ul className={`text-text list-disc list-inside transition-opacity duration-500 ${expandAll || expandedExperience === index ? 'opacity-100' : 'opacity-0'}`}>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {(expandAll || expandedExperience === index) && exp.images && exp.images.length > 0 && (
                <div className="mt-4 flex justify-center">
                  {exp.images.map((image, i) => (
                    <a key={i} href={image.src} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <img src={image.src} alt={image.alt} className="w-32 h-32 object-cover rounded-full" />
                    </a>
                  ))}
                </div>
              )}
              {expandedExperience === index && !expandAll && (
                <button className="text-accent mt-2 glow-text transition-opacity duration-500">
                  Show Less
                </button>
              )}
              {expandedExperience !== index && !expandAll && (
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary via-secondary/90 to-transparent flex items-center justify-center">
                  <span className="text-accent glow-text">Show More</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;