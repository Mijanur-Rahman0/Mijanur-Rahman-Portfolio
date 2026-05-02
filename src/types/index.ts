export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  challenges: string;
  improvements: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}
