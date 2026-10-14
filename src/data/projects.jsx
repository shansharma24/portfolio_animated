import { BG_IMG } from "../constants/backgrounds";

import floydSchoolImg from "../assets/images/projects/floydschool.jpg";
import smartKrishiImg from "../assets/images/projects/smartkrishi.jpg";
import agriVisionImg from "../assets/images/projects/agrivision.jpg";

export const projects = [
  {
    name: "Floyd School LMS",
    subtitle: "Full Stack MERN Ed-Tech Platform",
    description:
      "Architected a scalable multi-portal learning ecosystem (Student, Mentor, Admin) with JWT-based role access control, Razorpay payments, Socket.IO real-time classroom communication, centralized admin management, and an integrated AI study assistant.",
    bg: BG_IMG.bg_1,
    img: floydSchoolImg,
    link: "https://www.floydschool.in",
    year: 2026,
    tools: [
      "MERN",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Razorpay",
      "JWT",
      "AI",
      "REST APIs",
    ],
    inactive: false,
    macOverlay: true,
  },
  {
    name: "Smart Krishi",
    subtitle: "AI + IoT Agriculture Platform (Pre-incubated at IIT Delhi)",
    description:
      "Connected real-time sensor field telemetry with ML-driven insights (crop recommendations, fertilizer guidance, automated irrigation triggers) into an intuitive, high-performance dashboard interface for modern farmers.",
    bg: BG_IMG.bg_2,
    img: smartKrishiImg,
    link: "https://drive.google.com/drive/folders/1FBXlIYlyKzErJLGw7y2PMXkswN663k4B?usp=sharing",
    year: 2026,
    tools: [
      "AI / ML",
      "IoT",
      "React",
      "Node.js",
      "Python",
      "Sensors",
      "Telemetry",
      "Dashboard",
    ],
    inactive: false,
    macOverlay: true,
  },
  {
    name: "AgriVision",
    subtitle: "AI & Computer Vision Crop Diagnosis Platform",
    description:
      "Engineered a computer vision platform analyzing drone and field camera feeds with deep learning models to perform automated plant disease detection, leaf health scoring, and precision crop analytics.",
    bg: BG_IMG.bg_3,
    img: agriVisionImg,
    link: "https://github.com/shansharma24/AgriVision",
    year: 2026,
    tools: [
      "Computer Vision",
      "AI",
      "Deep Learning",
      "React",
      "JavaScript",
      "Python",
      "Analytics",
    ],
    inactive: false,
    macOverlay: true,
  },
];
