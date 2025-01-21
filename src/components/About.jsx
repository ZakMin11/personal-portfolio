import React from 'react';
import '../styles/About.css'; // Import the CSS file

const About = () => {
  const hobbies = ["Traveling", "Hiking", "Gaming", "CAD", "Chess", "3D Printing", "Cooking", "Mountian Biking", "Snowboarding", "Video Editing", "Fishing", "Photography", "Music", "Lifting", "Running", "Ping Pong", "Helping grandma <3"];
  const interests = ["DevOps", "AI", "Robotics", "IoT", "Machine Learning", "Cloud Computing", "Cybersecurity", "Hardware","Firmware", "Web Development"];

  return (
    <section id="about" className="py-20 bg-background font-manrope">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">About Me</h2>
        <div className="bg-secondary rounded-lg shadow-md p-6">
          <p className="text-text mb-4">
          As an aspiring software developer and DevOps specialist, I combine my foundation in full-stack development with hands-on hardware experience to build comprehensive technology solutions. My focus spans cloud infrastructure, IoT devices, and emerging AI technologies, while my background in computer science and engineering drives my passion for practical innovation.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-text">Hobbies</h3>

            <div className="flex flex-wrap gap-2">
              
              {hobbies.map((hobby, index) => (
                
                <span key={index} className="bg-accent px-3 py-1 rounded-full text-sm text-text font-fira-code">    
                        {hobby}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-text">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span key={index} className="bg-accent px-3 py-1 rounded-full text-sm text-text font-fira-code">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;