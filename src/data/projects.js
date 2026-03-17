import dev from '../assets/projectAssets/nibbleMate/dev.png';
import threeD from '../assets/projectAssets/nibbleMate/3d.png';
import schem from '../assets/projectAssets/nibbleMate/schem.png';
import schema from '../assets/projectAssets/nibbleMate/schema.png';
import nibblemateGif from '../assets/projectAssets/nibbleMate/nibblematebuild.gif';
import doorMech from '../assets/projectAssets/nibbleMate/doorMech.gif';
import allView from '../assets/projectAssets/nibbleMate/allView.gif';
import editedDemo from '../assets/projectAssets/nibbleMate/editedDemo.gif';
import master from '../assets/projectAssets/mastermind/master.png';
import sisc from '../assets/projectAssets/sisc/SISC.png';
import car from '../assets/projectAssets/carMaintenence/car.gif';
import therm1 from '../assets/projectAssets/thermostat/front.jpg';
import therm2 from '../assets/projectAssets/thermostat/inside.JPG';
import ir1 from '../assets/projectAssets/irReceiver/circuit.jpg';
import ir2 from '../assets/projectAssets/irReceiver/pcb.png';
import lightS from '../assets/projectAssets/IRSwitch/irswitch.png';
import camMan from '../assets/projectAssets/cambot/cambot.png';
import LB1 from "../assets/projectAssets/customBattery/midSoder.jpg"; 
import LB2 from "../assets/projectAssets/customBattery/battery.JPG";
import NC1 from '../assets/projectAssets/ninjaCube/ninjaCube.png';
import NC2 from '../assets/projectAssets/ninjaCube/ninja2.png';

import proto2 from '../assets/projectAssets/BDPT/proto2.gif';
import gearbox from '../assets/projectAssets/BDPT/gearbox.jpg';
import proto3 from '../assets/projectAssets/BDPT/proto3.gif';
import prototrim from '../assets/projectAssets/BDPT/prototrim.gif';
import proto4 from '../assets/projectAssets/BDPT/proto4.jpg';
import proto4sofar from '../assets/projectAssets/BDPT/proto4sofar.jpg';

