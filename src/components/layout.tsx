"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

import { portfolioData } from '@/data/data';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
      scrolled ? 'glass-nav py-3' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          {portfolioData.name.split(' ')[0].toUpperCase()}<span className="text-primary">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary py-2 px-5 text-sm">Resume</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-white"
          >
            {link.name}
          </Link>
        ))}
        <button className="btn-primary mt-4">Download Resume</button>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">{portfolioData.name.split(' ')[0].toUpperCase()}<span className="text-primary">.</span></h3>
          <p className="text-gray-400 text-sm">Building digital experiences that matter.</p>
        </div>
        
        <div className="flex gap-4">
          <Link href={portfolioData.social.github} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
            <Github size={18} />
          </Link>
          <Link href={portfolioData.social.linkedin} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
            <Linkedin size={18} />
          </Link>
          <Link href={portfolioData.social.x} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </Link>
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
