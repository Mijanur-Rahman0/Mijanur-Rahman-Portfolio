"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card } from '@/components/ui';
import { portfolioData, skills } from '@/data/data';

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="My story and what drives me as a developer.">
          About Me
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              {portfolioData.about.description.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col items-center justify-center text-center py-10">
              <span className="text-4xl font-bold text-primary mb-2">{portfolioData.about.experience}</span>
              <span className="text-gray-400 text-sm">Years Experience</span>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center py-10">
              <span className="text-4xl font-bold text-accent mb-2">{portfolioData.about.projects}</span>
              <span className="text-gray-400 text-sm">Projects Done</span>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center py-10">
              <span className="text-4xl font-bold text-primary mb-2">{portfolioData.about.techStack}</span>
              <span className="text-gray-400 text-sm">Tech Stack</span>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center py-10">
              <span className="text-4xl font-bold text-accent mb-2">10+</span>
              <span className="text-gray-400 text-sm">Happy Clients</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="The technologies I use to bring ideas to life.">
          My Skills
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
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
