export const lastUpdated = "Janurary 9, 2025";

export const socials = {
  email: "jaedonaspurlock@outlook.com",
  linkedin: "https://www.linkedin.com/in/jaedon-spurlock/",
  github: "https://github.com/JaedonSpurlock01",
  instagram: "https://www.instagram.com/jaedonspurlock",
  youtube: "https://www.youtube.com/channel/UC_kzjV049b2XQlKe306re5g",
} as const;

export const info = {
  name: "Jaedon Spurlock",
  role: "Software Engineer",
  resume: "/resume.pdf",
  location: "San Diego Metropolitan Area",
} as const;

export const work = [
  {
    company: "Lockheed Martin",
    position: "Software Engineer Intern",
    location: "Orlando, Florida",
    date: "May 2025 - Present",
    imageSrc: "/lockheed.jpeg",
    href: "https://www.linkedin.com/company/welfie/",
    description:
      "Working with the F-35 Pilot Training Device. Working under Development Environment IPT through build & tools team integrating web development solutions and CI/CD pipelines.",
    skills: ["react", "sveltekit", "postgresql"],
  },
  {
    company: "Welfie",
    position: "Software Engineer Intern",
    location: "San Diego, California",
    date: "May 2024 - Aug 2024",
    imageSrc: "/welfie.jpeg",
    href: "https://www.linkedin.com/company/welfie/",
    description:
      "Part of mobile development team, working with React Native, Docker, and CI/CD pipelines with Google Cloud.",
    skills: ["react"],
  },
] as const;

export const leadership = [
  {
    club: "SKALE",
    position: "Co-Founder",
    imageSrc: "",
    date: "May 2024 - Present",
    href: "",
    description: "",
  },
  {
    date: "May 2024 - Present",
    club: "Google Developer Student Club (GDSC)",
    position: "President",
    imageSrc: "/welfie.jpeg",
    href: "https://www.linkedin.com/company/welfie/",
    description: "",
  },
  {
    date: "May 2024 - Dec 2025",
    club: "Robotics",
    position: "Technical Lead",
    imageSrc: "/welfie.jpeg",
    href: "https://www.linkedin.com/company/welfie/",
    description: "",
  },
] as const;

export const education = {
  school: "California State University, San Marcos",
  degree: "Bachelors of Science in Software Engineering",
  gpa: "3.95/4.00",
  date: "Aug 2022 - Present",
  imageSrc: "/education/csusm.png",
  href: "https://www.csusm.edu/",
  desc: "Courses: Data Structures & Algorithms, Software Design & Development, Database Management Systems, Calculus I-II, Real-Time Concepts For Embedded Systems, Physics | GPA: 3.95/4.00",
} as const;

export const langauges = [
  "Python",
  "C++",
  "TypeScript",
  "JavaScript",
  "GoLang",
  "SQL",
] as const;

export const libraries = ["React", "Svelte"];

export const frameworks = ["NextJS", "SvelteKit", "TailwindCSS"];

export const tools = [
  "Docker",
  "AWS S3",
  "AWS EC2",
  "Git",
  "PostgreSQL",
  "MongoDB",
];

export const projects = [
  {
    title: "Rezzy",
    description:
      "Summarize research papers using AI and see a visual map of the paper's references",
    websiteUrl: "",
    githubUrl: "",
    imageSrc: "/projects/rezzy.png",
    date: "June 2025 - Present",
    tags: [
      "TypeScript",
      "ReactJS",
      "Vite",
      "Amazon S3",
      "Amazon Cloudfront",
      "PostgreSQL",
    ],
    features: ["Search for music, playlists, or albums"],
    archived: true,
  },
  {
    title: "Routify",
    description:
      "City pathfinding visualizer website used to understand pathfinding algorithms",
    websiteUrl: "https://www.routify.cc",
    githubUrl: "https://www.github.com/jaedonspurlock01/routify",
    imageSrc: "/projects/routify.gif",
    date: "Jan 2024 - Mar 2024",
    tags: [
      "JavaScript",
      "ReactJS",
      "Nominatim API",
      "Overpass API",
      "Amazon S3",
    ],
    features: [
      "Search any city in the world",
      "Choose between DFS, BFS, A*, and Dijkstra algorithms",
      "Customize the color scheme",
      "Change animation speed realtime",
    ],
  },
  {
    title: "GDSC Website",
    description:
      "Student organization website for GDSC to learn and develop software engineering. This project was built with an emphasis on high quality software, including industry-standard design patterns such as the SSOT, Singleton, and MVC patterns. In addition, there are CI/CD pipelines built into the frontend and backend services.",
    websiteUrl: "https://gdsc-csusm.com/",
    githubUrl: "https://github.com/csusmGDSC/csusmgdsc-web",
    imageSrc: "/projects/gdscweb.png",
    date: "Jun 2024 - Present",
    tags: ["TypeScript", "React", "Vite", "Golang", "PostgreSQL"],
    features: [
      "Complete self-built secure authentication package",
      "CRUD operations with users, events, and projects",
      "Role-based authorization for user management",
      "Admin dashboard for event management",
      "Event reminders with email and push notifications",
    ],
    archived: false,
  },
  {
    title: "Reside",
    description:
      "Real-estate app concept for students to find the cheapest student housing near campus.",
    websiteUrl: "",
    githubUrl: "",
    imageSrc: "/projects/reside.webp",
    date: "Mar 2024 - Present",
    tags: [
      "TypeScript",
      "ReactJS",
      "Vite",
      "Amazon S3",
      "Amazon Cloudfront",
      "PostgreSQL",
    ],
    features: ["Search for music, playlists, or albums"],
    archived: true,
  },
  {
    title: "University Rover",
    description:
      "Assembly and software development of the unversity rover platform",
    websiteUrl: null,
    githubUrl: "",
    imageSrc: "/projects/rover.jpg",
    date: "Oct 2024 - Present",
    tags: [
      "ROS2",
      "Python",
      "Raspberry PI",
      "Jetson Nano",
      "Autonomous Systems",
    ],
    features: [
      "Autonomous navigation",
      "Remote control through ssh terminal",
      "Navigate across different terrains",
    ],
    archived: true,
  },
];
