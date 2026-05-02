"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card } from '@/components/ui';
import { portfolioData, skills } from '@/data/data';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Wrench, 
  Github, 
  Layout, 
  User, 
  Rocket, 
  Award, 
  Layers
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const About = () => {
  const stats = [
    { label: "Years Experience", value: portfolioData.about.experience, icon: <Award className="w-5 h-5 text-primary" />, color: "text-primary" },
    { label: "Projects Done", value: portfolioData.about.projects, icon: <Rocket className="w-5 h-5 text-accent" />, color: "text-accent" },
    { label: "Tech Stack", value: portfolioData.about.techStack, icon: <Layers className="w-5 h-5 text-primary" />, color: "text-primary" },
    { label: "Happy Clients", value: "10+", icon: <User className="w-5 h-5 text-accent" />, color: "text-accent" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6">
        <SectionHeading subtitle="My story and what drives me as a developer.">
          About Me
        </SectionHeading>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              {portfolioData.about.description.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="flex flex-col items-center justify-center text-center py-8 group hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3 rounded-xl bg-white/5 mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className={`text-4xl font-bold ${stat.color} mb-2 tracking-tight`}>{stat.value}</span>
                  <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend": return <Layout className="w-6 h-6 text-primary" />;
      case "Tools": return <Wrench className="w-6 h-6 text-accent" />;
      default: return <Cpu className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white/[0.02] relative">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="The technologies I use to bring ideas to life.">
          My Skills
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  {getCategoryIcon(skillGroup.category)}
                </div>
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-white/5">
                    {getCategoryIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{skillGroup.category}</h3>
                </div>

                <div className="space-y-8">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary via-primary-dark to-accent relative"
                        >
                          {/* Animated glow effect */}
                          <motion.div 
                            animate={{ 
                              x: ["-100%", "100%"],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                            className="absolute inset-0 bg-white w-20 skew-x-[-20deg] blur-sm"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
