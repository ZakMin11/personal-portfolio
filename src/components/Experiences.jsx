import React, { useState } from 'react';
import experiences from '../data/experiences';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/About.css';

const Experiences = () => {
  const [openIndex, setOpenIndex] = useState(0); // first card open by default

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="experience" className="py-20 bg-background font-manrope">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Experience</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent/20 hidden md:block" />

          <div className="space-y-3">
            {experiences.map((exp, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className="md:pl-8 relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-5 w-[15px] h-[15px] rounded-full border-2 hidden md:block transition-colors duration-300
                      ${isOpen ? 'bg-accent border-accent' : 'bg-background border-accent/40'}`}
                  />

                  {/* Card */}
                  <div className={`bg-secondary rounded-xl border transition-colors duration-200
                    ${isOpen ? 'border-accent/30' : 'border-white/5 hover:border-accent/20'}`}
                  >
                    {/* Header — always visible, clickable */}
                    <button
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                      onClick={() => toggle(i)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
                        <span className="text-base font-semibold text-text truncate">{exp.company}</span>
                        <span className="hidden sm:block text-accent/30">·</span>
                        <span className="text-sm text-darkerText truncate">{exp.position}</span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-xs font-fira-code text-accent/70 whitespace-nowrap">{exp.duration}</span>
                        <FaChevronDown
                          size={12}
                          className={`text-accent/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    {/* Expandable body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-6 pb-5 border-t border-white/5 pt-4">
                        <ul className="space-y-2">
                          {exp.description.map((desc, j) => (
                            <li key={j} className="flex gap-3 text-sm text-darkerText leading-relaxed">
                              <span className="text-accent/50 mt-1.5 flex-shrink-0">▸</span>
                              {desc}
                            </li>
                          ))}
                        </ul>

                        {/* Images */}
                        {exp.images?.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-5">
                            {exp.images.map((img, j) => (
                              <img
                                key={j}
                                src={img.src}
                                alt={img.alt}
                                className="w-24 h-24 object-cover rounded-lg border border-white/10"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;