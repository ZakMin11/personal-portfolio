const projects = [
    {
      title: "IoT Thermostat",
      type: ["Hardware", "Software", "Networking", "Group"],
      description: "A thermostat with mutliple probes that asynchronously displays real time temperature data that sends email alerts upon reaching a certain threshold.",
      detailedDescription: "An IoT thermostat with multiple probes that asynchronously displays real time temperature data that sends email alerts upon reaching a certain threshold. The device is powered by an ESP32 microcontroller and uses websockets to communicate with a web server. The web server is hosted on a Raspberry Pi and uses a nodeJS backend to send email alerts. The device is powered by a 5V power supply and uses a 3.3V regulator to power the ESP32. The device is also equipped with buttons to toggle sensors, a screen to display the temperature data, and a power switch. Please check out the lab report for a more detailed explanation of the project: https://teamadmin.io/",
      technologies: ["ESP32", "C++", "JavaScript", "websockets"],
      link: "",
      images: ['src/assets/projectAssets/thermostat/front.jpg', 'src/assets/projectAssets/thermostat/inside.JPG'],
      videoLink: ""
    },
    {
      title: "IR Receiver/Filter",
      type: ["Hardware", "Software", "Group"],
      description: "A safety system that combines analog circuit and digital design signal processing",
      detailedDescription: "During the first half of my Senior Design coursework at the University of Iowa, my senior design team and I developed a sophisticated safety system that combines analog circuit design with digital signal processing. The system utilizes an IR photodiode receiver (OP598A) optimized for 940nm wavelength detection, coupled with a multi-stage signal processing circuit. The design implements a non-inverting pre-amplifier with 9.2x gain, followed by a 2nd-order multi-feedback bandpass filter centered at 421Hz with a 42.1Hz bandwidth, effectively attenuating 92% of 120Hz noise. The processed signal interfaces with an ESP32 microcontroller through a voltage divider network, where a 6th-order Chebyshev digital filter provides additional signal conditioning. The system features real-time safety monitoring with automated text message alerts through IFTTT webhooks when beam interruption is detected, demonstrating my ability in analog circuit design, digital signal processing, and IoT integration. Please see our senior design report for a more detailed explanation of the project: https://teamadmin.io/",
      technologies: ["ESP32", "PCD Design", "Circuit Analysis", "Signal Processing", "C/C++", "Sample Hysteresis", "CAD"],
      link: "",
      images: ['src/assets/projectAssets/irReceiver/circuit.jpg','src/assets/projectAssets/irReceiver/pcb.png'],
      videoLink: ""
    },
    {
      title: "IPhone/remote controlled light switch",
      type: ["Hardware", "Software", "Group"],
      description: "Portable device that uses infrared signals to activite a light switch. Can be controlled via iPhone IR pulses",
      detailedDescription: "During my embedded systems coursework at the University of Iowa, Dawson Crowley and I developed a remote-controlled light switch automation system that allows users to control standard household light switches using any IR remote control. The project combines an Arduino Nano (ATMega328p) microcontroller with a KSOP4838 IR sensor and SG90 servo motor to create a non-destructive, easily installable solution. Using C programming, I implemented precise PWM control for the servo motor and robust IR signal processing that works reliably up to 20 feet away. The system features custom mounting hardware that attaches via Command Strips, making it an apartment-friendly solution that requires no permanent modifications. The device includes visual feedback through an LED indicator and is powered by a standard 9V battery. This project demonstrated my skills in embedded systems programming, signal processing, and mechanical design while solving a practical everyday problem.",
      technologies: ["ATMega328p", "Assembly C", "Hardware Design", "IoT"],
      link: "https://github.com/ZakMin11/IR-Sensing-Light-Switch",
      images: ['src/assets/projectAssets/IRSwitch/irswitch.png'],
      videoLink: ""
    },
    {
      title: "Robotic Camera Man",
      type: ["Hardware", "Software"],
      description: "A robot that follows and films subjects based on the color of their shirt",
      detailedDescription: "This system uses OpenCV to detect and track colored objects in real-time video feed. Based on the object's position, it sends commands to an Arduino-controlled servo motor to adjust the camera's position, creating a smooth tracking effect.",
      technologies: ["Arduino", "openCV", "Python", "Serial Communication"],
      link: "https://github.com/ZakMin11/Automatic-Camera-Man",
      images: ['src/assets/projectAssets/cambot/cambot.png'],
      videoLink: "https://www.youtube.com/embed/M_mp4P83bNM?si=phzcP0uIysS4JdgR"
    },
    {
      title: "Annoy Zak Bot",
      type: ["Networking", "Software"],
      description: "A website that allows users to send messages to play out loud to a speaker in my room in realtime. Utilizes a Rspberry Pi to host the website, Arduino to send synthesized and filtered messages to a speaker via bluetooth module for Arduino.",
      detailedDescription: "During the COVID-19 quarantine period, I developed AnnoyZakBot, a creative Node.js application that combines web technologies with text-to-speech functionality to create an interactive communication system. The project utilizes Node's HTTP server to host a responsive web interface where users can submit messages through a form. These messages are processed server-side using custom sanitization algorithms that handle URL encoding and special characters. The backend leverages the 'say' Node module to convert the processed text into speech, which is then played through connected speakers. The application features a custom-styled interface using the Billibong font and responsive CSS, complete with a nostalgic quarantine-themed design. The server implements POST request handling for message submission and includes character limit validation (100 characters) for optimal performance. This project showcases my abilities in full-stack development, including Node.js backend programming, web API implementation, real-time data processing, and user interface design, while also demonstrating creative problem-solving during remote communication challenges.",
      technologies: ["JavaScript", "Python", "websockets", "Raspberry Pi", "Arduino", "nodeJS"],
      link: "https://github.com/ZakMin11/AnnoyZakBot",
      images: [],
      videoLink: ""
    },
    {
      title: "Staring Contest Robot",
      type: ["Hardware", "Software"],
      description: "A robot that plays a staring contest with you, if you lose, you get shot with a nerf gun",
      detailedDescription: "This project combines Python-based face tracking with Arduino-controlled Nerf gun automation. The system watches the player's face through a webcam and waits for them to blink. When a blink is detected, it triggers the Arduino to activate the Nerf gun mechanism.",
      technologies: ["Arduino", "OpenCV", "Python", "Serial Communication"],
      link: "https://github.com/ZakMin11/Staring-Contest-Robot",
      images: [],
      videoLink: "https://www.youtube.com/embed/KwcwHzdf0r0"
    },
    {
      title: "Custom Electric Longboard battery pack",
      type: ["Hardware"],
      description: "A custom battery pack for an Evolve electric longboard that uses 18650 cells configured to existing battery management system (BMS).",
      technologies: ["Battery Design", "Circuit Analysis", "Voltage/Current Calculations", "BMS integration"],
      link: "",
      images: ["src/assets/projectAssets/customBattery/midSoder.jpg", "src/assets/projectAssets/customBattery/battery.JPG"],
      videoLink: "https://youtube.com/embed/wP0nA2YVpxA"
    },
    {
      title: "Ninja Cube",
      type: ["Software"],
      description: "A 3D third person parkour/shooter game. Using unique motion controls, players must dodge projectiles advancing through levels via parkour.",
      technologies: ["C#", "Unity"],
      link: "",
      images: ['src/assets/projectAssets/ninjaCube/ninjaCube.png', 'src/assets/projectAssets/ninjaCube/ninja2.png'],
      videoLink: ""
    },
    {
      title: "Datamosher",
      type: ["Software"],
      description: "A Python algorithm interfacing with ffmpeg library to manipulate video encoding producing glitch art",
      detailedDescription: "This project uses the ffmpeg library to duplicate P-frames in video encoding (specifically H.264 AVC) producing glitch art. The algorithm reads the video file and randomly selects frames to manipulate, creating a unique visual effect. The project is designed to be run from the command line and is easily customizable to create a variety of glitch art styles.",
      technologies: ["Python", "ffmpeg"],
      link: "https://github.com/ZakMin11/Datamosher/tree/main",
      images: [],
      videoLink: ""
    },
    {
      title: "Taxi Data Collection Automation",
      type: ["Software"],
      description: "A Python script that automates the collection of taxi data",
      detailedDescription: "This project uses the Pandas library to automate the collection of taxi data from thousands of images as a data collection campaign for Firefly. The script uses the OpenCV library to read the images and extract the data, which is then stored in a CSV file for further analysis saving hours of manual data entry.",
      technologies: ["Python", "Pandas", "Data Analysis"],
      link: "https://github.com/ZakMin11/Taxi-Data-Collection-Automation",
      images: [],
      videoLink: ""
    }
  ];
  export default projects;
