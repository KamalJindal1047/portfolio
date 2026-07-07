import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiGitCommit } from 'react-icons/fi';

const experiences = [
  {
    type: 'Internship',
    role: 'Artificial Intelligence Intern (Virtual)',
    company: 'Ediglobe',
    location: 'Remote',
    period: 'Summer 2025',
    bullets: [
      'Completed an intensive virtual internship focused on core Artificial Intelligence concepts, data pipelines, and machine learning models.',
      'Worked on AI-based projects involving data cleansing, descriptive statistics analysis, and predictive model development.',
      'Gained practical experience implementing machine learning algorithms (Supervised/Unsupervised learning) and evaluating metrics.',
      'Collaborated remotely with industry mentors and peer groups, using version control systems (Git/GitHub) and participating in stand-ups.',
    ],
  },
  {
    type: 'Training & Projects',
    role: 'Java & Full-Stack Developer Prep',
    company: 'GLA University Bootcamps',
    location: 'Mathura, UP',
    period: '2024 - 2025',
    bullets: [
      'Participated in structured hands-on sessions on Java Enterprise Edition and Data Structures & Algorithms.',
      'Engineered console applications highlighting Object-Oriented design patterns, exception handling, and input sanitization.',
      'Developed full-stack web architectures using the MERN stack (MongoDB, Express, React, Node), focusing on RESTful API structures.',
    ],
  },
  {
    type: 'Workshop & Upskilling',
    role: 'Oracle Generative AI Academy',
    company: 'Oracle & Virtual Learning Platforms',
    location: 'Online',
    period: '2025',
    bullets: [
      'Studied Generative AI systems, Large Language Model (LLM) architectures, and basic RAG (Retrieval-Augmented Generation) patterns.',
      'Completed requirements to become an Oracle Certified Generative AI Professional, mastering prompt engineering, fine-tuning structures, and API security guidelines.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">Training & Experience</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            A history of my professional internships, structured engineering workshops, and technical training.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-brand-cyan/20 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 text-left"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 bg-brand-navy-950 border-2 border-brand-cyan rounded-full p-1.5 z-10 flex items-center justify-center text-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <FiGitCommit className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group">
                {/* Accent line on top of card */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/25 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold font-display text-primary">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-secondary text-sm mt-1">
                      <span className="font-semibold text-brand-blue">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center"><FiMapPin className="mr-1" /> {exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-secondary text-sm font-medium sm:self-start bg-brand-cyan/5 border border-glass-border px-3 py-1 rounded-full w-fit">
                    <FiCalendar className="mr-1.5 text-brand-cyan" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-secondary text-sm sm:text-base leading-relaxed">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start">
                      <span className="text-brand-cyan mr-2.5 mt-1.5 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
