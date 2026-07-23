import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Work = () => {
  const projects = [
    {
      id: '01',
      name: 'Imashi Books',
      desc: 'Live e-commerce platform for Imashi Publications. Handles book listings, secure checkout, and order management for a Sri Lankan publisher.',
      tech: ['WordPress', 'WooCommerce', 'PHP'],
      link: 'https://imashibooks.com',
      isLive: true
    },
    {
      id: '02',
      name: 'Cafe SecretAlly',
      desc: 'MERN-based food delivery system with real-time order management and full restaurant workflow.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://github.com/matheesha-prabhath/Cafe_SecretAlly',
      isLive: false
    },
    {
      id: '03',
      name: 'Jobsy App',
      desc: 'Mobile job-seeking application connecting candidates with employers, built with Flutter and Firebase.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      link: 'https://github.com/Jobsy-App/Jobsy-App',
      isLive: false
    },
    {
      id: '04',
      name: 'Culture & Tourism Web',
      desc: 'Full-stack web platform showcasing culture and tourism information, built on the MERN stack.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://github.com/matheesha-prabhath/Culture-and-Tourism-Web',
      isLive: false
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <section className="py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 max-w-2xl"
          >
            <div className="text-accent text-sm font-display tracking-widest uppercase mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-accent"></div>
              Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              Selected <br/><span className="text-gray-500 italic font-light">Works.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              A collection of projects showcasing my expertise in building scalable web applications and intuitive digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
            {projects.map((project, i) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-bg hover:bg-bg2 transition-colors p-10 md:p-14 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-10 right-10 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                  {project.isLive ? <ExternalLink size={24} className="text-accent" /> : <FaGithub size={24} className="text-white" />}
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm font-display font-bold tracking-widest text-gray-600">{project.id}</span>
                  {project.isLive && (
                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full">
                      Live
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed mb-12 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-[10px] font-display tracking-widest uppercase px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Work;
