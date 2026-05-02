import { Project, Skill, Education, Experience } from "@/types";

export const portfolioData = {
  name: "Mijanur Rahman",
  role: "Front-end Developer",
  intro: "I build modern, scalable web applications with clean UI and smooth user experience.",

  about: {
    description: `I am a passionate developer currently studying BSc Engineering. My journey started with curiosity about how websites work, and now I build full-stack applications using modern technologies.

I enjoy solving problems, learning new technologies, and creating user-friendly applications.

Outside coding, I like gaming, exploring tech, and improving my skills continuously.`,
    experience: "1+",
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
      name: "Tour & Travel Management System",
      shortDescription: "A complete travel booking system with admin and user panel.",
      fullDescription: "A complete travel booking system with admin and user panel. Features include destination browsing, booking management, and a comprehensive admin dashboard for monitoring sales and users.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
      techStack: ["React", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      challenges: "Implementing complex state management for the booking flow and ensuring real-time inventory updates.",
      improvements: "Integration with third-party travel APIs for real-time flight and hotel data."
    },
    {
      id: "2",
      name: "Portfolio Website",
      shortDescription: "Personal portfolio with modern UI and animations.",
      fullDescription: "A high-performance personal portfolio website built with Next.js and Tailwind CSS. Featuring smooth animations with Framer Motion and a fully responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      techStack: ["Next.js", "Tailwind", "Framer Motion"],
      liveDemo: "#",
      github: "https://github.com/Mijanur-Rahman0",
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
    items: portfolioData.skills.frontend.map(s => ({ name: s, level: 90 }))
  },
  {
    category: "Tools",
    items: portfolioData.skills.tools.map(s => ({ name: s, level: 85 }))
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
