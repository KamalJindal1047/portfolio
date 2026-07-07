import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi';

const educationList = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science',
    institution: 'GLA University, Mathura',
    score: 'Cumulative Grade Point / Score: 70.9%',
    duration: 'Graduating January 2027',
    highlights: [
      'Focused coursework in Data Structures & Algorithms, Object-Oriented Programming (OOP) in Java, and Database Systems.',
      'Active participant in university programming workshops and technical project exhibitions.',
    ],
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Green Land Convent School, Achhnera (Agra)',
    score: 'Percentage: 72.2%',
    duration: 'Completed May 2023',
    highlights: [
      'Specialized in Physics, Chemistry, and Mathematics (PCM) stream.',
      'Represented school in inter-school science quizzes and local computer seminars.',
    ],
  },
  {
    degree: 'High School (Class X)',
    institution: 'Green Land Convent School, Achhnera (Agra)',
    score: 'Percentage: 73.8%',
    duration: 'Completed May 2021',
    highlights: [
      'Strong academic foundation in Mathematics and General Sciences.',
      'Developed foundational logical and mathematical skills, leading to subsequent computer science pursuits.',
    ],
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">Education Timeline</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            My academic journey and scholastic accomplishments.
          </p>
        </div>

        {/* Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl glass-card text-left flex flex-col justify-between relative group"
            >
              {/* Corner accent glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-brand-cyan/5 blur-xl group-hover:bg-brand-cyan/15 transition-all duration-500"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl">
                    <FiBookOpen className="w-6 h-6" />
                  </div>
                  
                  <span className="flex items-center text-xs font-semibold text-secondary bg-brand-cyan/5 border border-glass-border px-2.5 py-1 rounded-full">
                    <FiCalendar className="mr-1 text-brand-cyan" />
                    {edu.duration}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display text-primary leading-snug group-hover:text-brand-cyan transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-brand-blue">{edu.institution}</p>
                </div>

                <div className="flex items-center space-x-2 bg-brand-cyan/5 border border-brand-cyan/10 rounded-lg p-2.5 w-fit">
                  <FiAward className="text-brand-cyan w-4.5 h-4.5" />
                  <span className="text-xs font-bold text-primary">{edu.score}</span>
                </div>

                <ul className="space-y-2 text-secondary text-xs sm:text-sm leading-relaxed border-t border-glass-border pt-4">
                  {edu.highlights.map((hl, hlIndex) => (
                    <li key={hlIndex} className="flex items-start">
                      <span className="text-brand-cyan mr-2 font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
