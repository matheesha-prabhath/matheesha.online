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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* NEW MODERN HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center py-12 md:py-20 relative">
          {/* Subtle Background Elements */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <motion.div
            className="flex flex-col md:flex-row gap-12 items-center justify-between w-full"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >

            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span className="text-xs font-display font-semibold tracking-widest uppercase text-gray-300">Available for new opportunities</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-extrabold leading-[0.95] tracking-tighter text-white">
                <span className="block text-gray-400">Creative</span>
                <span className="block">Developer<span className="text-accent">.</span></span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                Hi, I'm Matheesha Prabhath. A full-stack engineer and digital creator crafting exceptional web experiences from Sri Lanka.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
                <Link to="/work" className="group relative px-8 py-4 bg-accent text-bg font-display font-bold tracking-wider uppercase overflow-hidden flex items-center gap-2 hover:bg-white transition-colors duration-300">
                  <span>Explore Work</span>
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </Link>
                <div className="flex gap-4 items-center ml-4">
                  <a href="https://github.com/matheesha-prabhath" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:bg-white/5 transition-all duration-300">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/matheesha-prabhath/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:bg-white/5 transition-all duration-300">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Modern Glassmorphism Card */}
            <motion.div
              className="flex-1 w-full max-w-md relative"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent blur-2xl -z-10 rounded-[2rem]" />
              <div className="bg-bg2/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 relative overflow-hidden group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src="/images/profile.jpg"
                    alt="Matheesha Prabhath"
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-bg/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div>
                      <div className="text-3xl font-display font-bold text-white">3<span className="text-accent">+</span></div>
                      <div className="text-[10px] font-display tracking-widest uppercase text-gray-500">Years Exp</div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div>
                      <div className="text-3xl font-display font-bold text-white">MERN</div>
                      <div className="text-[10px] font-display tracking-widest uppercase text-gray-500">Stack</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </section>
      </div>

      {/* MARQUEE SECTION */}
      <div className="border-y border-white/5 py-6 overflow-hidden bg-bg2/30 relative mt-12">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate content for seamless looping */}
          {[1, 2].map((group) => (
            <div key={group} className="flex shrink-0">
              {['React.js', 'Node.js', 'MongoDB', 'Full-Stack Dev', 'Adobe Premiere', 'Photoshop', 'After Effects', 'UI Design', 'REST APIs', 'Git'].map((skill, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-sm font-display font-bold tracking-widest uppercase text-gray-500 px-8 hover:text-white transition-colors">{skill}</span>
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
                <span key={skill} className="text-xs font-display tracking-widest uppercase px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-white/10 transition-colors cursor-default">
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