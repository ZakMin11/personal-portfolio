import alleyImage from "../assets/work/mechanic.JPG";

const experiences = [
  {
    company: "FlipWyz",
    position: "Independent Software Contractor - Full Stack Developer",
    duration: "Aug 2025 - Current",
    description: [
      "Architecting and developing a production ready cross-platform marketplace web app using React Native, Expo, and Supabase",
      "Optimizing PostgreSQL + PostGIS queries to improve geospatial query performance across large datasets",
      "Integrating Stripe for multi-party split payments, transactional integrity, and real-time checkout synchronization",
      "Designing and implementing structured data flows and API integrations for listings, payments, address validation, and logistics — ensuring consistency and referential integrity across services",
      "Implementing modular and efficient component abstractions to reduce render overhead and improve UI responsiveness",
      "Applying analytical and data-driven problem solving to identify system bottlenecks and drive measurable performance improvements"
    ]
  },
  {
    company: "Outsider",
    position: "Full Stack Developer",
    duration: "Dec 2024 - June 2025",
    description: [
      "Spearheaded development of a mobile social media app using React Native, Expo, Tailwind CSS, and Supabase, delivering a functional MVP within 6 weeks",
      "Led a 3-person development team by establishing sprint-based workflows and managing task delegation through weekly planning meetings, improving development efficiency by 40%",
      "Established standardized development workflows to improve team consistency and code quality, resulting in fewer merge conflicts and smoother sprint cycles",
      "Integrated Supabase for user authentication, account management, and storage, enabling real-time data synchronization and a simplified backend architecture"
    ]
  },
  {
    company: "Firefly",
    position: "Engineering Technician - Summer Intern",
    duration: "Mar 2022 – Aug 2022",
    description: [
      "Diagnosed and resolved firmware and hardware failures in deployed digital billboard systems on taxis and rideshare vehicles, reducing defect recurrence through root cause analysis and corrective action",
      "Transformed Chicago branch from the lowest to highest performing location by implementing structured diagnostic and repair methodologies across the hardware fleet",
      "Designed and built an automated data collection pipeline using Python, OpenCV, and Matplotlib to eliminate manual data entry and surface actionable production metrics",
      "Engineered and standardized repair workflows, increasing daily unit throughput by 20% and improving test yield consistency across technicians",
      "Participated in Agile development processes through weekly stand-ups, contributing to cross-functional team coordination with engineers and production personnel"
    ]
  },
  {
    company: "Custom Craft Builders",
    position: "Web Developer / Electrician's Assistant",
    duration: "May 2020 – May 2023",
    description: [
      "Led installation teams for low-voltage electrical cable systems across commercial job sites, including coaxial and Ethernet network infrastructure",
      "Interpreted electrical diagrams and wiring specifications to plan and execute code-compliant installations, identifying producibility risks before work began",
      "Coordinated with project leads across multiple sites to schedule and execute multi-site installations efficiently",
      "Developed, deployed, and maintained the company website using HTML, CSS, JavaScript, and Bootstrap 5",
      "Configured and managed an AWS EC2 instance hosting the company website, ensuring high availability and performance"
    ]
  },
  {
    company: "The Alley",
    position: "Lead Bowling Alley Mechanic",
    duration: "Mar 2020 – Mar 2022",
    description: [
      "Performed preventative maintenance and diagnostic troubleshooting on complex bowling lane machinery",
      "Ensured correct operation of pin cycle mechanisms, including cleaning and tensioning pulleys and replacing worn gears",
      "Documented and ordered replacement components to ensure timely repairs and minimal operational downtime",
      "Mastered mechanical maintenance of large-scale complex machinery while consistently executing proper safety measures"
    ],
    images: [
      {
        alt: "Bowling Alley Mechanic",
        src: alleyImage
      }
    ]
  }
];

export default experiences;