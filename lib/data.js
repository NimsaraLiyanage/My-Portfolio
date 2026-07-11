// Central content + configuration for the portfolio.
// Swap the accent to any of the options to re-theme the whole site.

export const ACCENT = "#A78BFA"; // options: #22D3EE, #A78BFA, #FB923C, #34D399

export const CONTACT = {
  email: "tharindanimsara457@gmail.com",
  phone: "+94 70 248 2457",
  location: "Polonnaruwa, Sri Lanka",
  github: "https://github.com/NimsaraLiyanage",
  linkedin: "https://www.linkedin.com/in/nimsaraliyanage/",
  resumeUrl:
    "https://drive.google.com/file/d/1VPOYwlW4iqNOmWxNwDEMdqft2bGH5b9H/view?usp=sharing",
};

export const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "SKILLS", href: "#skills" },
  { label: "JOURNEY", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];

export const EXPERTISE = [
  "Full Stack Development",
  "React & Java",
  "MySQL",
  "UI/UX Design",
  "ML / DL / AI",
  "Embedded Systems",
];

export const SKILLS = [
  { name: "HTML / CSS / JS", level: 92, pct: "92%" },
  { name: "React", level: 85, pct: "85%" },
  { name: "Java", level: 80, pct: "80%" },
  { name: "AI / ML / DL", level: 80, pct: "80%" },
  { name: "Git", level: 83, pct: "83%" },
  { name: "Problem Solving", level: 95, pct: "95%" },
  { name: "Communication", level: 90, pct: "90%" },
];

export const TIMELINE = [
  {
    period: "2022 — PRESENT",
    title: "B.Sc. (Eng) Hons — Computer Engineering",
    desc: "University of Jaffna. Final-year undergraduate specializing in Software Engineering, Artificial Intelligence, Machine Learning & Deep Learning.",
  },
  {
    period: "2023 — PRESENT",
    title: "Full-Stack Development",
    desc: "2+ years building production-grade web applications with React, Spring Boot & MySQL — from booking platforms to content management systems.",
  },
  {
    period: "2024 — PRESENT",
    title: "AI / ML Research Projects",
    desc: "Sinhala NLP (spelling & grammar correction with custom LSTMs), deep-learning plant disease detection, and biometric embedded systems.",
  },
];

export const PROJECTS = [
  {
    num: "01",
    cat: "AI / ML",
    title: "Sinhala Spelling & Grammar Checker",
    desc: "Multiple models for detecting and correcting Sinhala spelling and grammar errors — final combined model uses a custom LSTM with a Random Forest classifier.",
    img: "/images/1.jpg",
    tech: ["AI", "ML", "DL", "LSTM"],
    gh: "https://github.com/NimsaraLiyanage/Sinhala_spelling_corrector_and_grammar_checker.git",
  },
  {
    num: "02",
    cat: "FULLSTACK",
    title: "VenueVista — Lecture Hall Booking",
    desc: "A comprehensive lecture hall booking system for the university, built with React.js and Spring Boot on MySQL.",
    img: "/images/2.png",
    tech: ["React", "Spring Boot", "MySQL"],
    gh: "https://github.com/NimsaraLiyanage/VenueVista.git",
  },
  {
    num: "03",
    cat: "DEEP LEARNING",
    title: "Plant Disease Detection",
    desc: "VGG16 + ResNet50 detection system assisting early disease identification and better crop management.",
    img: "/images/3.jpeg",
    tech: ["VGG16", "ResNet50", "Deep Learning"],
    gh: "https://github.com/NimsaraLiyanage/Plant-Disease-Detection-Using-Deep-Learning.git",
  },
  {
    num: "04",
    cat: "FRONTEND",
    title: "Responsive React Blog Application",
    desc: "A responsive blog platform for creating, managing and sharing content — built on React Router 6 with a modern, user-centric design.",
    img: "/images/4.jpeg",
    tech: ["React", "JS", "CSS"],
    gh: "https://github.com/NimsaraLiyanage/Responsive-React-JS-Blog-Application-.git",
  },
  {
    num: "05",
    cat: "EMBEDDED",
    title: "Smart Fingerprint Attendance",
    desc: "Biometric attendance prototype using the AS608 fingerprint sensor and Arduino, paired with a React dashboard.",
    img: "/images/5.jpg",
    tech: ["Arduino", "AS608", "React"],
    gh: "https://github.com/NimsaraLiyanage/Smart-Attendance-System-Using-Fingerprint-Recognition.git",
  },
  {
    num: "06",
    cat: "BACKEND",
    title: "Uber Eats Database App",
    desc: "PHP backend project exploring CRUD operations, SQL indexing and the full family of SQL joins.",
    img: "/images/6.jpeg",
    tech: ["PHP", "SQL", "CSS"],
    gh: "https://github.com/NimsaraLiyanage/Uber-Eats-DatabaseApp.git",
  },
];
