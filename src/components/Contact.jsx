import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const LINKS = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'zmineiko@gmail.com',
    href: 'mailto:zmineiko@gmail.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '(708) 321-0211',
    href: 'tel:7083210211',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'zak-mineiko',
    href: 'https://www.linkedin.com/in/zak-mineiko-3b154b1a9/',
    external: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'zakmin11',
    href: 'https://github.com/zakmin11',
    external: true,
  },
];

const Contact = () => (
  <section id="contact" className="py-20 bg-background font-manrope">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-3xl font-bold text-text mb-3">Get In Touch</h2>
      <p className="text-darkerText text-sm mb-12">
        Open to new opportunities — feel free to reach out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LINKS.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group bg-secondary border border-white/5 hover:border-accent/30 rounded-xl p-5 flex flex-col items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-200">
              <Icon size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent/60 mb-0.5">{label}</p>
              <p className="text-sm text-darkerText group-hover:text-text transition-colors duration-200 font-fira-code">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;