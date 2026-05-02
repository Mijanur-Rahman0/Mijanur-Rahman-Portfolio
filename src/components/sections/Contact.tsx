"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card, Button } from '@/components/ui';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { portfolioData } from '@/data/data';

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Let&apos;s build something amazing together.">
          Get In Touch
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">{portfolioData.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">{portfolioData.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <Card className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border-none">
              <h4 className="font-bold mb-2">Available for projects</h4>
              <p className="text-sm text-gray-400">Currently accepting new freelance work and full-time opportunities.</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                      placeholder="your name...."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                      placeholder="your email...."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <Button className="w-full justify-center">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
