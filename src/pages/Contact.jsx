import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:prabhathmatheesha@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <section className="py-12 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-accent text-sm font-display tracking-widest uppercase mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-accent"></div>
              Get in touch
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-8">
              Let's create <br/><span className="text-gray-500 italic font-light">together.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
              Currently available for freelance opportunities and full-time roles. If you have a project that needs some creative injection or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-8">
              <a href="mailto:prabhathmatheesha@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-display tracking-widest uppercase text-gray-500 mb-1">Email</div>
                  <div className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors">prabhathmatheesha@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-gray-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-display tracking-widest uppercase text-gray-500 mb-1">Location</div>
                  <div className="text-xl font-display font-bold text-white">Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://github.com/matheesha-prabhath" target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/matheesha-prabhath/" target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest uppercase text-gray-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest uppercase text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest uppercase text-gray-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-gray-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="w-full py-4 bg-white text-bg font-display font-bold tracking-wider uppercase hover:bg-accent transition-colors mt-8">
                Send Message
              </button>
            </form>
          </motion.div>

        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
