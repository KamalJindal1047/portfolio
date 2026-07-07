import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTerminal, FiAward, FiCheck } from 'react-icons/fi';

const LeetCodeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FFA116]" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.32-5.144a1.173 1.173 0 0 1 0-1.688l5.32-5.144c.466-.45 1.211-.45 1.677 0l2.697 2.606a1.196 1.196 0 0 1 .35.844v.933a1.196 1.196 0 0 1-.35.844l-2.697 2.606a1.18 1.18 0 0 1-1.677 0l-1.942-1.876a.587.587 0 0 0-.838 0l-.839.811a.587.587 0 0 0 0 .839l2.78 2.687c.93.9 2.42.9 3.35 0l2.78-2.687a.587.587 0 0 0 0-.839l-.839-.81a.587.587 0 0 0-.838 0l-1.942 1.875z" />
    <path d="M22 14.355c0-.62-.243-1.213-.678-1.656l-8.312-8.473a2.404 2.404 0 0 0-3.414 0L1.282 12.7a2.41 2.41 0 0 0 0 3.413l8.312 8.473a2.404 2.404 0 0 0 3.414 0l8.312-8.473c.435-.443.678-1.036.678-1.656h-2.148c0 .12-.047.24-.134.33l-8.312 8.472a.801.801 0 0 1-1.138 0L2.148 14.355a.803.803 0 0 1 0-1.138l8.312-8.472a.801.801 0 0 1 1.138 0l8.312 8.472c.087.09.134.21.134.33H22z" fillRule="evenodd" />
  </svg>
);

const HackerRankLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#2EC866]" fill="currentColor">
    <path d="M12 0a12 12 0 1 0 12 12A12.035 12.035 0 0 0 12 0zm5.176 17.518h-2.222V15.3h-5.908v2.222H6.824V6.482h2.222v2.222h5.908V6.482h2.222zM9.046 13.078h5.908v-2.222H9.046z" />
  </svg>
);

const profiles = [
  {
    name: 'LeetCode',
    icon: <LeetCodeLogo />,
    url: 'https://leetcode.com/u/kamaljindal/',
    username: 'u/kamaljindal',
    badge: 'Active Solver',
    stats: [
      { label: 'Solved Questions', value: '250+' },
      { label: 'Coding Consistency', value: '80%' },
      { label: 'Key Languages', value: 'Java, Python' },
    ],
    highlights: ['Focuses on arrays, strings, binary search, and dynamic programming.', 'Actively participating in weekly coding challenges.'],
    themeColor: 'hover:border-[#FFA116]/40 shadow-[0_0_15px_rgba(255,161,22,0.05)] hover:shadow-[0_0_25px_rgba(255,161,22,0.15)]',
  },
  {
    name: 'GitHub',
    icon: <FiGithub className="w-8 h-8 text-[#F8FAFC]" />,
    url: 'https://github.com/KamalJindal1047',
    username: 'KamalJindal1047',
    badge: 'Active Collaborator',
    stats: [
      { label: 'Public Repositories', value: '12+' },
      { label: 'Yearly Contributions', value: '150+' },
      { label: 'Primary Language', value: 'JavaScript' },
    ],
    highlights: ['Maintains code repositories for OOP design projects and web applications.', 'Publishes utility scripts and responsive styling configurations.'],
    themeColor: 'hover:border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]',
  },
  {
    name: 'HackerRank',
    icon: <HackerRankLogo />,
    url: 'https://www.hackerrank.com/profile/kamal_jindal_cs23',
    username: 'kamal_jindal_cs23',
    badge: '5-Star Coder',
    stats: [
      { label: 'Problem Solving Star', value: '★★★★★' },
      { label: 'Java Badge', value: 'Gold' },
      { label: 'Python Badge', value: 'Gold' },
    ],
    highlights: ['Obtained gold badges verifying proficiency in Java and Python.', 'Achieved certifications validating basic problem-solving principles.'],
    themeColor: 'hover:border-[#2EC866]/40 shadow-[0_0_15px_rgba(46,200,102,0.05)] hover:shadow-[0_0_25px_rgba(46,200,102,0.15)]',
  },
];

export default function CodingProfiles() {
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
    <section id="coding-profiles" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">Coding Profiles</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            My programming profiles, problem-solving analytics, and open-source contributions.
          </p>
        </div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-between text-left transition-all duration-300 relative group h-full ${profile.themeColor}`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-white/5 border border-glass-border rounded-xl group-hover:scale-105 transition-transform">
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-primary leading-snug group-hover:text-brand-cyan transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-secondary font-mono">{profile.username}</p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/20 px-3 py-1 rounded-full">
                    {profile.badge}
                  </span>
                </div>

                {/* Stats Matrix */}
                <div className="grid grid-cols-3 gap-4 border-y border-glass-border py-4">
                  {profile.stats.map((stat, sIndex) => (
                    <div key={sIndex} className="text-center space-y-1">
                      <p className="text-2xl font-bold font-display text-primary">{stat.value}</p>
                      <p className="text-[10px] text-secondary font-medium uppercase tracking-wider leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Core Highlights</h4>
                  <ul className="space-y-2 text-secondary text-xs sm:text-sm">
                    {profile.highlights.map((hl, hlIndex) => (
                      <li key={hlIndex} className="flex items-start">
                        <FiCheck className="text-brand-cyan shrink-0 mr-2 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-6 mt-4">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl glass border border-brand-cyan/20 text-brand-cyan text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 hover:bg-brand-cyan/10 hover:border-brand-cyan/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>View Profile</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