import cadnew from '../assets/projectAssets/laptopCooler/cadnew.png';
import nomac from '../assets/projectAssets/laptopCooler/nomac.jpg';
import sidemac from '../assets/projectAssets/laptopCooler/sidemac.jpg';
import withmac from '../assets/projectAssets/laptopCooler/withmac.jpg';
const projects = [
    {
      title: "nibbleMate",
      type: ["Hardware", "Software", "Networking", "Group"],
      description: "A smart, modular pet feeder for multi-pet households that uses RFID based pet recognition to automate portioned feeding, monitors food intake and pet weight in real time, and syncs data to a cross platform app that leverages AI to deliver personalized insights and recommendations for improving pet health.",
      detailedDescription: "As the lead developer and systems designer, I played a central role in creating a smart, modular automatic pet feeder for multi-pet households. I fully 3D modeled the mechanical design, developed the companion cross-platform web application using React Native and Expo, and selected a robust tech stack with Supabase for real-time database synchronization, authentication, and cloud storage. I architected and implemented the feeder’s hardware system, excluding the RFID reader, designing circuits that integrated load cells, a stepper motor driven auger, and a servo-controlled access door, all orchestrated by an ESP32 microcontroller. I also contributed to the backend architecture and implemented secure user authentication. The feeder identifies individual pets via RFID or microchips, dispenses personalized food portions, and records key metrics like weight and consumption. This data is analyzed and surfaced through the app, which leverages AI to provide users with personalized insights into their pets’ health and feeding behaviors.",
      technologies: ["ESP32", "C++", "React Native", "Expo", "Postgres/Supabase", "Fusion 360", "3D Printing", "Circuit Design", "IoT"],
      link: "",
      images: [allView, dev, schem, schema, nibblemateGif, doorMech, editedDemo],
      videoLink: "https://www.youtube.com/embed/r1YfOpTduMA?si=GI9WjTnuAIHjcpp5"
    },  
    {
      title: "Beer Dispensing Poker Table - In Progress",
      type: ["Hardware", "Software"],
      description: "A custom built poker table that integrates an automatic beer dispensing system.",
      detailedDescription: "What started as a joke turned into a nagging engineering problem I could not let go. A poker table that launches a beer to your seat at the press of a button. No more getting up. The constraints make it harder than it sounds: noise level, space optimization, beer can capacity, repeated mechanical reliability, a feeder and launching mechanism working in tandem, and ease of use. I started with a 5V motor and went deep — designed and built a 120:1 torque multiplying gearbox from scratch before concluding the motor itself was simply too weak for the load. Scrapped it. Moved to a 12V windshield wiper motor pulled from a scrap yard. Built the motor driver circuit to control it, then went through multiple design iterations on the launching mechanism before settling on a spring loaded linear slide driven by a partial rack and pinion. Tested and confirmed it launches a can roughly two feet in the air consistently. Currently modelling the feeder mechanism to inform how the launching assembly mounts. The full system is not finished, but the hard part works.",
      technologies: ["ESP32", "Mechanical Design", "Fusion 360", "3D Printing", "Circuit Design", "IoT"],
      link: "",
      images: [proto3, proto2, gearbox, prototrim, proto4, proto4sofar],
      videoLink: ""
    },  
    {
      title: "IR Receiver/Filter",
      type: ["Hardware", "Software", "Group"],
      description: "An infrared (IR) receiver system that integrates analog filtering for noise suppression with digital signal processing for improved reliability under ambient interference.",
      detailedDescription: "During the first half of my Senior Design coursework at the University of Iowa, my senior design team and I developed a sophisticated safety system that combines analog circuit design with digital signal processing. The system utilizes an IR photodiode receiver (OP598A) optimized for 940nm wavelength detection, coupled with a multi-stage signal processing circuit. The design implements a non-inverting pre-amplifier with 9.2x gain, followed by a 2nd-order multi-feedback bandpass filter centered at 421Hz with a 42.1Hz bandwidth, effectively attenuating 92% of 120Hz noise. The processed signal interfaces with an ESP32 microcontroller through a voltage divider network, where a 6th-order Chebyshev digital filter provides additional signal conditioning. The system features real-time safety monitoring with automated text message alerts through IFTTT webhooks when beam interruption is detected, demonstrating my ability in analog circuit design, digital signal processing, and IoT integration. Please see our senior design report for a more detailed explanation of the project: https://teamadmin.io/",
      technologies: ["ESP32", "PCD Design", "Circuit Analysis", "Signal Processing", "C/C++", "Sample Hysteresis", "CAD"],
      link: "",
      images: [ir1, ir2],
      videoLink: ""
    },
    {
      title: "SISC Computer - Verilog CPU",
      type: ["Hardware", "Software"],
      description: "Designed and implemented a 32-bit RISC style processor using Verilog, complete with custom control logic, instruction and data memory, and support for arithmetic, branching, and memory operations.",
      detailedDescription: "This project involved building a 32-bit Simple Instruction Set Computer (SISC) from the ground up in Verilog as part of a computer architecture course. I implemented the processor’s datapath and designed the control unit as a finite state machine to execute arithmetic, logical, branch, and memory instructions. The processor supported instruction fetch, decode, and execute stages, along with custom branching logic and program counter management. I extended the architecture with instruction and data memory modules and integrated full load/store functionality. To validate the design, I wrote two complete machine language programs: an integer bubble sort and a 64 bit multiplier, all executed entirely on the simulated processor using ModelSim. The project emphasized low level hardware design, synchronization, and system level integration across the datapath and control flow.",
      technologies: ["HDL", "Verilog", "ModelSim", "FSM Control", "Custom RISC Architecture"],
      link: "",
      images: [sisc],
      videoLink: ""
    },
    {
      title: "Custom Electric Longboard battery pack",
      type: ["Hardware"],
      description: "A custom battery pack for an Evolve electric longboard that uses 18650 cells configured to existing battery management system (BMS).",
      detailedDescription: "The stock battery was the bottleneck. I designed and built a replacement 10s2p pack from 18650 lithium ion cells, spot welded the nickel strips myself, and integrated it with the existing BMS. The pack outputs 135 amps and fit within the original enclosure. Results were immediate: range doubled, top speed increased from 20 to 25 mph. The board can now run a full charge on the fastest mode further than the old pack on eco mode. Building this forced me to get serious about BMS integration, proper wire management, and insulation. One mistake with lithium cells at this current output is a fire. It has run without issue for years.",
      technologies: ["Battery Design", "Circuit Analysis", "Voltage/Current Calculations", "BMS integration"],
      link: "",
      images: [LB2,LB1],
      videoLink: "https://youtube.com/embed/wP0nA2YVpxA"
    },
    {
      title: "Car Repairs",
      type: ["Hardware"],
      description: "If I can fix it, I do. Six years of general maintenance and repairs on 2003 Toyota Solara.",
      detailedDescription: "Kept a 2003 Toyota Solara running for six years. I do not like bringing my car to the mechanic if I have the time to fix it myself. Diagnosed and repaired a faulty alternator, bad battery, starter motor, coolant leak, and power steering leak. After hitting black ice and curbing the front passenger wheel, I replaced the control arm and tie rod myself. Additional work includes front and rear brake and rotor replacements, serpentine belt, radiator, and custom speaker install.",
      technologies: ["Automotive Repair", "Diagnostics", "Maintenance", "Mechanical Systems"],
      link: "",
      images: [car],
      videoLink: ""
    },
    {
      title: "Custom MacBook Cooler - In Progress",
      type: ["Hardware"],
      description: "Built a custom laptop cooling dock in 45 minutes instead of buying one. It looks terrible and works perfectly.",
      detailedDescription: "Summer 2023, MacBook Pro thermal throttling mid-Minecraft session. Instead of waiting two days and spending twenty dollars on a cooling pad, I built one in 45 minutes from two PC fans, a power adapter, and a switch. Positioned the fans directly under the CPU and GPU. Went from 30-60 FPS to a steady 200+ FPS — over 3x performance improvement. I have used it every day since. The prototype is ugly. I am currently redesigning it: rubber mounts for vibration dampening, tighter form factor, and actual aesthetics. The first version solved the problem. The second version will solve it properly.",
      technologies: ["Hardware", "Mechanical Design", "3D Printing", "Cooling Solutions"],
      link: "",
      images: [nomac, sidemac, withmac, cadnew],
      videoLink: ""
    },
    {
      title: "Mastermind",
      type: ["Hardware", "Software", "Networking", "Group"],
      description: "An AI-powered, IoT-based poker assistant that uses smart glasses, real-time object detection, and a mobile app to provide strategic gameplay advice to new players.",
      detailedDescription: "Mastermind is a real time intelligent poker assistant that uses a wearable Raspberry Pi camera system embedded in 3D printed glasses to identify playing cards during live gameplay. The device streams video to a FastAPI inference server hosted on Google Cloud Platform, where a fine tuned YOLOv8 model detects the cards in view. These card values are then stored and synchronized using Firebase’s real time database and Firestore services. I developed the mobile application using React Native and Expo, building out the frontend layout and enabling real time interaction with the backend. The app allows users to view detected cards and receive poker strategy advice at each game stage (flop, turn, river), which is generated using structured queries to OpenAI's ChatGPT3.5 Turbo API. I also contributed to the project’s backend architecture by helping design the data flow between the Pi, inference server, Firebase, and app ensuring a responsive and secure experience through proper use of Firebase Authentication and cloud-based callbacks. This system showcases seamless integration between embedded vision, AI inference, real time data pipelines, and cross-platform app development, all structured to deliver actionable poker advice in an intuitive user interface.",
      technologies: ["Machine learning", "YOLOv8", "Raspbery Pi", "Roboflow", "React Native", "Expo", "GCP", "FastAPI", "Websockets", "Firebase", "IoT"],
      link: "",
      images: [master],
      videoLink: "https://www.youtube.com/embed/NuvCnjqJPv8"
    },  
    {
      title: "IoT Thermostat",
      type: ["Hardware", "Software", "Networking", "Group"],
      description: "A thermostat with mutliple probes that asynchronously displays real time temperature data that sends email alerts upon reaching a certain threshold.",
      detailedDescription: "An IoT thermostat with multiple probes that asynchronously displays real time temperature data that sends email alerts upon reaching a certain threshold. The device is powered by an ESP32 microcontroller and uses websockets to communicate with a web server. The web server is hosted on a Raspberry Pi and uses a nodeJS backend to send email alerts. The device is powered by a 5V power supply and uses a 3.3V regulator to power the ESP32. The device is also equipped with buttons to toggle sensors, a screen to display the temperature data, and a power switch. Please check out the lab report for a more detailed explanation of the project: https://teamadmin.io/",
      technologies: ["ESP32", "C++", "JavaScript", "websockets"],
      link: "",
      images: [therm1, therm2],
      videoLink: ""
    },
    {
      title: "IPhone/remote controlled light switch",
      type: ["Hardware", "Software", "Group"],
      description: "Portable device that allows users to control their lightswitches using any IR remote control or iPhone.",
      detailedDescription: "During my embedded systems coursework at the University of Iowa, Dawson Crowley and I developed a remote-controlled light switch automation system that allows users to control standard household light switches using any IR remote control. The project combines an Arduino Nano (ATMega328p) microcontroller with a KSOP4838 IR sensor and SG90 servo motor to create a non-destructive, easily installable solution. Using C programming, I implemented precise PWM control for the servo motor and robust IR signal processing that works reliably up to 20 feet away. The system features custom mounting hardware that attaches via Command Strips, making it an apartment-friendly solution that requires no permanent modifications. The device includes visual feedback through an LED indicator and is powered by a standard 9V battery. This project demonstrated my skills in embedded systems programming, signal processing, and mechanical design while solving a practical everyday problem.",
      technologies: ["ATMega328p", "Assembly C", "Hardware Design", "IoT"],
      link: "https://github.com/ZakMin11/IR-Sensing-Light-Switch",
      images: [lightS],
      videoLink: ""
    },
    {
      title: "Robotic Camera Man",
      type: ["Hardware", "Software"],
      description: "A robot that follows and films subjects based on the color of their shirt",
      detailedDescription: "This system uses OpenCV to detect and track colored objects in real-time video feed. Based on the object's position, it sends commands to an Arduino-controlled servo motor to adjust the camera's position, creating a smooth tracking effect.",
      technologies: ["Arduino", "openCV", "Python", "Serial Communication"],
      link: "https://github.com/ZakMin11/Automatic-Camera-Man",
      images: [camMan],
      videoLink: "https://www.youtube.com/embed/M_mp4P83bNM?si=phzcP0uIysS4JdgR"
    },
    {
      title: "Annoy Zak Bot",
      type: ["Networking", "Software"],
      description: "A website that allows users to send messages to play out loud to a speaker in my room in realtime. Utilizes a Rspberry Pi to host the website, Arduino to send synthesized and filtered messages to a speaker via bluetooth module for Arduino.",
      detailedDescription: "During the COVID-19 quarantine period, I developed AnnoyZakBot, a creative Node.js application that combines web technologies with text-to-speech functionality to create an interactive communication system. The project utilizes Node's HTTP server to host a responsive web interface where users can submit messages through a form. These messages are processed server-side using custom sanitization algorithms that handle URL encoding and special characters. The backend leverages the 'say' Node module to convert the processed text into speech, which is then played through connected speakers. The application features a custom-styled interface using the Billibong font and responsive CSS, complete with a nostalgic quarantine-themed design. The server implements POST request handling for message submission and includes character limit validation (100 characters) for optimal performance. This project showcases my abilities in full-stack development, including Node.js backend programming, web API implementation, real-time data processing, and user interface design, while also demonstrating creative problem-solving during remote communication challenges.",
      technologies: ["JavaScript", "Python", "Websockets", "Raspberry Pi", "Arduino", "nodeJS"],
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
      title: "Ninja Cube",
      type: ["Software"],
      description: "A 3D third person parkour/shooter game. Using unique motion controls, players must dodge projectiles advancing through levels via parkour.",
      detailedDescription: "Project from one week coding competition at the end of Illinois Institute of Technology Summer Coding Camp which finished as the runner up. The game is a 3D third-person parkour/shooter game. Using unique motion controls, players must dodge projectiles while advancing through levels via parkour. The game was developed in Unity using C# and features a variety of levels, each with its own unique challenges and obstacles. Each level was designed in Blender. The game also includes a scoring system that rewards players for completing levels quickly and efficiently.",
      technologies: ["C#", "Unity", "Blender"],
      link: "",
      images: [NC1, NC2],
      videoLink: ""
    },
    
  ];
  export default projects;
