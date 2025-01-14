import React from 'react';

const certifications = [
  {
    title: "AWS Cloud Practitioner Certification",
    status: "In Progress",
    description: "Currently studying for the AWS Cloud Practitioner Certification.",
    date: "2025",
  },
  {
    title: "Food Bank Volunteer",
    status: "In Progress",
    description: "With over 50 hours of volunteer work at the CommUnity Crisis Food Bank in Iowa City, I have helped package and distribute food to those in need.",
    date: "2024-Present",
  },
  {
    title: "Tech Club Member",
    status: "Completed",
    description: "Member of the Marist High School Technology Club from 2017 to 2020.",
    date: "2017-2020",
  },
  {
    title: "Illinois Institute of Technology Summer Coding Camp",
    status: "Completed",
    description: "A summer long course learning vector based game development in Unity using C#. Runner up in a one-week game development competition.",
    date: "2018",
  },
  {
    title: "Google Code-in",
    status: "Completed",
    description: "For introducing preuniversity students to open source development. Used various languages and environments such as Android/IOS development. Competed and won prizes in Google Code-in in 2017.",
    date: "2017",
  },
  
  
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background font-manrope">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Certifications & Extras</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-secondary rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-text">{cert.title}</h3>
                <div className="bg-accent text-text px-3 py-1 rounded-full text-sm font-fira-code">
                  {cert.date}
                </div>
              </div>
              <div className="text-accent mb-2">{cert.status}</div>
              <p className="text-text">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;