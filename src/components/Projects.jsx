import React, { useState, useRef, useEffect } from 'react';
import projects from '../data/projects';
import '../styles/Projects.css'; // Import the CSS file
import ExpandedProject from './ExpandedProject';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const projectsRef = useRef(null);

  const toggleExpandProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setScrollPosition(window.scrollY);
      setExpandedProject(index);
    }
  };

  const toggleProjectsSection = () => {
    setIsProjectsExpanded(!isProjectsExpanded);
  };

  const closeExpandedProject = () => {
    setExpandedProject(null);
  };

  useEffect(() => {
    if (expandedProject !== null && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }, [expandedProject]);

  return (
    <section id="projects" className="py-20 bg-background font-manrope" ref={projectsRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Projects</h2>
        <div className="bg-secondary rounded-lg shadow-md p-6 relative">
          {isProjectsExpanded && (
            <button
              onClick={toggleProjectsSection}
              className="absolute top-4 right-4 bg-accent text-text px-3 py-1 rounded-full hover:bg-accent-dark"
            >
              Collapse
            </button>
          )}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isProjectsExpanded ? '' : 'projects-preview'}`}>
            {projects.map((project, index) => (
              <div key={index} className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-text">{project.title}</h3>
                <hr className="border-t border-accent my-2" />
                <p className="text-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-accent px-3 py-1 rounded-full text-sm text-text font-fira-code">
                      {tech}
                    </span>
                  ))}
                </div>
                {expandedProject === index && (
                  <div className="mt-4">
                    <div className="mb-4">
                      {project.images.map((image, i) => (
                        <img key={i} src={image} alt={`Project ${index} Image ${i}`} className="mb-2 w-full rounded-lg" />
                      ))}
                    </div>
                  </div>
                )}
                <button
                  onClick={() => toggleExpandProject(index)}
                  className="text-text hover:text-accent"
                >
                  {expandedProject === index ? 'Show Less' : 'Show More'}
                </button>
              </div>
            ))}
          </div>
          {!isProjectsExpanded && (
            <div className="gradient-overlay flex justify-center items-center">
              <button
                onClick={toggleProjectsSection}
                className="text-text bg-accent-light rounded-full px-3 py-2 hover:bg-accent-dark glow-effect hover:text-accent mb-4"
              >
                Show Projects
              </button>
            </div>
          )}
        </div>
      </div>
      {expandedProject !== null && (
        <ExpandedProject
          project={projects[expandedProject]}
          onClose={closeExpandedProject}
        />
      )}
    </section>
  );
};

export default Projects;