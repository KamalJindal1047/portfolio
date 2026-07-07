import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckSquare, FiAward, FiCode, FiUsers } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiCode className="w-6 h-6 text-brand-cyan" />,
    title: 'Core Software Engineering',
    desc: 'Strong foundation in Data Structures, Algorithms (DSA), and Object-Oriented Design (OOD) principles using Java and Python.',
  },
  {
    icon: <FiAward className="w-6 h-6 text-brand-cyan" />,
    title: 'AI & Generative AI Certified',
    desc: 'Certified Oracle Generative AI Professional with experience in machine learning algorithms, model building, and prompt engineering.',
  },
  {
    icon: <FiCheckSquare className="w-6 h-6 text-brand-cyan" />,
    title: 'Full Stack Capabilities',
    desc: 'Capable of designing and building responsive client-server architectures using the MERN (MongoDB, Express, React, Node) stack.',
  },
  {
    icon: <FiUsers className="w-6 h-6 text-brand-cyan" />,
    title: 'Collaborative Internships',
    desc: 'Virtual training experience at Ediglobe, collaborating remotely under agile guidelines to execute AI-driven data analysis tasks.',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">About Me</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            My background, career goals, and the professional competencies I bring to the table.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Detailed Summary */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl font-bold font-display text-primary">
              Undergraduate Computer Science Engineer & Developer
            </h3>
            
            <p className="text-secondary leading-relaxed text-base">
              I am currently pursuing a **Bachelor of Technology in Computer Science** at **GLA University**, Mathura. With a graduation timeline of January 2027, my focus lies in constructing efficient, maintainable, and modern software architectures. I have a core passion for problem-solving using Data Structures and Algorithms and building reliable systems using Java.
            </p>

            <p className="text-secondary leading-relaxed text-base">
              My engineering journey is driven by practical application. Through a remote internship at Ediglobe, I worked extensively with artificial intelligence concepts and data analysis, which inspired me to gain certifications such as the **Oracle Certified Generative AI Professional**. Combining my backend strengths with the MERN stack, I strive to design applications that resolve real-world problems.
            </p>

            <div className="p-5 rounded-2xl glass border border-brand-blue/20 bg-brand-blue/5">
              <h4 className="font-bold text-brand-cyan mb-2">Career Objective</h4>
              <p className="text-secondary text-sm leading-relaxed">
                To secure a challenging role as a Software Engineer, Full Stack Developer, or Java Developer for 2026. I aim to apply my technical mastery of DSA, Java backend structures, and cloud-native AI to deliver high-quality, scalable digital solutions under a collaborative engineering environment.
              </p>
            </div>
          </motion.div>

          {/* Highlights & Strengths Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass-card text-left flex flex-col space-y-3"
              >
                <div className="p-3 bg-brand-cyan/10 rounded-xl w-fit">
                  {highlight.icon}
                </div>
                <h4 className="font-bold text-lg font-display text-primary">{highlight.title}</h4>
                <p className="text-secondary text-sm leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
