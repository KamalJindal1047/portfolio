import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiShield, FiExternalLink } from 'react-icons/fi';

const OracleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#F80000]" fill="currentColor">
    <path d="M12 4c-5.968 0-10.8 2.686-10.8 6s4.832 6 10.8 6 10.8-2.686 10.8-6-4.832-6-10.8-6zm0 9c-4.142 0-7.5-1.343-7.5-3s3.358-3 7.5-3 7.5 1.343 7.5 3-3.358 3-7.5 3z" />
  </svg>
);

const certifications = [
  {
    icon: <OracleLogo />,
    title: 'Oracle Certified Generative AI Professional',
    issuer: 'Oracle',
    date: '2025',
    credentialId: 'ORACLE-GENAI-2025',
    details: [
      'Demonstrated expertise in Large Language Model (LLM) architectures and foundational AI principles.',
      'Mastered advanced Prompt Engineering guidelines, Retrieval-Augmented Generation (RAG) structures, and LLM fine-tuning.',
      'Learned OCI Generative AI service APIs, embedding models, and custom deployment patterns.',
    ],
  },
  {
    icon: <FiAward className="w-8 h-8 text-brand-cyan" />,
    title: 'Certified in AI Program',
    issuer: 'Ediglobe',
    date: '2025',
    credentialId: 'EDIGLOBE-AI-SUMMER-2025',
    details: [
      'Completed practical projects on data exploration, statistical analysis, and machine learning models.',
      'Gained competency with core algorithms: linear/logistic regressions, decision trees, and clustering.',
      'Conducted evaluations using training metrics and collaborated with remote tech mentors.',
    ],
  },
];

const badges = [
  { name: 'LeetCode Problem Solver', platform: 'LeetCode', color: 'text-[#FFA116] bg-[#FFA116]/10 border-[#FFA116]/20' },
  { name: 'Java Gold Badge', platform: 'HackerRank', color: 'text-[#2EC866] bg-[#2EC866]/10 border-[#2EC866]/20' },
  { name: 'Python Gold Badge', platform: 'HackerRank', color: 'text-[#2EC866] bg-[#2EC866]/10 border-[#2EC866]/20' },
  { name: 'Problem Solving (Basic)', platform: 'HackerRank', color: 'text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/20' },
];

export default function Certifications() {
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">Certifications & Achievements</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            Professional credentials, program certifications, and digital skill badges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Certifications Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 space-y-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 sm:p-8 rounded-2xl glass-card text-left relative overflow-hidden group flex flex-col sm:flex-row items-start gap-6"
              >
                {/* Side glow bar */}
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-brand-blue to-brand-cyan opacity-50 group-hover:opacity-100 transition-all"></div>

                {/* Left logo icon */}
                <div className="p-4 bg-white/5 border border-glass-border rounded-2xl shrink-0 group-hover:scale-105 transition-transform">
                  {cert.icon}
                </div>

                {/* Content body */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold font-display text-primary leading-snug group-hover:text-brand-cyan transition-colors">
                        {cert.title}
                      </h3>
                      <div className="text-sm font-semibold text-brand-blue mt-1">
                        {cert.issuer} <span className="text-secondary font-normal">• Issued {cert.date}</span>
                      </div>
                    </div>
                    
                    <span className="text-xs font-bold font-mono text-secondary bg-brand-cyan/5 border border-glass-border px-3 py-1 rounded-full">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <ul className="space-y-2 text-secondary text-sm sm:text-base leading-relaxed border-t border-glass-border/50 pt-3">
                    {cert.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start">
                        <FiCheckCircle className="text-brand-cyan shrink-0 mr-2.5 mt-1.5 w-4 h-4" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Badges / Skills Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-2xl glass-card text-left space-y-6 h-full"
          >
            <div className="flex items-center space-x-3 pb-4 border-b border-glass-border">
              <div className="p-2.5 bg-brand-cyan/10 text-brand-cyan rounded-lg">
                <FiShield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary">Skill Badges</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border flex flex-col justify-between space-y-2 transition-all duration-300 hover:scale-[1.02] ${badge.color}`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider opacity-85">
                    {badge.platform}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-primary">
                    {badge.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Achievement Footer CTA */}
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4 mt-6 text-center space-y-3">
              <p className="text-secondary text-xs leading-relaxed">
                Actively participating in coding assessments and certifications to expand my skill matrix.
              </p>
              <a
                href="https://leetcode.com/u/kamaljindal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-cyan hover:text-brand-blue transition-colors"
              >
                <span>Verify Coding Status</span>
                <FiExternalLink />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
