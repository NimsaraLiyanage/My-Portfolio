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
  { label: "JOURNEY", href: "#journey" },
  { label: "WORK", href: "#work" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export const EXPERTISE = [
  "AWS",
  "Azure",
  "Docker",
  "Mobile Apps (Android / iOS)",
  "Agentic AI",
  "LLM / RAG",
  "ML / DL / AI",
  "Computer Vision",
  "MySQL / PostgreSQL",
  "Embedded Systems",
  "Full-Stack Engineering",
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

// Reverse-chronological — latest first.
export const TIMELINE = [
  {
    period: "2026 JAN — PRESENT",
    title: "Associate Software Engineer — Aagee AI",
    desc: "Aagee AI (Singapore). Building scalable mobile apps with Flutter and serverless backends on AWS & Azure — working across Agentic AI, LLMs and RAG.",
  },
  {
    period: "2025 FEB — 2025 AUG",
    title: "Software Engineer Intern — FocalID Technologies",
    desc: "Mobile & AI implementations, full-stack development and backend architecture.",
  },
  {
    period: "2021 — 2025",
    title: "B.Sc. (Eng) Hons — Computer Engineering",
    desc: "University of Jaffna. Graduated in Computer Engineering, specializing in Software Engineering, Artificial Intelligence, Machine Learning & Deep Learning.",
  },
  {
    period: "2015 — 2018",
    title: "G.C.E. Advanced Level — PL/Royal College",
    desc: "Physical Science stream (Combined Mathematics, Physics & Chemistry). Improved district ranking across three examination attempts: 119 → 30 → 3.",
  },
  {
    period: "2015",
    title: "G.C.E. Ordinary Level — PL/Royal College",
    desc: "Completed the G.C.E. Ordinary Level with results of 8 A's and 1 B.",
  },
];

// Newest projects go first — add new entries to the top of this list.
export const PROJECTS = [
  {
    num: "01",
    cat: "MOBILE APPLICATION | AWS SERVERLESS ARCHITECTURE",
    title: "AssignME — Task Assignment & Management App",
    desc: "A high-performance task management and assignment app built with Flutter and Riverpod on a secure serverless AWS backend — Cognito auth, Lambda, API Gateway and DynamoDB, with automated anonymous-to-authenticated device tracking telemetry.",
    img: "/images/10.png",
    tech: ["Flutter", "Riverpod", "AWS Cognito", "Lambda", "DynamoDB"],
    gh: "https://github.com/NimsaraLiyanage/AssignME",
  },
  {
    num: "02",
    cat: "MOBILE APPLICATION | AWS SERVERLESS ARCHITECTURE",
    title: "AWS FCM Push-Notification Reminder App",
    desc: "Event-driven reminder & push-notification system — Flutter frontend on a fully serverless AWS backend: API Gateway, Lambda, EventBridge Scheduler, DynamoDB and SNS delivering FCM push notifications.",
    img: "/images/9.png",
    tech: ["Flutter", "AWS Lambda", "EventBridge", "DynamoDB", "FCM"],
    gh: "https://github.com/NimsaraLiyanage/AWS-FCM-Push-Notification-Based-Reminder-App",
  },
  {
    num: "03",
    cat: "COMPUTER VISION",
    title: "Face Mask Detection System",
    desc: "Real-time computer vision system that detects whether people are wearing face masks, built with OpenCV and Python.",
    img: "/images/7.jpeg",
    tech: ["OpenCV", "Python", "Computer Vision"],
    gh: "https://github.com/NimsaraLiyanage/Face-mask-detection-system",
  },
  {
    num: "04",
    cat: "AI / Machine Learning",
    title: "Sinhala Spelling & Grammar Checker",
    desc: "Multiple models for detecting and correcting Sinhala spelling and grammar errors — final combined model uses a custom LSTM with a Random Forest classifier.",
    img: "/images/1.jpg",
    tech: ["AI", "ML", "DL", "LSTM"],
    gh: "https://github.com/NimsaraLiyanage/Sinhala_spelling_corrector_and_grammar_checker.git",
  },
  {
    num: "05",
    cat: "FULLSTACK",
    title: "VenueVista — Lecture Hall Booking System",
    desc: "A comprehensive lecture hall booking system for the university, built with React.js and Spring Boot on MySQL.",
    img: "/images/2.png",
    tech: ["React", "Spring Boot", "MySQL"],
    gh: "https://github.com/NimsaraLiyanage/VenueVista.git",
  },
  {
    num: "06",
    cat: "DEEP LEARNING",
    title: "Plant Disease Detection System",
    desc: "VGG16 + ResNet50 detection system assisting early disease identification and better crop management.",
    img: "/images/3.jpeg",
    tech: ["VGG16", "ResNet50", "Deep Learning"],
    gh: "https://github.com/NimsaraLiyanage/Plant-Disease-Detection-Using-Deep-Learning.git",
  },
  {
    num: "07",
    cat: "FRONTEND",
    title: "Responsive React Blog Application",
    desc: "A responsive blog platform for creating, managing and sharing content — built on React Router 6 with a modern, user-centric design.",
    img: "/images/4.jpeg",
    tech: ["React", "JS", "CSS"],
    gh: "https://github.com/NimsaraLiyanage/Responsive-React-JS-Blog-Application-.git",
  },
  {
    num: "08",
    cat: "EMBEDDED",
    title: "Smart Fingerprint Attendance System",
    desc: "Biometric attendance prototype using the AS608 fingerprint sensor and Arduino, paired with a React dashboard.",
    img: "/images/5.jpg",
    tech: ["Arduino", "AS608", "React"],
    gh: "https://github.com/NimsaraLiyanage/Smart-Attendance-System-Using-Fingerprint-Recognition.git",
  },
  {
    num: "09",
    cat: "NETWORKING",
    title: "University Campus Network Design",
    desc: "Complete campus network with VLAN segmentation, subnetting & CIDR IP optimization, inter-VLAN routing and secured Wi-Fi — simulated end-to-end in Cisco Packet Tracer.",
    img: "/images/8.jpg",
    tech: ["Cisco Packet Tracer", "VLANs", "Subnetting"],
    gh: "https://www.linkedin.com/in/nimsaraliyanage/details/projects/",
    linkType: "linkedin",
  },
  {
    num: "10",
    cat: "BACKEND",
    title: "Uber Eats Database App",
    desc: "PHP backend project exploring CRUD operations, SQL indexing and the full family of SQL joins.",
    img: "/images/6.png",
    tech: ["PHP", "SQL", "CSS"],
    gh: "https://github.com/NimsaraLiyanage/Uber-Eats-DatabaseApp.git",
  },
];
