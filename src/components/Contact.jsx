import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    
    setStatus('sending');
    // Simulate sending email
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gradient mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-secondary mt-4 text-base sm:text-lg">
            Feel free to reach out for placements, collaborative projects, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold font-display text-primary">
                Let's discuss opportunities!
              </h3>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                I am actively looking for **Software Engineer**, **Full Stack Developer**, and **Java Developer** placement opportunities. Drop me a line, shoot an email, or give me a call. I usually respond within 24 hours.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 text-left">
              <a
                href="mailto:kamal.jindal_cs23@gla.ac.in"
                className="flex items-center space-x-4 p-5 rounded-2xl glass border border-brand-cyan/10 hover:border-brand-cyan/35 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="p-3.5 bg-brand-cyan/10 text-brand-cyan rounded-xl group-hover:scale-105 transition-transform">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Email Me</h4>
                  <p className="text-sm sm:text-base font-semibold text-primary break-all">
                    kamal.jindal_cs23@gla.ac.in
                  </p>
                </div>
              </a>

              <a
                href="tel:+917055258061"
                className="flex items-center space-x-4 p-5 rounded-2xl glass border border-brand-cyan/10 hover:border-brand-cyan/35 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="p-3.5 bg-brand-cyan/10 text-brand-cyan rounded-xl group-hover:scale-105 transition-transform">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Call Me</h4>
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    +91 7055258061
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-5 rounded-2xl glass border border-brand-cyan/10 hover:border-brand-cyan/35 transition-all duration-300 group">
                <div className="p-3.5 bg-brand-cyan/10 text-brand-cyan rounded-xl group-hover:scale-105 transition-transform">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Location</h4>
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Agra, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Visual indicator bulb */}
            <div className="hidden lg:block bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-5 text-center">
              <p className="text-xs text-secondary leading-relaxed">
                Looking to relocate? Yes! Open to relocate for suitable software developer roles across major technology hubs in India.
              </p>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl glass-card text-left space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-cyan"></div>
              
              <h3 className="text-xl font-bold font-display text-primary mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-navy-950/20 border border-glass-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-primary placeholder-secondary outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-navy-950/20 border border-glass-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-primary placeholder-secondary outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-brand-navy-950/20 border border-glass-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-primary placeholder-secondary outline-none transition-all"
                  placeholder="Placement / Inquiry Topic"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-brand-navy-950/20 border border-glass-border focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4 py-3 text-sm text-primary placeholder-secondary outline-none transition-all resize-none"
                  placeholder="Hi Kamal, I would like to schedule an interview..."
                  required
                />
              </div>

              {/* Status messages */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2 text-[#2EC866] bg-[#2EC866]/10 border border-[#2EC866]/20 p-4 rounded-xl text-sm"
                  >
                    <FiCheckCircle className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message was sent successfully.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2 text-[#F80000] bg-[#F80000]/10 border border-[#F80000]/20 p-4 rounded-xl text-sm"
                  >
                    <FiAlertCircle className="w-5 h-5 shrink-0" />
                    <span>Please fill in all the required fields.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:hover:shadow-none hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
