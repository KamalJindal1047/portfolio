import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Fundamentals',
    skills: [
      { name: 'Java (OOP)', level: 85 },
      { name: 'Data Structures & Algorithms (DSA)', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL & Database Basics', level: 70 },
    ],
  },
  {
    title: 'Full Stack Development',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'Node.js & Express.js', level: 75 },
      { name: 'MongoDB', level: 75 },
      { name: 'HTML5 & CSS3 & Tailwind', level: 85 },
    ],
  },
  {
    title: 'AI & Emerging Tech',
    skills: [
      { name: 'Generative AI Concepts', level: 85 },
      { name: 'Oracle GenAI Tools', level: 80 },
      { name: 'Machine Learning Algorithms', level: 70 },
      { name: 'Data Analysis & Manipulation', level: 75 },
    ],
  },
  {
    title: 'Professional Competencies',
    skills: [
      { name: 'Effective Communication', level: 90 },
      { name: 'Teamwork & Collaboration', level: 85 },
      { name: 'Interpersonal Relations', level: 85 },
      { name: 'Analytical Problem Solving', level: 80 },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">Technical & Professional Skills</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            A comprehensive breakdown of my engineering capabilities and professional qualities.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-2xl glass-card text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold font-display text-brand-cyan mb-6">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-primary">{skill.name}</span>
                        <span className="text-brand-cyan">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-brand-cyan/10 rounded-full overflow-hidden">
                        {/* Animated Progress Bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
