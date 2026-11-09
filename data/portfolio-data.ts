export interface Project {
  id: string;
  title: string;
  category: "AI & Systems" | "Web & Full Stack" | "Algorithms";
  badge: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score?: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  score?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Abhijay L G",
    role: "Software Developer & AI Solutions Engineer",
    headline: "Building High-Performance Real-Time Systems, Multimodal AI & Scalable Full-Stack Web Applications",
    bio: "Computer Science specialist with hands-on experience spanning thread-safe systems concurrency in Java 21, deep learning computer vision with ONNX/OpenCV, and modern full-stack engineering with Next.js, React, Node.js, and Python. Driven by solving core engineering bottlenecks and delivering production-ready, mission-critical software.",
    location: "Thiruvananthapuram, Kerala, India",
    email: "abhijaylg09@gmail.com",
    phone: "+91 7736086163",
    github: "https://github.com/abhijaylg09",
    linkedin: "https://www.linkedin.com/in/abhijay-l-g-a38ba5324",
    portfolioUrl: "https://abhijays-portfolio.vercel.app",
    resumeUrl: "#contact",
    status: "Open to Software Engineer & AI Developer Roles",
  },

  metrics: [
    {
      value: "60 FPS",
      label: "Real-Time Perception HUD",
      subtext: "Java 21 LTS & ONNX/OpenCV multithreading without GIL stalls",
    },
    {
      value: "Sub-ms",
      label: "In-Browser Telemetry",
      subtext: "Big-O runtime profiling & sandboxed code execution in InterviewForge",
    },
    {
      value: "20+",
      label: "Automated Workflows",
      subtext: "Multi-tool task execution via LangChain & agentic reasoning pipelines",
    },
    {
      value: "95%",
      label: "Python/Django Certification",
      subtext: "380/400 top tier score in NSDC & Skill India enterprise program",
    },
  ],

  projects: [
    {
      id: "project-nexus",
      title: "Project N.E.X.U.S — Multimodal AI Assistant",
      category: "AI & Systems",
      badge: "Flagship Systems Architecture",
      featured: true,
      problem:
        "Real-time desktop AI assistants suffer from Python GIL lockups and high-latency computer vision pipelines, causing UI stutter and laggy voice interaction.",
      solution:
        "Architected a decoupled, high-performance architecture: engineered a thread-safe Java 21 LTS central orchestration EventBus that offloaded heavy ONNX/OpenCV perception workloads (FERPlus emotion & gesture detection) to sustain a fluid 60 FPS JavaFX HUD. Integrated LangChain reasoning pipelines to automate 20+ desktop tasks.",
      technologies: [
        "Java 21 LTS",
        "Python",
        "OpenCV",
        "ONNX Runtime",
        "FERPlus",
        "LangChain",
        "JavaFX",
        "Vosk STT",
        "Piper TTS",
      ],
      highlights: [
        "Thread-safe Java 21 LTS EventBus bypassing Python GIL locks",
        "ONNX Runtime perception core executing real-time FERPlus model",
        "Sustained 60 FPS JavaFX HUD with live telemetry",
        "Integrated 20+ tool automation workflows via LangChain",
      ],
      githubUrl: "https://github.com/abhijaylg09",
    },
    {
      id: "interviewforge",
      title: "InterviewForge — FAANG Interview Simulator",
      category: "Algorithms",
      badge: "Live Interactive Tool",
      featured: true,
      problem:
        "Engineering candidates lack realistic interview environments that provide instant asymptotic algorithmic complexity analysis and sandboxed runtime telemetry.",
      solution:
        "Engineered an in-browser technical interview platform featuring sandboxed code execution, real-time Big-O asymptotic analysis, sub-millisecond execution metrics, and dynamic AI evaluation for code quality and algorithmic optimality.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Sandboxed Execution",
        "AI Evaluation API",
      ],
      highlights: [
        "Real-time Big-O asymptotic complexity analyzer",
        "Sandboxed execution harness with sub-millisecond telemetry",
        "Dynamic AI feedback on algorithmic edge cases and structure",
        "Responsive developer-focused UI deployed on Vercel",
      ],
      demoUrl: "https://interview-forge.vercel.app",
      githubUrl: "https://github.com/abhijaylg09",
    },
    {
      id: "taskflow-mern",
      title: "TaskFlow — MERN Task Management Platform",
      category: "Web & Full Stack",
      badge: "Full-Stack Web Architecture",
      featured: true,
      problem:
        "Teams require a responsive, secure task workflow tool with granular access control and responsive status tracking without bloated overhead.",
      solution:
        "Built a full-stack MERN application incorporating stateless JWT authentication, RESTful API endpoints, and clean MongoDB schema models supporting full CRUD operations, status filtering, and task lifecycle tracking.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "REST APIs",
      ],
      highlights: [
        "Stateless JWT authentication and secure route guards",
        "Normalized MongoDB collections with indexed query performance",
        "Responsive CRUD management interface with reactive state updates",
        "RESTful API design following clean architectural standards",
      ],
      githubUrl: "https://github.com/abhijaylg09",
    },
    {
      id: "college-landing-page",
      title: "Responsive Institutional Web Platform",
      category: "Web & Full Stack",
      badge: "Frontend Architecture",
      featured: false,
      problem:
        "Educational portals frequently suffer from poor mobile responsiveness and high bounce rates due to unoptimized assets.",
      solution:
        "Engineered a mobile-first responsive landing page with semantic HTML5, modern CSS3 layout paradigms, and optimized page speed across all viewport sizes, deployed on Vercel.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Vercel", "Mobile-First"],
      highlights: [
        "Mobile-first responsive architecture supporting all devices",
        "High performance lighthouse metrics and asset optimization",
        "Automated CI/CD deployment on Vercel via GitHub",
      ],
      demoUrl: "https://abhijays-portfolio.vercel.app",
      githubUrl: "https://github.com/abhijaylg09",
    },
  ] as Project[],

  experience: [
    {
      company: "iNet Infotech",
      role: "Web Developer Intern",
      location: "Kochi, Kerala",
      period: "Apr 2024 – May 2024",
      type: "Internship",
      achievements: [
        "Developed responsive, production-ready web applications using React.js and PHP, significantly improving user experience and page load speed across multiple client portals.",
        "Implemented structured code review practices that minimized deployment errors and established consistent code quality across sprint cycles.",
        "Collaborated with senior engineers to troubleshoot bottlenecks, debug features, and deliver full-stack solutions adhering to object-oriented programming principles.",
      ],
      techStack: ["React.js", "PHP", "JavaScript", "OOP", "Code Review"],
    },
  ] as ExperienceItem[],

  education: [
    {
      institution: "St. Thomas Institute for Science & Technology (STIST)",
      degree: "Bachelor of Technology, Computer Science",
      period: "July 2026 – November 2029",
      location: "Trivandrum, Kerala",
    },
    {
      institution: "Model Polytechnic College Painavu",
      degree: "Diploma in Computer Engineering",
      period: "June 2022 – April 2025",
      score: "CGPA: 7.05 / 10",
      location: "Idukki, Kerala",
    },
  ] as EducationItem[],

  skills: {
    languages: ["Python", "Java (21 LTS)", "Go (Golang)", "JavaScript (ES6+)", "TypeScript", "PHP", "C++", "SQL"],
    frontend: ["React.js", "Next.js (App Router)", "Tailwind CSS", "HTML5", "CSS3", "JavaFX"],
    backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Thread-Safe EventBus", "Multi-threading"],
    ai_vision: [
      "Agentic AI",
      "LangChain",
      "OpenCV",
      "ONNX Runtime",
      "FERPlus",
      "Vosk STT",
      "Piper TTS",
      "OpenAI Whisper",
      "Prompt Engineering",
      "TensorFlow",
      "PyTorch",
    ],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    cloud_tools: ["AWS (EC2, S3)", "Git", "GitHub", "Vercel", "VS Code", "Postman"],
  },

  certifications: [
    {
      title: "Python and Django Training (3 Months)",
      issuer: "Avodha EduTech Pvt. Ltd. (NSDC & Skill India)",
      date: "Apr 2026",
      score: "Overall Score: 380/400 (95%)",
    },
    {
      title: "Getting Started with AWS Generative AI for Developers",
      issuer: "Amazon Web Services (Coursera)",
      date: "Feb 2026",
    },
    {
      title: "Agentic AI Based on Python Workshop",
      issuer: "Model Polytechnic College",
      date: "Mar 2025",
    },
    {
      title: "Introduction to Programming Using Python",
      issuer: "Technical Certification",
      date: "Verified",
    },
    {
      title: "Accelerate Your Job Search with AI",
      issuer: "Professional Development",
      date: "Verified",
    },
  ] as CertificationItem[],

  achievements: [
    {
      title: "Second Place — Web Designing",
      event: "THARANG 2024",
      description:
        "Awarded 2nd place in competitive Web Designing at the National Techno Cultural Entrepreneurial Fest (THARANG 2024), recognized for UI/UX excellence, responsiveness, and clean code under strict time constraints.",
    },
  ],

  spokenLanguages: [
    { language: "English", level: "Professional Working Proficiency" },
    { language: "Malayalam", level: "Native Proficiency" },
    { language: "Tamil", level: "Intermediate Proficiency" },
  ],
};
