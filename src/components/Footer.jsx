import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiChevronUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: <FiLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/kamal-jindal-00151a296/', label: 'LinkedIn' },
  { icon: <FiGithub className="w-5 h-5" />, url: 'https://github.com/KamalJindal1047', label: 'GitHub' },
  { icon: <SiLeetcode className="w-5 h-5" />, url: 'https://leetcode.com/u/KamalJindal/', label: 'LeetCode' },
  { icon: <FiMail className="w-5 h-5" />, url: 'mailto:kamal.jindal_cs23@gla.ac.in', label: 'Email' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-glass-border bg-brand-navy-950/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo Copyright */}
        <div className="text-left space-y-2">
          <a
            href="#home"
            onClick={handleScrollTop}
            className="flex items-center space-x-1 text-xl font-bold font-display"
          >
            <span className="text-gradient font-extrabold">&lt;Kamal</span>
            <span className="text-brand-cyan font-semibold">Jindal /&gt;</span>
          </a>
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} Kamal Jindal. All rights reserved.
          </p>
        </div>

        {/* Quick navigation */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-semibold text-secondary hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social and scroll-to-top */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-secondary hover:text-brand-cyan transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            onClick={handleScrollTop}
            className="p-2.5 rounded-xl glass border border-brand-cyan/20 text-brand-cyan hover:text-brand-blue hover:border-brand-cyan/50 hover:-translate-y-0.5 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <FiChevronUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
