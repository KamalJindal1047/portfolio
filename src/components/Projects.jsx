import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiServer, FiMonitor } from 'react-icons/fi';

const projects = [
  {
    icon: <FiServer className="w-6 h-6" />,
    title: 'Console ATM Simulation System',
    category: 'Java & OOP Development',
    desc: 'A robust, console-based banking simulator engineered utilizing modular object-oriented programming to handle financial ledger operations safely.',
    features: [
      'Interactive authentication layer with secure PIN verification mechanisms.',
      'Core transactional logic supporting deposit, withdrawal, and real-time balance inquiries.',
      'Comprehensive validation filters ensuring sanitization of alphanumeric and out-of-range user inputs.',
    ],
    tech: ['Java', 'Object-Oriented Design', 'Exception Handling', 'Input Validation'],
    outcome: 'Optimized state transitions, eliminated critical transaction edge cases, and modeled pure modular class structures in Java.',
    github: 'https://github.com/KamalJindal1047',
    demo: '#',
  },
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: 'MERN Stack Task Planner',
    category: 'Full Stack Web Development',
    desc: 'An agile, full-stack workflow management tool designed for teams to organize daily sprint tickets, schedule tasks, and track statuses.',
    features: [
      'Secure stateless authentication utilizing JSON Web Tokens (JWT) and encrypted passwords.',
      'RESTful backend endpoints managing CRUD operations on tasks, boards, and member accounts.',
      'Responsive client interface featuring responsive layouts, loading states, and toast notifications.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    outcome: 'Formulated clean state-sharing practices using React hooks, handled complex CORS, and optimized schema models in MongoDB.',
    github: 'https://github.com/KamalJindal1047',
    demo: '#',
  },
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: 'GenAI Coding Assistant Hub',
    category: 'AI & Prompt Engineering',
    desc: 'An intelligent workspace interface designed to communicate with Large Language Models, optimizing template generation and prompt testing pipelines.',
    features: [
      'API integration with Generative AI models to execute prompt-reply sequences.',
      'Prompt workspace environment allowing users to save, modify, and export custom coding prompts.',
      'Sleek code block display featuring syntax highlighting and one-click clipboard copying.',
    ],
    tech: ['React.js', 'Generative AI', 'Oracle SDK', 'Framer Motion', 'Local Storage API'],
    outcome: 'Streamlined code explanation workflows, tested prompt templates for token usage efficiency, and crafted high-performing UI animations.',
    github: 'https://github.com/KamalJindal1047',
    demo: '#',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            A selection of software platforms I have developed, spanning backend engineering, full-stack, and artificial intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl glass-card flex flex-col justify-between overflow-hidden text-left relative group h-full"
            >
              {/* Card top border glow */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-40 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Content area */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-cyan/10 text-brand-cyan rounded-xl group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <span className="text-xs font-semibold text-brand-blue bg-brand-blue/15 border border-brand-blue/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-primary group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Core Features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Core Features</h4>
                  <ul className="space-y-1.5 text-secondary text-xs sm:text-sm">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-brand-cyan mr-2 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Outcome */}
                <div className="bg-brand-cyan/5 border border-glass-border rounded-xl p-3.5 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Engineering Outcome</h4>
                  <p className="text-secondary text-xs leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* Footer tech tags & buttons */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-glass-border bg-brand-navy-950/20 space-y-4">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[10px] sm:text-xs font-medium text-secondary bg-brand-cyan/5 border border-glass-border px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 rounded-lg glass border border-brand-cyan/20 text-brand-cyan text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 hover:bg-brand-cyan/10 hover:border-brand-cyan/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
