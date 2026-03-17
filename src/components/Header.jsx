import React, { useState } from 'react';

const NAV_LINKS = [
  { label: 'About',       href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Extras',      href: '#certifications' },
  { label: 'Environment', href: '#environment' },
  { label: 'Contact',     href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-primary to-background border-b border-accent/20 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Name / logo */}
        <span className="text-text font-bold text-lg tracking-tight select-none">
          Zak Mineiko
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={`px-3 py-1.5 rounded-md text-sm font-sf-pro-text transition-colors duration-200
                ${label === 'Gallery'
                  ? 'text-accent font-semibold hover:text-accent-light'
                  : 'text-darkerText hover:text-text hover:bg-secondary/60'
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text p-1.5 rounded-md hover:bg-secondary/60 transition"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-primary border-t border-accent/20 px-4 pb-4 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              onClick={() => setMenuOpen(false)}
              className={`py-2 px-3 rounded-md text-sm font-sf-pro-text transition-colors duration-200
                ${label === 'Gallery'
                  ? 'text-accent font-semibold'
                  : 'text-darkerText hover:text-text hover:bg-secondary/60'
                }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;