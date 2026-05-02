"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, X , ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui';
import { portfolioData } from '@/data/data';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-mono mb-4 text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {portfolioData.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{portfolioData.name.split(' ')[1]}</span>
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8">
            {portfolioData.role}
          </h3>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            {portfolioData.intro}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              Download CV <Download size={18} />
            </Button>
          </div>

          <div className="flex gap-4">
            <motion.a 
              href={portfolioData.social.github} 
              whileHover={{ y: -5, scale: 1.1 }} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href={portfolioData.social.linkedin} 
              whileHover={{ y: -5, scale: 1.1 }} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href={portfolioData.social.x} 
              whileHover={{ y: -5, scale: 1.1 }} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative justify-self-center md:justify-self-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[40px] rotate-6 opacity-20 animate-pulse" />
            <div className="absolute inset-0 border-2 border-white/10 rounded-[40px] -rotate-3" />
            <div className="relative w-full h-full overflow-hidden rounded-[40px] glass-card p-2">
              <Image 
                src="/images/Hridoy.jpeg" 
                alt={portfolioData.name}
                fill
                className="object-cover rounded-[35px]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
