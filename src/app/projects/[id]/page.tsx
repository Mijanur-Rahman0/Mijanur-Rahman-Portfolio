"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/data';
import { Button, Card, SectionHeading } from '@/components/ui';
import { Navbar, Footer } from '@/components/layout';

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft size={20} /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.name}</h1>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button className="gap-2">
                  Live Demo <ExternalLink size={18} />
                </Button>
                <Button variant="outline" className="gap-2">
                  View Code <Github size={18} />
                </Button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <CheckCircle2 size={24} /> Challenges Faced
                  </h3>
                  <Card className="bg-white/5 border-white/5">
                    <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-accent">
                    <CheckCircle2 size={24} /> Future Improvements
                  </h3>
                  <Card className="bg-white/5 border-white/5">
                    <p className="text-gray-400 leading-relaxed">{project.improvements}</p>
                  </Card>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={project.image} 
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <Card className="mt-8">
                <h4 className="font-bold mb-4">Tech Stack Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.techStack.map(tech => (
                    <div key={tech} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
