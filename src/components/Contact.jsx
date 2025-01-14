import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center space-x-6">
            <a href="mailto:zak@example.com" className="text-text hover:text-accent">
              Email
            </a>
            <a href="https://github.com/zakmineiko" className="text-text hover:text-accent">
              GitHub
            </a>
            <a href="https://linkedin.com/in/zakmineiko" className="text-text hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 5px rgba(124, 58, 237, 0.3), 0 0 10px rgba(124, 58, 237, 0.3), 0 0 15px rgba(124, 58, 237, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Contact;