"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card, Button } from '@/components/ui';
import { education, experiences, projects } from '@/data/data';
import { Calendar, GraduationCap, Briefcase, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const EducationAndExperience = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <SectionHeading subtitle="My academic background.">Education</SectionHeading>
            <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-12 relative"
                >
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary z-10">
                    <GraduationCap size={18} />
                  </div>
                  <Card>
                    <div className="flex items-center gap-2 text-primary text-sm font-mono mb-2">
                      <Calendar size={14} /> {edu.duration}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-accent text-sm mb-3 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <SectionHeading subtitle="Professional journey.">Experience</SectionHeading>
            <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-12 relative"
                >
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent z-10">
                    <Briefcase size={18} />
                  </div>
                  <Card>
                    <div className="flex items-center gap-2 text-accent text-sm font-mono mb-2">
                      <Calendar size={14} /> {exp.duration}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary text-sm mb-3 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="A selection of my recent works.">
          Featured Projects
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-0 overflow-hidden group h-full flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md">
                      <Github size={20} />
                    </Link>
                    <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md">
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-md border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full text-sm">View Details</Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
