import React from 'react';
import '../styles/About.css';

const hobbies = [
  "Traveling", "Hiking", "Gaming", "CAD", "Chess", "3D Printing",
  "Cooking", "Mountain Biking", "Snowboarding", "Video Editing",
  "Fishing", "Photography", "Music", "Lifting", "Running", "Ping Pong"
];

const interests = [
  "Automation", "Embedded Systems", "IoT", "PCB Design", "CAD",
  "Hardware", "Robotics", "AI", "Full Stack", "DevOps"
];

const TagList = ({ items, accent = false }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className={`px-3 py-1 rounded-full text-xs font-fira-code transition-colors duration-200
          ${accent
            ? 'bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30'
            : 'bg-primary text-darkerText border border-white/5 hover:border-accent/30 hover:text-text'
          }`}
      >
        {item}
      </span>
    ))}
  </div>
);

const About = () => (
  <section id="about" className="py-10 bg-background font-manrope">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-text mb-12">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ── Bio card ── */}
        <div className="md:col-span-2 bg-secondary rounded-xl p-6 flex flex-col justify-between border border-white/5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent/60 mb-3">
              Who I Am
            </p>
            <p className="text-text leading-relaxed text-sm">
              Systems builder.
            </p>
            <p className="text-text leading-relaxed text-sm">
              If it's broken I fix it, if it doesn't exist I build it.  
            </p>
            <p className="text-text leading-relaxed text-sm ">
              Full stack in every sense.
            </p>
            <p className="text-text leading-relaxed text-sm ">
              Function {'>'} Form.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent/60 mb-3">
              Technical Interests
            </p>
            <TagList items={interests} accent />
          </div>
        </div>

        {/* ── Hobbies card ── */}
        <div className="bg-secondary rounded-xl p-6 border border-white/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent/60 mb-3">
            Outside the Lab
          </p>
          <TagList items={hobbies} />
        </div>

      </div>
    </div>
  </section>
);

export default About;