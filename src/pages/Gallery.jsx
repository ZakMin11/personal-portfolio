import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';

// ─── Data: define your projects here ────────────────────────────────────────
// Each project has: title, description, and an array of media items.
// Media item shape:
//   { type: 'image', src: '/gallery/my-photo.jpg', alt: 'description' }
//   { type: 'youtube', id: 'dQw4w9WgXcQ' }   ← just the video ID from the URL
const galleryProjects = [
  {
    title: 'Project Alpha',
    description: 'Built a complete IoT multipet feeder and health monitoring system from blank sheet to working prototype.',
    media: [
      { type: 'youtube', id: 'https://www.youtube.com/embed/r1YfOpTduMA?si=c-st79ow02OHXYI2' },
      { type: 'image', src: 'https://picsum.photos/seed/alpha1/800/600', alt: 'Alpha screenshot 1' },
      { type: 'image', src: 'https://picsum.photos/seed/alpha2/600/800', alt: 'Alpha screenshot 2' },
      { type: 'image', src: 'https://picsum.photos/seed/alpha3/800/500', alt: 'Alpha screenshot 3' },
    ],
  },
  {
    title: 'Project Beta',
    description: 'Hardware meets software. This project involved custom PCB design and embedded firmware.',
    media: [
      { type: 'image', src: 'https://picsum.photos/seed/beta1/900/600', alt: 'Beta board front' },
      { type: 'youtube', id: 'dQw4w9WgXcQ' },
      { type: 'image', src: 'https://picsum.photos/seed/beta2/700/700', alt: 'Beta board back' },
      { type: 'image', src: 'https://picsum.photos/seed/beta3/800/450', alt: 'Beta in action' },
      { type: 'image', src: 'https://picsum.photos/seed/beta4/600/600', alt: 'Beta close-up' },
    ],
  },
  {
    title: 'Network Overhaul',
    description: 'End-to-end redesign of a campus network segment. Spanning trees, VLANs, and a lot of cable runs.',
    media: [
      { type: 'image', src: 'https://picsum.photos/seed/net1/1000/600', alt: 'Rack diagram' },
      { type: 'image', src: 'https://picsum.photos/seed/net2/800/600', alt: 'Switch stack' },
      { type: 'youtube', id: 'dQw4w9WgXcQ' },
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

// Lightbox for images
const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-5 text-white text-3xl font-thin opacity-70 hover:opacity-100 transition"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

// Single media tile
const MediaTile = ({ item, onClick }) => {
  if (item.type === 'youtube') {
    return (
      <div className="relative w-full overflow-hidden rounded-md bg-primary group" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${item.id}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-md bg-secondary cursor-zoom-in group"
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* subtle overlay on hover */}
      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-xs tracking-widest uppercase font-fira-code opacity-80">View</span>
      </div>
    </div>
  );
};

// Masonry-style grid for a project's media
const MediaGrid = ({ media, onImageClick }) => {
  // Split into columns: first item gets priority sizing hints
  // We'll use CSS columns for a true masonry feel
  return (
    <div
      className="gap-1.5"
      style={{
        columnCount: 'auto',
        columnWidth: '260px',
        columnGap: '6px',
      }}
    >
      {media.map((item, i) => (
        <div
          key={i}
          className="mb-1.5 break-inside-avoid"
          style={{ display: 'inline-block', width: '100%' }}
        >
          {item.type === 'youtube' ? (
            // YouTube gets a full-width treatment
            <div className="w-full" style={{ columnSpan: 'all' }}>
              <MediaTile item={item} onClick={onImageClick} />
            </div>
          ) : (
            <MediaTile item={item} onClick={onImageClick} />
          )}
        </div>
      ))}
    </div>
  );
};

// Project block: divider + title/desc + grid
const ProjectBlock = ({ project, onImageClick, isLast }) => (
  <div>
    {/* ── Project header ── */}
    <div className="flex items-center gap-4 py-6">
      <div className="flex-1 h-px bg-accent/30" />
      <div className="text-center px-4">
        <h2 className="text-xl md:text-2xl font-bold text-text tracking-tight">{project.title}</h2>
        <p className="text-darkerText text-sm mt-1 max-w-lg mx-auto font-sf-pro-text">{project.description}</p>
      </div>
      <div className="flex-1 h-px bg-accent/30" />
    </div>

    {/* ── Media grid ── */}
    <MediaGrid media={project.media} onImageClick={onImageClick} />

    {/* No trailing divider after the last project */}
    {!isLast && <div className="h-2" />}
  </div>
);

// ── Page ─────────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // { src, alt }
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    // Gallery page always shows the header
    setShowHeader(true);
  }, []);

  const openLightbox = (item) => {
    if (item.type === 'image') setLightbox({ src: item.src, alt: item.alt });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-3 md:px-6">
        {/* Page title */}
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-text tracking-tight">Gallery</h1>
          <p className="text-darkerText text-sm mt-2 font-sf-pro-text">
            Photos &amp; videos from projects I&apos;ve built.
          </p>
        </div>

        {/* Projects */}
        {galleryProjects.map((project, i) => (
          <ProjectBlock
            key={i}
            project={project}
            onImageClick={openLightbox}
            isLast={i === galleryProjects.length - 1}
          />
        ))}
      </main>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
};

export default Gallery;