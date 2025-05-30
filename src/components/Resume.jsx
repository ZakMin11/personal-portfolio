// filepath: /Users/zakmineiko/school/personalWebsite/zakPortfolio/src/components/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <div className="flex justify-center mt-8">
      <iframe
        src="src/assets/resume/2025SpringResumeApplicatioEng.pdf"
        width="100%"
        height="600px"
        className="border-0"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;