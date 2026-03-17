import React, { useState, useEffect, useRef } from 'react';
import projects from '../data/projects';
import ExpandedProject from './ExpandedProject';
import { FaPlay, FaImage } from 'react-icons/fa';
import '../styles/About.css';

// Extract YouTube thumbnail from embed URL
const getYoutubeThumbnail = (videoLink) => {
  if (!videoLink) return null;
  const match = videoLink.match(/(?:embed\/)([^?]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
};

const ProjectCard = ({ project, originalIndex, onExpand }) => {
  const [imgError, setImgError] = useState(false);

  // Prefer first image; fall back to YouTube thumbnail; fall back to null
  const thumbnail = (!imgError && project.images?.[0])
    ? project.images[0]
    : getYoutubeThumbnail(project.videoLink);

  const hasVideo = !!project.videoLink;

  return (
    <div
      className="bg-secondary rounded-xl shadow-md flex flex-col overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
      onClick={() => onExpand(originalIndex)}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-44 bg-primary flex-shrink-0 overflow-hidden">
        {thumbnail ? (
          <>
            <img
              src={thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
            {/* Dim overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </>
        ) : (
          // Placeholder when no image or video
          <div className="w-full h-full flex items-center justify-center text-accent/30">
            <FaImage size={48} />
          </div>
        )}

        {/* Video badge */}
        {hasVideo && (
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white rounded-full px-2 py-1 flex items-center gap-1 text-xs">
            <FaPlay size={8} />
            <span>Video</span>
          </div>
        )}

        {/* Image count badge */}
        {project.images?.length > 1 && (
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white rounded-full px-2 py-1 flex items-center gap-1 text-xs">
            <FaImage size={8} />
            <span>{project.images.length}</span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-text mb-1 leading-tight">{project.title}</h3>
        <hr className="border-t border-accent/40 my-2" />
        <p className="text-darkerText text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>

        {/* Tech tags — show first 4, then "+N more" */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="bg-primary text-darkerText px-2.5 py-0.5 rounded-full text-xs font-fira-code">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-primary text-accent px-2.5 py-0.5 rounded-full text-xs font-fira-code">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Slug helpers — converts "nibbleMate" ↔ "nibblemate"
const toSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');
const indexFromSlug = (slug) => projects.findIndex((p) => toSlug(p.title) === slug);

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsRef = useRef(null);

  // On mount, check for ?project=slug in the URL and auto-open that project
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('project');
    if (slug) {
      const idx = indexFromSlug(slug);
      if (idx !== -1) setExpandedProject(idx);
    }
  }, []);

  // When a project opens/closes, update the URL query param (no page reload)
  const openProject = (index) => {
    const slug = toSlug(projects[index].title);
    const url = new URL(window.location);
    url.searchParams.set('project', slug);
    window.history.pushState({}, '', url);
    setExpandedProject(index);
  };

  const closeExpandedProject = () => {
    const url = new URL(window.location);
    url.searchParams.delete('project');
    window.history.pushState({}, '', url);
    setExpandedProject(null);
  };

  useEffect(() => {
    if (expandedProject !== null && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [expandedProject]);

  const handleFilterChange = (filter) => {
    if (filter === selectedFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedFilter(filter);
      setIsTransitioning(false);
    }, 200);
  };

  // Keep original index so ExpandedProject can still reference projects[]
  const filteredProjects = (selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.type.includes(selectedFilter))
  ).map((p) => ({ project: p, originalIndex: projects.indexOf(p) }));

  return (
    <section id="projects" className="py-10 bg-background font-manrope" ref={projectsRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-8">Projects</h2>

        {expandedProject === null && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All', 'Software', 'Hardware', 'Networking', 'Group'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-200 glow-effect
                  ${selectedFilter === filter
                    ? 'bg-accent text-text'
                    : 'bg-secondary text-darkerText hover:text-text hover:bg-accent/20'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {expandedProject === null ? (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-projects ${
              isTransitioning ? 'fade-out' : 'fade-in'
            }`}
          >
            {filteredProjects.map(({ project, originalIndex }) => (
              <ProjectCard
                key={originalIndex}
                project={project}
                originalIndex={originalIndex}
                onExpand={openProject}
              />
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