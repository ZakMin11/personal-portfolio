import React, { useState, useEffect, useRef } from 'react';
import projects from '../data/projects';
import ExpandedProject from './ExpandedProject';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const projectsRef = useRef(null);

  const closeExpandedProject = () => {
    setExpandedProject(null);
  };

  useEffect(() => {
    if (expandedProject !== null && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [expandedProject]);

  const toggleExpandProject = (index) => {
    setExpandedProject(index);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects = selectedFilter === 'All' ? projects : projects.filter(project => project.type.includes(selectedFilter));

  return (
    <section id="projects" className="py-10 bg-background font-manrope" ref={projectsRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-3xl font-bold text-center text-text">Projects</h2>
        </div>
        {expandedProject === null && (
          <div className="flex justify-center mb-8">
            {['All', 'Software', 'Hardware', 'Networking', 'Group'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 mx-1 rounded-full ${selectedFilter === filter ? 'bg-accent text-text' : 'bg-secondary text-text'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
        {expandedProject === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-secondary rounded-lg shadow-md p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2 text-text text-center">{project.title}</h3>
                <hr className="border-t border-accent my-2" />
                <p className="text-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-accent px-3 py-1 rounded-full text-sm text-text font-fira-code">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => toggleExpandProject(index)}
                    className="bg-accent text-text px-4 py-2 rounded-full hover:bg-accent-dark transition duration-300"
                  >
                    Show More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ExpandedProject
            project={projects[expandedProject]}
            onClose={closeExpandedProject}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;