import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background font-manrope">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Get In Touch!</h2>
        <div className="bg-secondary rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <p className="text-xl text-text flex items-center justify-center bg-accent px-3 py-1 rounded-full">
              <FaPhone className="mr-2" /> (708) 321-0211
            </p>
            <p className="text-xl text-text flex items-center justify-center bg-accent px-3 py-1 rounded-full">
              <FaEnvelope className="mr-2" /> zmineiko@gmail.com
            </p>
            <p className="text-xl text-text flex items-center justify-center bg-accent px-3 py-1 rounded-full">
              <FaLinkedin className="mr-2" /> <a href="https://www.linkedin.com/in/zak-mineiko-3b154b1a9/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
            </p>
            <p className="text-xl text-text flex items-center justify-center bg-accent px-3 py-1 rounded-full">
              <FaGithub className="mr-2" /> <a href="https://github.com/zakmin11" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;