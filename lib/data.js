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
  { label: "EXTRA", href: "#extra" },
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

// Extra-curricular achievements — rendered as cards. `img` is optional;
// if the file is missing the card falls back to a gradient + emoji tile.
export const EXTRACURRICULAR = [
  {
    cat: "HACKATHON",
    icon: "🏆",
    title: "YarlXtreme 2024 Hackathon",
    meta: "2nd Runner-Up",
    desc: "Secured 2nd runner-up at the YarlXtreme 2024 hackathon.",
    img: "/images/Yarl%20Extream%20(2).jfif",
  },
  {
    cat: "HACKATHON",
    icon: "💻",
    title: "Code Storm 2.0 — 2024",
    meta: "5th Place",
    desc: "Placed 5th at the Code Storm 2.0 2024 hackathon.",
    img: "/images/code%20storm.jfif",
  },
  {
    cat: "EDITORIAL",
    icon: "✍️",
    title: "Senior Editor — IEEE Communications Society",
    meta: "Jun 2024 – Nov 2024",
    desc: "Led editorial work and publications for the IEEE Communications Society student chapter.",
    img: "/images/ieee-comsoc.jpg",
  },
  {
    cat: "LEADERSHIP",
    icon: "🌐",
    title: "Web Master — Engineering Student Union",
    meta: "Aug 2023 – Aug 2024",
    desc: "Managed and maintained the web presence of the Engineering Student Union, University of Jaffna.",
    img: "/images/Webmaster.jfif",
  },
  {
    cat: "EDITORIAL",
    icon: "✍️",
    title: "Editor — IEEE RAS Student Chapter, UoJ",
    meta: "Jan 2022 – Dec 2023",
    desc: "Editor for the IEEE Robotics & Automation Society student chapter at the University of Jaffna.",
    img: "/images/IEEE%20RAS.jpg",
  },
  {
    cat: "VOLUNTEERING",
    icon: "🤝",
    title: "Student Organizing Committee — ICE 2024",
    meta: "2nd Int'l Conference on Engineering",
    desc: "Member of the Student Organizing Committee for the 2nd International Conference on Engineering, 2024.",
    img: "/images/ICE%202024.jfif",
  },
  {
    cat: "CHESS",
    icon: "♟️",
    title: "FIDE Rated Chess Player",
    meta: "Peak ELO 1624",
    desc: "FIDE rated player with a peak ELO of 1624. Qualified District Arbiter & National Arbiter.",
    img: "/images/Chess%20peak%20rating%201624.jpg",
    fit: "contain",
  },
  {
    cat: "CHESS",
    icon: "🏆",
    title: "Inter-Faculty Chess Champion",
    meta: "2022 – 2024",
    desc: "Chess player for the faculty team — 1st runner-up (2022) and back-to-back inter-faculty champions (2023 & 2024).",
    img: "/images/Interfaculty.jpeg",
    fit: "contain",
  },
  {
    cat: "CHESS",
    icon: "🥇",
    title: "National 'B' Chess Champion",
    meta: "2018 & 2024",
    desc: "National 'B' champion representing the North Western Province (2018) and North Central Province (2024).",
    img: "/images/Interclub%202024.jpeg",
  },
  {
    cat: "SPORTS",
    icon: "♟️",
    title: "National Sports Festival — Chess",
    meta: "NCP Team · 2018 & 2024",
    desc: "Champion at the provincial selection and represented the North Central Province team at the 2018 and 2024 National Sports Festivals.",
    img: "/images/National%20Sport%20Festival.jpg",
  },
];

// Reverse-chronological — latest first.
export const WORK_EXPERIENCE = [
  {
    period: "2026 JAN — PRESENT",
    title: "Associate Software Engineer — Aagee AI",
    desc: "Aagee AI (Singapore). Building scalable mobile apps with Flutter and serverless backends on AWS & Azure — working across Agentic AI, LLMs and RAG.",
    logo: "/images/aagee_ai_logo.jfif",
  },
  {
    period: "2025 FEB — 2025 AUG",
    title: "Software Engineer Intern — FocalID Technologies",
    desc: "Mobile & AI implementations, full-stack development and backend architecture.",
    logo: "/images/FocalID.jfif",
  },
];

export const EDUCATION = [
  {
    period: "2021 — 2025",
    title: "BSc. Eng (Hons) - Computer Engineering",
    desc: "University of Jaffna. Graduated in Computer Engineering, specializing in Software Engineering, Artificial Intelligence, Machine Learning & Deep Learning.",
    logo: "/images/Uoj.png",
  },
  {
    period: "2015 — 2018",
    title: "G.C.E. Advanced Level — PL/Royal College",
    desc: "Physical Science stream (Combined Mathematics, Physics & Chemistry). Improved district ranking across three examination attempts: 119 → 30 → 3.",
    logo: "/images/Rcc.jpeg",
  },
  {
    period: "2015",
    title: "G.C.E. Ordinary Level — PL/Royal College",
    desc: "Completed the G.C.E. Ordinary Level with results of 8 A's and 1 B.",
    logo: "/images/Rcc.jpeg",
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
