"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card, Button } from '@/components/ui';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { portfolioData } from '@/data/data';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    // Directly using Web3Forms - change this key to your own!
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please check your access key.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto"
          >
            <Card className="py-12">
              <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-400 mb-8">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
              <Button onClick={() => setSubmitted(false)} className='mx-auto'>Send Another Message</Button>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="your name...."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="your email...."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none text-white"
                    placeholder="Your message here..."
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-500 text-sm">{error}</p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
