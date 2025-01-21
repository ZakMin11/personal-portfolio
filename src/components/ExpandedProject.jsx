import React from 'react';
import { FaGithub } from "react-icons/fa";

const ExpandedProject = ({ project, onClose }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-md p-6 max-w-4xl w-full relative overflow-auto max-h-screen mx-auto">
      <button onClick={onClose} className="absolute top-4 right-4 bg-accent text-text px-3 py-1 rounded-full hover:bg-accent-dark">
        Close
      </button>
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-text">{project.title}</h3>
        {project.detailedDescription && (
          <p className="text-text mb-4">{project.detailedDescription}</p>
        )}
        {project.images && project.images.length > 0 && (
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, i) => (
              <img key={i} src={image} alt={`Project Image ${i}`} className="w-full h-auto rounded-lg" />
            ))}
          </div>
        )}
        {project.videoLink && (
          <div className="mb-4">
            <iframe
              width="100%"
              height="315"
              src={project.videoLink}
              title="Project Video"
              className="rounded-lg"
            ></iframe>
          </div>
        )}
        {project.link && (
          <div className="mb-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              
              className="bg-accent px-4 py-2 rounded-full text-text hover:underline flex items-center justify-center font-fira-code"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
        )}
        {project.technologies && project.technologies.length > 0 && (
  <div className="mb-4">
    <h4 className="text-xl font-semibold mb-2 text-text">Technologies Used:</h4>
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
      {project.technologies.map((tech, i) => (
        <span key={i} className="bg-accent px-3 py-1 rounded-full text-sm text-text font-fira-code m-1">
          {tech}
        </span>
      ))}
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default ExpandedProject;