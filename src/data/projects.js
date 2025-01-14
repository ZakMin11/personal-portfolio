const projects = [
    {
      title: "IoT Thermostat",
      description: "A thermostat with mutliple probes that asynchronously displays real time temperature data that sends email alerts upon reaching a certain threshold.",
      technologies: ["ESP32", "C++", "JavaScript", "websockets"],
      link: "#",
      images: [],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    {
      title: "IPhone/remote controlled light switch",
      description: "Portable device that uses infrared signals to activite a light switch. Can be controlled via iPhone IR pulses",
      technologies: ["ATMega328p", "Assembly C", "Hardware Design", "IoT"],
      link: "#",
      images: [],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    {
      title: "Robotic Camera Man",
      description: "A robot that follows and films subjects based on the color of their shirt",
      technologies: ["Arduino", "openCV", "Python", "Serial Communication"],
      link: "#",
      images: ['src/assets/projectAssets/cambot/cambot.png'],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    {
      title: "Annoy Zak Bot",
      description: "A website that allows users to send messages to play out loud to a speaker in my room in realtime. Utilizes a Rspberry Pi to host the website, Arduino to send synthesized and filtered messages to a speaker via bluetooth module for Arduino.",
      technologies: ["JavaScript", "Python", "websockets", "Raspberry Pi", "Arduino", "nodeJS"],
      link: "#",
      images: ['https://github.com/ZakMin11/Taxi-Data-Collection-Automation'],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    {
      title: "Ninja Cube",
      description: "A 3D third person parkour/shooter game. Using unique motion controls, players must dodge projectiles advancing through levels via parkour.",
      technologies: ["C#", "Unity"],
      link: "#",
      images: ['src/assets/projectAssets/ninjaCube/ninjaCube.png'],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    {
      title: "Custom Electric Longboard battery pack",
      description: "A custom battery pack for an Evolve electric longboard that uses 18650 cells configured to existing battery management system (BMS).",
      technologies: ["Battery Design", "Circuit Analysis", "Voltage/Current Calculations", "BMS integration"],
      link: "https://youtube.com/shorts/wP0nA2YVpxA?feature=share",
      images: [],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    {
      title: "Datamosher",
      description: "A Python algorithm interfacing with ffmpeg library to manipulate video encoding producing glitch art",
      technologies: ["Python", "ffmpeg"],
      link: "#",
      images: [],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    
    {
      title: "Staring Contest Robot",
      description: "A robot that plays a staring contest with you, if you lose, you get shot with a nerf gun",
      technologies: ["Arduino", "OpenCV", "Python", "Serial Communication"],
      link: "https://youtube.com/shorts/KwcwHzdf0r0?feature=share",
      images: [],
      videoLink: "https://youtube.com/shorts/1J9Z9Z9Z9Z9?feature=share"
    },
    
    
    
    
    // Add more projects here
  ];
  export default projects;