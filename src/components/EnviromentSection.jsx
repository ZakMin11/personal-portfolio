import React from 'react';
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";

const environments = {
  current: {
    editors: ["Vim", "VSCode", "Sublime Text", "IntelliJ", "Replit", "CLion", "Visual Studio", "Eclipse", "xCode", "Android Studio", "Arduino IDE", "Atmel Studio"],
    version_control: ["Git", "GitHub", "GitLab"],
    cli: ["Bash", "Zsh", "PowerShell"],
    languages: ["Java", "C","Embedded C", "C++", "C#", "Python", "HTML/CSS/JS/PHP", "Node JS", "React JS", "Express", "MySQL", "Julia", "Atmel AVR", "Processing.JS", "MATLAB", "Adobe ExtendScript", "Swift"],
    libraries: ["React", "Redux", "Tailwind CSS", "Bootstrap", "jQuery"],
    softwares: ["VMWare Fusion","MicroCap Spice", "Fusion 360", "Wine", "Wireshark", "Adobe After Effects", "Premiere Pro", "Slack", "Termius", "PingPlotter", "MySQLWorkbench", "Microsoft Suite", "Adobe Suite", "GIMP", "eraser.io"]
  }
};

const EnvironmentSection = () => {
  return (
    <section id="environment" className="py-20 bg-background font-manrope">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Development Environment and Technologies</h2>
        
        <div className="bg-secondary rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operating Systems Tile */}
            <div className="bg-primary rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">Operating Systems</h3>
              <div className="mb-4">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <FaApple /><span className="text-card">macOS</span>
                </div>
                <div className="flex items-center gap-2 text-accent mb-4">
                  <FaLinux /><span className="text-card">Linux</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">Ubuntu</div>
                    <div className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">Kali</div>
                    <div className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">Debian</div>
                </div>
                <div className="flex items-center gap-2 text-accent mb-4">
                  <FaWindows /><span className="text-card">Windows</span>
                </div>
              </div>
            </div>
            {/* Softwares Tile */}
            <div className="bg-primary rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">Softwares</h3>
              <div className="flex flex-wrap gap-2">
                {environments.current.softwares.map((software, index) => (
                  <span key={index} className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">
                    {software}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Tile */}
            <div className="bg-primary rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {environments.current.languages.map((language, index) => (
                  <span key={index} className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Editors/IDEs Tile */}
            <div className="bg-primary rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">Editors/IDEs</h3>
              <div className="flex flex-wrap gap-2">
                {environments.current.editors.map((editor, index) => (
                  <span key={index} className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">
                    {editor}
                  </span>
                ))}
              </div>
            </div>

            {/* Version Control Tile */}
            <div className="bg-primary rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">Version Control</h3>
              <div className="flex flex-wrap gap-2">
                {environments.current.version_control.map((vc, index) => (
                  <span key={index} className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">
                    {vc}
                  </span>
                ))}
              </div>
            </div>

            {/* CLI Tile */}
            <div className="bg-primary rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">CLIs</h3>
              <div className="flex flex-wrap gap-2">
                {environments.current.cli.map((cli, index) => (
                  <span key={index} className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">
                    {cli}
                  </span>
                ))}
              </div>
            </div>

            {/* Libraries Tile */}
            <div className="bg-primary rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {environments.current.libraries.map((library, index) => (
                  <span key={index} className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">
                    {library}
                  </span>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;