import React, { useState } from 'react';
import { FaApple, FaLinux, FaWindows, FaCode, FaTerminal, FaCodeBranch, FaLayerGroup, FaCubes } from 'react-icons/fa';

const OS_LIST = [
  { icon: FaApple,   label: 'macOS' },
  { icon: FaLinux,   label: 'Linux',   sub: ['Ubuntu', 'Kali', 'Debian'] },
  { icon: FaWindows, label: 'Windows' },
];

const CATEGORIES = [
  {
    key: 'languages',
    label: 'Languages & Frameworks',
    icon: FaCode,
    items: ["Java", "C", "Embedded C", "C++", "C#", "Python", "HTML/CSS/JS/PHP", "Node.JS", "React.JS", "Next.JS", "Express", "MySQL", "Verilog", "Julia", "Atmel AVR", "Processing.JS", "MATLAB", "Adobe ExtendScript", "Swift", "Bootstrap 5", "TailwindCSS"],
  },
  {
    key: 'softwares',
    label: 'Software & Tools',
    icon: FaCubes,
    items: ["VMWare Fusion", "MicroCap Spice", "Fusion 360", "Wine", "Wireshark", "Adobe After Effects", "Premiere Pro", "Slack", "Termius", "PingPlotter", "MySQLWorkbench", "ModelSim", "Microsoft Suite", "Adobe Suite", "GIMP", "KiCad", "eraser.io", "Firebase", "Clerk"],
  },
  {
    key: 'editors',
    label: 'Editors & IDEs',
    icon: FaLayerGroup,
    items: ["Vim", "VSCode", "Sublime Text", "IntelliJ", "Replit", "CLion", "Visual Studio", "Eclipse", "xCode", "Android Studio", "Arduino IDE", "Atmel Studio", "Brackets"],
  },
  {
    key: 'version_control',
    label: 'Version Control',
    icon: FaCodeBranch,
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    key: 'cli',
    label: 'CLIs',
    icon: FaTerminal,
    items: ["Bash", "Zsh", "PowerShell"],
  },
];

const Tag = ({ label }) => (
  <span className="bg-background text-darkerText border border-white/5 hover:border-accent/30 hover:text-text px-2.5 py-0.5 rounded-full text-xs font-fira-code transition-colors duration-150">
    {label}
  </span>
);

const CategoryCard = ({ category, isOpen, onToggle }) => {
  const Icon = category.icon;
  return (
    <div className={`bg-secondary rounded-xl border transition-colors duration-200 ${isOpen ? 'border-accent/25' : 'border-white/5 hover:border-accent/15'}`}>
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0">
            <Icon size={13} className="text-accent" />
          </div>
          <span className="text-sm font-semibold text-text">{category.label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-fira-code text-accent/50">{category.items.length}</span>
          <span className={`text-accent/40 text-xs transition-transform duration-300 inline-block ${isOpen ? 'rotate-180' : ''}`}>▾</span>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 pt-1 border-t border-white/5 flex flex-wrap gap-1.5">
          {category.items.map((item) => <Tag key={item} label={item} />)}
        </div>
      </div>
    </div>
  );
};

const EnvironmentSection = () => {
  const [openKey, setOpenKey] = useState('languages');

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section id="environment" className="py-20 bg-background font-manrope">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Dev Environment</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ── OS card ── */}
          <div className="bg-secondary rounded-xl border border-white/5 p-5 h-fit">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent/60 mb-4">
              Operating Systems
            </p>
            <div className="space-y-3">
              {OS_LIST.map(({ icon: Icon, label, sub }) => (
                <div key={label}>
                  <div className="flex items-center gap-2 text-text text-sm">
                    <Icon size={14} className="text-accent/70" />
                    <span>{label}</span>
                  </div>
                  {sub && (
                    <div className="flex flex-wrap gap-1.5 mt-2 ml-5">
                      {sub.map((s) => <Tag key={s} label={s} />)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Accordion categories ── */}
          <div className="md:col-span-2 space-y-2">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.key}
                category={cat}
                isOpen={openKey === cat.key}
                onToggle={() => toggle(cat.key)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;