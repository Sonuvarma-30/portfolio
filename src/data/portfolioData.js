// =============================================
// PORTFOLIO DATA — Panasa Sonu
// Update GitHub and LinkedIn URLs below.
// =============================================

export const personalInfo = {
  name: "Panasa Sonu",
  title: "Computer Science & Cyber Security Student",
  tagline: "Building secure software at the intersection of Cyber Security and Software Development.",
  email: "panasasonu11@gmail.com",
  phone: "+91 7569150653",

  // TODO: Replace with your actual GitHub profile URL
  github: "https://github.com/",  // e.g. https://github.com/panasasonu

  // TODO: Replace with your actual LinkedIn profile URL
  linkedin: "https://linkedin.com/in/",  // e.g. https://linkedin.com/in/panasasonu

  // Resume — Google Drive public link (opens for viewing + download)
  resumeUrl: "https://drive.google.com/uc?export=download&id=1HLf3e4kUgAER2GrmVVhpjs0cUN5L3LtQ",
};

export const aboutText = [
  "I'm a B.Tech Computer Science and Engineering student specialising in Cyber Security at CVR College of Engineering, Hyderabad, with a current CGPA of 9.06/10.",
  "My focus lies at the intersection of cyber security and software development — building applications that are not only functional but also designed with security at their core. I have hands-on experience with encryption, secure communication, and network security concepts.",
  "I actively pursue practical learning through virtual internships and industry-recognised certifications, applying security principles to real-world scenarios and building solutions that prioritise confidentiality and data integrity.",
];

export const skills = [
  {
    category: "Programming",
    icon: "💻",
    items: ["Java", "Python"],
  },
  {
    category: "Web Development",
    icon: "🌐",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Frameworks",
    icon: "⚙️",
    items: ["React.js", "Node.js", "Express.js"],
  },
  {
    category: "Security & Tools",
    icon: "🛡️",
    items: ["GitHub", "Kali Linux", "Wireshark", "Nmap"],
  },
  {
    category: "Coursework",
    icon: "📚",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Secure Note-Making Application",
    date: "Jan 2025",
    description:
      "Developed a secure note-making application focused on data privacy and protected information storage. Implemented encryption techniques and password-based access control to prevent unauthorised access. Applied secure application design principles to ensure confidentiality and safe data handling.",
    highlights: [
      "Encryption-based data storage",
      "Password-based access control",
      "Secure application design principles",
    ],
    technologies: ["Java", "Encryption", "Password Security"],
    // TODO: Replace with your actual GitHub repository URL for this project
    githubUrl: "https://github.com/",  // e.g. https://github.com/panasasonu/secure-notes
    liveUrl: null, // Set to a URL string if you have a live demo, otherwise keep null
  },
  {
    id: 2,
    title: "Secure Chat Application",
    date: "Feb 2026",
    description:
      "Designed a secure real-time chat application emphasising confidential communication and user privacy. Implemented encryption-based messaging and authenticated user access for secure data exchange. Gained hands-on experience with secure communication protocols and application-level security.",
    highlights: [
      "End-to-end encryption messaging",
      "Authenticated user access",
      "Secure communication protocols",
    ],
    technologies: ["Node.js", "Express.js", "JavaScript", "Encryption"],
    // TODO: Replace with your actual GitHub repository URL for this project
    githubUrl: "https://github.com/",  // e.g. https://github.com/panasasonu/secure-chat
    liveUrl: null, // Set to a URL string if you have a live demo, otherwise keep null
  },
];

export const experience = [
  {
    id: 1,
    role: "PwC Launchpad Program – CEDA",
    company: "PwC, India",
    type: "Virtual Program",
    period: "Feb 2026 – Jul 2026",
    description:
      "Strengthened business and technology knowledge through structured learning and practical sessions. Acquired hands-on experience in Generative AI, Modern Data Systems, and solving real-world business challenges.",
    highlights: [
      "Generative AI applications in business",
      "Modern Data Systems",
      "Real-world business problem solving",
    ],
  },
];

export const timeline = [
  {
    id: 1,
    title: "Google Skill Boost – GEN AI Study Jams",
    org: "Google",
    role: "Trainee",
    period: "Sep 2024 – Oct 2024",
    color: "cyan",
  },
  {
    id: 2,
    title: "Cyber Security Virtual Internship",
    org: "AICTE & Palo Alto Networks",
    role: "Virtual Intern",
    period: "Apr 2025 – Jun 2025",
    color: "blue",
  },
  {
    id: 3,
    title: "Zero Trust Cloud Security Virtual Internship",
    org: "EduSkills (AICTE), supported by Zscaler",
    role: "Virtual Intern",
    period: "Oct 2025 – Dec 2025",
    color: "cyan",
  },
  {
    id: 4,
    title: "Linux Fundamentals – Red Hat (RH104)",
    org: "Red Hat",
    role: "Trainee",
    period: "Oct 2025 – Jan 2026",
    color: "blue",
  },
  {
    id: 5,
    title: "PwC Launchpad Program – CEDA",
    org: "PwC, India",
    role: "Virtual Intern",
    period: "Feb 2026 – Jul 2026",
    color: "cyan",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Zero Trust Cloud Security",
    issuer: "Zscaler",
    icon: "🔒",
    category: "Cloud Security",
  },
  {
    id: 2,
    title: "Cyber Security",
    issuer: "Palo Alto Networks",
    icon: "🛡️",
    category: "Cyber Security",
  },
  {
    id: 3,
    title: "Database Design and Programming with SQL",
    issuer: "Oracle Academy",
    icon: "🗄️",
    category: "Database",
  },
  {
    id: 4,
    title: "Generative AI Workshop",
    issuer: "CVR College of Engineering",
    icon: "🤖",
    category: "Artificial Intelligence",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering (Cyber Security)",
    institution: "CVR College of Engineering, Hyderabad",
    period: "Aug 2023 – May 2027",
    cgpa: "9.06 / 10",
    status: "Pursuing",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
