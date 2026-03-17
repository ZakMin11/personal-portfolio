import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import Modal from './Modal';
import headshot from '../assets/headshot/headshot.jpg';
import EEResume from "../assets/resume/EE/2026EmbResume.pdf";
import WDResume from "../assets/resume/SW/2026SWEResume.pdf";
import IEResume from "../assets/resume/IE/2026IEResume.pdf";
import '../styles/About.css';

const CONTACT_LINKS = [
  { icon: FaPhone,    label: '(708) 321-0211',    href: 'tel:7083210211' },
  { icon: FaEnvelope, label: 'zmineiko@gmail.com', href: 'mailto:zmineiko@gmail.com' },
  { icon: FaLinkedin, label: 'LinkedIn',           href: 'https://www.linkedin.com/in/zak-mineiko-3b154b1a9/', external: true },
  { icon: FaGithub,   label: 'GitHub',             href: 'https://github.com/zakmin11', external: true },
];

const fadeStyle = (delay) => ({
  animationDelay: `${delay}ms`,
  animationFillMode: 'both',
});

const Hero = () => {
  const [showResume, setShowResume]         = useState(false);
  const [currentResume, setCurrentResume]   = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted]               = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isDropdownOpen) return;
    const close = () => setIsDropdownOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [isDropdownOpen]);

  const openResume = (type) => {
    setCurrentResume(type === 'ee' ? EEResume : type === 'wd' ? WDResume : IEResume);
    setShowResume(true);
    setIsDropdownOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-secondary flex flex-col justify-center overflow-hidden font-manrope"
    >
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #428B70 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial glow behind headshot area */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(66,139,112,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-28 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

          {/* ── Headshot ── */}
          <div
            className={`flex-shrink-0 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
            style={fadeStyle(0)}
          >
            <div className="relative">
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-accent to-accent-dark opacity-50 blur-[2px]" />
              <img
                src={headshot}
                alt="Zak Mineiko"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover ring-[1.5px] ring-accent/30"
              />
            </div>
          </div>

          {/* ── Content ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 min-w-0">

            {/* Name */}
            <h1
              className={`text-5xl md:text-6xl font-bold text-text tracking-tight leading-none ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={fadeStyle(80)}
            >
              Zak Mineiko
            </h1>

            {/* Subtitle */}
            <p
              className={`text-accent text-base md:text-lg font-semibold mt-3 tracking-widest uppercase ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={fadeStyle(180)}
            >
              Electrical Engineer &amp; Software Developer
            </p>

            {/* Meta */}
            <div
              className={`flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 mt-3 text-darkerText text-sm ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={fadeStyle(260)}
            >
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt size={11} className="text-accent/60" />
                University of Iowa
              </span>
              <span className="text-accent/25">·</span>
              <span>Electrical Engineering — CS Focus</span>
              <span className="text-accent/25">·</span>
              <span>Graduated May&nbsp;2025</span>
            </div>

            {/* Thin accent divider */}
            <div
              className={`w-12 h-px bg-accent/50 my-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={fadeStyle(320)}
            />

            {/* Contact links */}
            <div
              className={`flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={fadeStyle(380)}
            >
              {CONTACT_LINKS.map(({ icon: Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-1.5 text-darkerText hover:text-accent transition-colors duration-200 text-sm"
                >
                  <Icon size={13} className="text-accent/60" />
                  {label}
                </a>
              ))}
            </div>

            {/* CTA row */}
            <div
              className={`flex flex-wrap items-center justify-center md:justify-start gap-3 mt-8 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={fadeStyle(460)}
            >
              {/* Resume dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setIsDropdownOpen((o) => !o)}
                  className="bg-accent hover:bg-accent-dark text-text px-5 py-2.5 rounded-full glow-effect flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                >
                  View Resume
                  <FaChevronDown
                    size={11}
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 left-0 bg-primary border border-accent/20 rounded-xl shadow-xl overflow-hidden z-20 min-w-full">
                    {[{ key: 'wd', label: 'SW Variant' }, { key: 'ie', label: 'IE Variant' }, { key: 'ee', label: 'EE Variant' }].map(({ key, label }) => (
                      <button
                        key={key}
                        onClick={() => openResume(key)}
                        className="block w-full text-left px-5 py-3 text-sm text-darkerText hover:text-text hover:bg-accent/20 transition-colors whitespace-nowrap"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* See my work */}
              <a
                href="#about"
                className="border border-accent/30 hover:border-accent/70 text-darkerText hover:text-text px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              >
                See My Work ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll bounce indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent/30 animate-bounce">
        <FaChevronDown size={16} />
      </div>

      {/* Resume modal */}
      <Modal show={showResume} onClose={() => setShowResume(false)}>
        <div className="w-full h-full">
          <iframe
            src={currentResume}
            className="w-screen h-screen"
            style={{ border: 'none' }}
            title="Resume"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Hero;