import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const roles = ['Software Engineer', 'Full Stack Developer', 'Java Developer', 'AI Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === role) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full text-brand-cyan text-sm font-semibold tracking-wide w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span>Available for 2026 Placements</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gradient leading-none">
              Kamal Jindal
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-secondary min-h-[40px] flex items-center">
              <span>I'm a&nbsp;</span>
              <span className="text-brand-cyan border-r-2 border-brand-cyan animate-pulse pr-1">
                {currentText}
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
            Aspiring Software Engineer specializing in high-performance application development. Proficient in Java, DSA, and Full-Stack MERN developments. Certified Oracle Generative AI Professional creating modern intelligent systems.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-2">
            {[
              { icon: <FiLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/kamal-jindal-00151a296/', label: 'LinkedIn' },
              { icon: <FiGithub className="w-5 h-5" />, url: 'https://github.com/KamalJindal1047', label: 'GitHub' },
              { icon: <SiLeetcode className="w-5 h-5" />, url: 'https://leetcode.com/u/kamaljindal/', label: 'LeetCode' },
              { icon: <FiMail className="w-5 h-5" />, url: 'mailto:kamal.jindal_cs23@gla.ac.in', label: 'Email' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full glass border border-brand-cyan/20 text-brand-cyan hover:text-brand-blue hover:border-brand-cyan/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-center hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3.5 rounded-full glass border border-brand-cyan/20 text-brand-cyan font-semibold text-center flex items-center justify-center space-x-2 hover:bg-brand-cyan/5 hover:border-brand-cyan/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <FiFileText className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Floating Hologram / Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
            {/* Background glowing circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>

            {/* Glowing borders */}
            <div className="absolute inset-0 rounded-3xl border border-brand-cyan/30 bg-brand-navy-950/20 glass shadow-2xl overflow-hidden flex items-center justify-center p-6 group hover:border-brand-cyan/60 transition-all duration-500">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>

              {/* Developer Illustration Hologram */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-brand-cyan/80 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-500 group-hover:scale-105"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Tech Circles */}
                <circle cx="100" cy="100" r="85" strokeDasharray="5,10" className="opacity-30" />
                <circle cx="100" cy="100" r="75" strokeDasharray="10,5" className="opacity-20 animate-[spin_60s_linear_infinite]" />
                
                {/* Laptop Outline */}
                <rect x="55" y="115" width="90" height="55" rx="4" strokeWidth="2.5" className="opacity-90" />
                <line x1="45" y1="170" x2="155" y2="170" strokeWidth="3" className="opacity-90" />
                <line x1="100" y1="170" x2="100" y2="175" strokeWidth="3.5" />
                <line x1="85" y1="175" x2="115" y2="175" strokeWidth="3.5" />

                {/* Floating Code Symbols */}
                <path d="M30 65 L40 55 L30 45" strokeWidth="2" className="opacity-40" />
                <path d="M170 65 L160 55 L170 45" strokeWidth="2" className="opacity-40" />
                <path d="M85 45 L95 25" strokeWidth="2.5" className="opacity-50" />
                <path d="M105 25 L115 45" strokeWidth="2.5" className="opacity-50" />

                {/* Developer Figure */}
                {/* Head */}
                <circle cx="100" cy="70" r="14" strokeWidth="2.5" />
                {/* Shoulders / Torso */}
                <path d="M72 108 C75 92, 85 88, 100 88 C115 88, 125 92, 128 108" strokeWidth="2.5" />
                
                {/* Connections / Code lines */}
                <line x1="100" y1="56" x2="100" y2="35" strokeDasharray="2,2" className="opacity-60" />
                <line x1="68" y1="70" x2="48" y2="70" strokeDasharray="2,2" className="opacity-60" />
                <line x1="132" y1="70" x2="152" y2="70" strokeDasharray="2,2" className="opacity-60" />
                
                {/* Small binary indicator bulbs */}
                <circle cx="100" cy="35" r="3" fill="currentColor" className="animate-ping" />
                <circle cx="48" cy="70" r="3" fill="currentColor" />
                <circle cx="152" cy="70" r="3" fill="currentColor" />

                {/* Hologram details */}
                <line x1="65" y1="130" x2="135" y2="130" strokeWidth="1" className="opacity-30" />
                <line x1="65" y1="140" x2="115" y2="140" strokeWidth="1" className="opacity-30" />
                <line x1="65" y1="150" x2="125" y2="150" strokeWidth="1" className="opacity-30" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
