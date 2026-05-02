import { Hero } from '@/components/sections/Hero';
import { About, Skills } from '@/components/sections/AboutAndSkills';
import { EducationAndExperience, Projects } from '@/components/sections/WorkAndEducation';
import { Contact } from '@/components/sections/Contact';
import { Navbar, Footer } from '@/components/layout';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <EducationAndExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
