import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading/rendering assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-[#0b0f19] flex flex-col items-center justify-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold font-display"
            >
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                &lt;Kamal Jindal /&gt;
              </span>
            </motion.div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Background particle & glows */}
        <BackgroundParticles />

        {/* Global Navigation */}
        <Navbar />

        {/* Sections layout */}
        <main className="max-w-7xl mx-auto">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Me */}
          <About />

          {/* 3. Skills */}
          <Skills />

          {/* 4. Experience & Training */}
          <Experience />

          {/* 5. Projects */}
          <Projects />

          {/* 6. Education */}
          <Education />

          {/* 7. Certifications */}
          <Certifications />

          {/* 8. Coding Profiles */}
          <CodingProfiles />

          {/* 9. Contact */}
          <Contact />
        </main>

        {/* Footer & Scroll-To-Top indicator */}
        <Footer />
      </div>
    </>
  );
}
