// filepath: /Users/zakmineiko/school/personalWebsite/zakPortfolio/src/components/ExpandedProject.jsx
import React from 'react';
import { FaGithub } from "react-icons/fa";
import Modal from './Modal';

const ExpandedProject = ({ project, onClose }) => {
  return (
    <Modal show={true} onClose={onClose}>
      <div className="bg-background rounded-lg shadow-md p-6 max-w-4xl w-full relative overflow-auto max-h-screen">
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
        {project.githubLink && (
          <div className="mb-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        )}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2 text-text">Technologies Used:</h4>
            <ul className="list-disc list-inside text-text">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ExpandedProject;