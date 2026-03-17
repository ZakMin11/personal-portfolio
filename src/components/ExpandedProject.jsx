import React, { useState } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

// Lightbox for fullscreen image view
const Lightbox = ({ src, alt, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNext, onPrev, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Prev */}
      {hasPrev && (
        <button
          className="absolute left-4 text-white/70 hover:text-white transition p-2 text-2xl z-10"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
      )}

      <img
        src={src}
        alt={alt}
        className="max-h-[88vh] max-w-[88vw] rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {hasNext && (
        <button
          className="absolute right-4 text-white/70 hover:text-white transition p-2 text-2xl z-10"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      )}

      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition text-2xl"
        onClick={onClose}
        aria-label="Close"
      >
        <FaTimes />
      </button>
    </div>
  );
};

const ExpandedProject = ({ project, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const hasVideo = !!project.videoLink;

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => Math.max(0, i - 1));
  const nextImage = () => setLightboxIndex((i) => Math.min(images.length - 1, i + 1));

  return (
    <>
      <div className="bg-secondary rounded-xl shadow-xl max-w-4xl w-full mx-auto overflow-hidden">

        {/* ── Header bar ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-accent/20">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-darkerText hover:text-text transition-colors text-sm"
          >
            <FaChevronLeft size={12} />
            Back to Projects
          </button>
          <h3 className="text-xl font-bold text-text">{project.title}</h3>
          <div className="w-28" /> {/* spacer to center title */}
        </div>

        <div className="p-6 space-y-8">

          {/* ── Tech tags ── */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-primary text-darkerText px-3 py-1 rounded-full text-xs font-fira-code">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* ── Description ── */}
          {project.detailedDescription && (
            <p className="text-darkerText text-sm leading-relaxed">
              {project.detailedDescription}
            </p>
          )}

          {/* ── Media: images + video ── */}
          {(hasImages || hasVideo) && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-accent/70 mb-3">
                Media
              </h4>

              {/* Image grid */}
              {hasImages && (
                <div className={`grid gap-3 mb-3 ${
                  images.length === 1
                    ? 'grid-cols-1'
                    : images.length === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-2 md:grid-cols-3'
                }`}>
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-lg bg-primary aspect-video cursor-zoom-in group"
                      onClick={() => openLightbox(i)}
                    >
                      <img
                        src={src}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              )}

              {/* Video embed */}
              {hasVideo && (
                <div className="relative w-full overflow-hidden rounded-lg bg-primary" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={project.videoLink}
                    title={`${project.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          )}

          {/* ── GitHub link ── */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-text px-5 py-2 rounded-full text-sm font-fira-code transition-colors duration-200 glow-effect"
            >
              <FaGithub />
              View on GitHub
            </a>
          )}

        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          src={images[lightboxIndex]}
          alt={`${project.title} ${lightboxIndex + 1}`}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < images.length - 1}
        />
      )}
    </>
  );
};

export default ExpandedProject;