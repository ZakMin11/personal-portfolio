import React from 'react';
import { FaAws, FaHeart, FaLaptopCode, FaGamepad, FaGoogle } from 'react-icons/fa';

const certifications = [
  {
    icon: FaAws,
    title: "AWS Cloud Practitioner",
    status: "In Progress",
    description: "Currently studying for the AWS Cloud Practitioner certification.",
    date: "2026",
  },
  {
    icon: FaHeart,
    title: "Food Bank Volunteer",
    status: "50+ Hours",
    description: "Packaged and distributed food to those in need at the CommUnity Crisis Food Bank in Iowa City.",
    date: "April 2024",
  },
  {
    icon: FaLaptopCode,
    title: "Marist Tech Club",
    status: "Member",
    description: "Member of the Marist High School Technology Club.",
    date: "2017 – 2020",
  },
  {
    icon: FaGamepad,
    title: "IIT Summer Coding Camp",
    status: "Runner-Up",
    description: "Studied vector-based game development in Unity with C#. Placed runner-up in a one-week game development competition.",
    date: "2018",
  },
  {
    icon: FaGoogle,
    title: "Google Code-in",
    status: "Prize Winner",
    description: "Competed in Google's open-source program for pre-university students, working across Android/iOS and multiple languages.",
    date: "2017",
  },
];

// Badge color by status
const statusStyle = (status) => {
  if (!status) return 'bg-primary text-darkerText border-white/10';
  const s = status.toLowerCase();
  if (s === 'in progress')  return 'bg-iowa/10 text-iowa border-iowa/30';
  if (s.includes('winner') || s.includes('runner') || s.includes('prize'))
                             return 'bg-accent/15 text-accent border-accent/30';
  return 'bg-primary text-darkerText border-white/10';
};

const Certifications = () => (
  <section id="certifications" className="py-20 bg-background font-manrope">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-text mb-12">Certifications &amp; Extras</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <div
              key={i}
              className="bg-secondary rounded-xl border border-white/5 hover:border-accent/25 p-5 flex flex-col gap-3 transition-colors duration-200"
            >
              {/* Top row: icon + date */}
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <span className="text-xs font-fira-code text-accent/60">{cert.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-text leading-snug">{cert.title}</h3>

              {/* Description */}
              <p className="text-xs text-darkerText leading-relaxed flex-1">{cert.description}</p>

              {/* Status badge */}
              {cert.status && (
                <div className="mt-auto pt-1">
                  <span className={`inline-block text-xs font-fira-code px-2.5 py-0.5 rounded-full border ${statusStyle(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Certifications;