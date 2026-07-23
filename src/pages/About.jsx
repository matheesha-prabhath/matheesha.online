import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const experiences = [
    {
      role: "Web Developer & Media Associate",
      company: "Imashi Publications",
      period: "Present",
      desc: "Maintaining e-commerce platform and handling all creative media output."
    },
    {
      role: "Software Engineering Graduate",
      company: "SLIIT",
      period: "2024",
      desc: "BSc (Hons) in Information Technology specializing in Software Engineering."
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <section className="py-12 md:py-24 grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-accent text-sm font-display tracking-widest uppercase mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-accent"></div>
              Biography
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-8">
              The person <br/><span className="text-gray-500 italic font-light">behind code.</span>
            </h1>

            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-10">
              <p>
                I am a passionate software engineer based in Sri Lanka, constantly seeking out innovative solutions to everyday problems. My journey into tech was driven by a deep curiosity about how things work under the hood.
              </p>
              <p>
                Having recently graduated from SLIIT with a BSc (Hons) in Software Engineering, I bring a solid foundation in computer science principles coupled with hands-on experience in modern web technologies, particularly the MERN stack.
              </p>
              <p>
                But I don't just write code. I have a strong background in creative media—video editing, motion graphics, and UI design. This duality allows me to approach development not just logically, but aesthetically, ensuring the end product is as beautiful as it is functional.
              </p>
            </div>

            <button className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-display font-bold tracking-wider uppercase hover:bg-white/10 transition-colors">
              <Download size={18} />
              Download Resume
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-16">

            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-4">
                <span className="text-accent text-sm">01 //</span> Experience & Education
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-white/10">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-bg border-2 border-accent" />
                    <div className="text-accent text-xs font-display tracking-widest uppercase mb-2">{exp.period}</div>
                    <h4 className="text-xl font-display font-bold text-white mb-1">{exp.role}</h4>
                    <div className="text-gray-500 text-sm font-display tracking-widest uppercase mb-3">{exp.company}</div>
                    <p className="text-gray-400 text-sm">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-4">
                <span className="text-accent text-sm">02 //</span> Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
                {[
                  { category: "Frontend", tech: "React.js, Tailwind CSS, HTML/CSS" },
                  { category: "Backend", tech: "Node.js, Express, Java, PHP" },
                  { category: "Database", tech: "MongoDB, Firebase, MySQL" },
                  { category: "Creative", tech: "Premiere Pro, Photoshop, After Effects" }
                ].map((skill, i) => (
                  <div key={i} className="bg-bg p-6">
                    <div className="text-white font-display font-bold mb-2">{skill.category}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{skill.tech}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
