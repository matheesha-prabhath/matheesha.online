import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col md:flex-row items-center gap-12 py-12 md:py-20 relative">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

          <motion.div
            className="flex-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 inline-flex bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(200,240,74,0.8)]" />
              <span className="text-xs font-display font-semibold tracking-widest uppercase text-gray-300">Available for opportunities</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.05] tracking-tight text-white">
              <div className="overflow-hidden"><span className="block">Matheesha</span></div>
              <div className="overflow-hidden"><span className="block text-accent">Prabhath.</span></div>
              <div className="overflow-hidden">
                <span className="block text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                  Engineer.
                </span>
              </div>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              Full-stack software engineer & creative media specialist. I build scalable web applications and craft compelling digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Link to="/work" className="group relative px-8 py-4 bg-accent text-bg font-display font-bold tracking-wider uppercase overflow-hidden flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
                <span className="relative z-10">View Work</span>
                <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-white/20 text-white font-display font-bold tracking-wider uppercase hover:bg-white/10 transition-colors flex items-center justify-center">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full flex flex-col items-end gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm group">
              <div className="absolute inset-0 border border-white/20 -translate-x-3 -translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
              <div className="absolute inset-0 bg-accent translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
              <img
                src="/images/profile.jpg"
                alt="Matheesha Prabhath"
                className="w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
              />
            </div>

            <div className="grid grid-cols-2 gap-[1px] bg-white/10 w-full max-w-sm">
              {[
                { num: '3+', label: 'Years Exp.' },
                { num: '5+', label: 'Projects' },
                { num: '2+', label: 'Companies' },
                { num: 'MERN', label: 'Stack' }
              ].map((stat, i) => (
                <div key={i} className="bg-bg p-6 flex flex-col justify-center">
                  <div className="text-3xl font-display font-bold text-white mb-1">
                    {stat.num.replace('+', '')}<span className="text-accent">{stat.num.includes('+') ? '+' : ''}</span>
                  </div>
                  <div className="text-xs font-display tracking-widest uppercase text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 w-full max-w-sm">
              <a href="https://github.com/matheesha-prabhath" target="_blank" rel="noreferrer" className="flex-1 border border-white/10 py-3 flex items-center justify-center gap-2 text-sm font-display tracking-widest uppercase text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <FaGithub size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/matheesha-prabhath/" target="_blank" rel="noreferrer" className="flex-1 border border-white/10 py-3 flex items-center justify-center gap-2 text-sm font-display tracking-widest uppercase text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* MARQUEE SECTION */}
      <div className="border-y border-white/5 py-4 overflow-hidden bg-bg2/50 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Duplicate content for seamless looping */}
          {[1, 2].map((group) => (
            <div key={group} className="flex shrink-0">
              {['React.js', 'Node.js', 'MongoDB', 'Full-Stack Dev', 'Adobe Premiere', 'Photoshop', 'After Effects', 'UI Design', 'REST APIs', 'Git'].map((skill, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-sm font-display font-bold tracking-widest uppercase text-gray-500 px-8">{skill}</span>
                  <span className="text-accent text-xs">✦</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* ABOUT STRIP */}
        <section className="py-32 grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 border-b border-white/5">
          <div>
            <div className="text-accent text-sm font-display tracking-widest uppercase mb-4">About</div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
              I build things<br />
              <span className="text-gray-500 italic font-light">that work.</span>
            </h2>
          </div>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-light">
            <p>
              Fresh graduate from SLIIT with a BSc (Hons) in Information Technology specializing in Software Engineering. I blend technical depth with creative sensibility — whether that's architecting a scalable backend or cutting a compelling video for social media.
            </p>
            <p>
              Currently working as a Web Developer & Media Associate at Imashi Publications, maintaining their e-commerce platform and handling all creative media output.
            </p>
            <div className="pt-6 flex flex-wrap gap-2">
              {['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'REST API', 'Premiere Pro', 'Photoshop'].map((skill) => (
                <span key={skill} className="text-xs font-display tracking-widest uppercase px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WORK PREVIEW */}
        <section className="py-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <div className="text-accent text-sm font-display tracking-widest uppercase mb-4">Projects</div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white">Selected Work</h2>
            </div>
            <Link to="/work" className="border-b border-white/30 text-gray-400 hover:text-white hover:border-accent pb-1 transition-all uppercase tracking-widest font-display text-sm">
              View All Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
            {[
              {
                id: '01',
                name: 'Imashi Books',
                desc: 'Live e-commerce platform for Imashi Publications. Handles book listings, secure checkout, and order management.',
                tech: ['WordPress', 'WooCommerce', 'PHP'],
                link: 'https://imashibooks.com'
              },
              {
                id: '02',
                name: 'Cafe SecretAlly',
                desc: 'MERN-based food delivery system with real-time order management and full restaurant workflow.',
                tech: ['MongoDB', 'Express', 'React', 'Node.js'],
                link: 'https://github.com/matheesha-prabhath/Cafe_SecretAlly'
              }
            ].map((project, i) => (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={i}
                className="group bg-bg hover:bg-bg2 transition-colors p-10 relative overflow-hidden"
              >
                <div className="absolute top-10 right-10 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-accent">
                  <ExternalLink size={24} />
                </div>

                <div className="text-sm font-display font-bold tracking-widest text-gray-600 mb-8">{project.id}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-[10px] font-display tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
