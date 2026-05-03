import { Project, Skill, Education, Experience } from "@/types";

export const portfolioData = {
  name: "Mijanur Rahman",
  role: "Front-end Developer",
  intro: "I build modern, scalable web applications with clean UI and smooth user experience.",

  about: {
    description: `I am a passionate developer currently studying BSc Engineering. My journey started with curiosity about how websites work, and now I build full-stack applications using modern technologies.

I enjoy solving problems, learning new technologies, and creating user-friendly applications.

Outside coding, I like gaming, exploring tech, and improving my skills continuously.`,
    experience: "0+",
    projects: "5+",
    techStack: "8+",
  },

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
    tools: ["Git", "GitHub", "VS Code", "Figma"],
  },

  education: [
    {
      degree: "B.Sc in Engineering in CSE",
      institution: "Bangladesh Univarsity of Business and Technology",
      year: "2024 - Present",
    },
  ],

  projects: [
    {
      id: "1",
      name: "TaskFlow – Smart Todo Management System",
      shortDescription: "A Simple and Efficient Todo Management Web Application.",
      fullDescription: "This is a frontend-based Todo Management Application built using HTML, CSS, Tailwind, and JavaScript. The app allows users to add, update, delete, and manage daily tasks efficiently. It uses browser LocalStorage to store tasks, ensuring that data remains saved even after page refresh. The user interface is clean, responsive, and optimized for a smooth user experience.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
      techStack: ["HTML", "CSS", "Tailwind", "JavaScript"],
      liveDemo: "https://mijanur-rahman0.github.io/Task-Manager-Web-App/",
      github: "https://github.com/Mijanur-Rahman0/Task-Manager-Web-App",
      challenges: "Managing task state and keeping UI synced with LocalStorage using vanilla JavaScript.",
      improvements: "Add backend support, authentication, and advanced features like task priority, due dates, and drag-and-drop."
    },
    {
      id: "2",
      name: "Portfolio Website",
      shortDescription: "Personal portfolio with modern UI and animations.",
      fullDescription: "A high-performance personal portfolio website built with Next.js and Tailwind CSS. Featuring smooth animations with Framer Motion and a fully responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      techStack: ["Next.js", "Tailwind", "Framer Motion"],
      liveDemo: "https://mijanur-rahman-portfolio.vercel.app/",
      github: "https://github.com/Mijanur-Rahman0/Mijanur-Rahman-Portfolio",
      challenges: "Optimizing the bundle size while maintaining high-quality animations and images.",
      improvements: "Adding a blog section using MDX and implementing dark mode toggle."
    },
    {
      id: "3",
      name: "Inventory System",
      shortDescription: "Java-based inventory management system.",
      fullDescription: "A robust inventory management system built with Java. Designed to track stock levels, manage suppliers, and generate reports for small to medium-sized businesses.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
      techStack: ["Java", "Swing", "MySQL"],
      liveDemo: "#",
      github: "#",
      challenges: "Designing a reliable local database schema and handling concurrent inventory updates.",
      improvements: "Migrating to a cloud-based architecture and adding a web-based dashboard."
    },
  ],

  contact: {
    email: "mdhridoy645264@email.com",
    phone: "01893054737",
  },

  social: {
    github: "https://github.com/Mijanur-Rahman0",
    linkedin: "https://linkedin.com/in/mijanur-rahman6",
    x: "https://x.com/mijanurrahman_h?s=21",
  },
};

// Map the new data structure back to the old exports to maintain component compatibility
export const projects: Project[] = portfolioData.projects;

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "Tailwind", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 60 },
      { name: "Next.js", level: 45 },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 50 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "Figma", level: 70 },
    ]
  }
];

export const education: Education[] = portfolioData.education.map(edu => ({
  degree: edu.degree,
  institution: edu.institution,
  duration: edu.year,
  description: "Pursuing Engineering degree with focus on computer science and software development."
}));

export const experiences: Experience[] = [
  {
    role: "Front-end Developer",
    company: "Freelance / Projects",
    duration: "2024 - Present",
    description: "Building modern web applications and improving UI/UX for various clients."
  }
];
