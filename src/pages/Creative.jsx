import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Film, MonitorPlay } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Creative = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <Film size={24} />,
      title: "Video Production",
      desc: "Professional video editing using Adobe Premiere Pro and After Effects for social media and commercial use.",
      details: "I craft engaging visual narratives tailored for digital platforms. From short-form social media reels to full-length commercial edits, I ensure every frame serves a purpose. Expertise includes color grading, motion graphics, and audio mixing."
    },
    {
      icon: <Camera size={24} />,
      title: "Graphic Design",
      desc: "Crafting impactful visual assets, social media posts, and branding materials with Adobe Photoshop.",
      details: "Design isn't just about making things look pretty; it's about communication. I create pixel-perfect digital assets, marketing materials, and brand identities that resonate with the target audience and elevate the brand's visual presence."
    },
    {
      icon: <MonitorPlay size={24} />,
      title: "Content Strategy",
      desc: "Developing and executing creative content strategies that align with brand identity and engage audiences.",
      details: "A great video or design needs a solid plan behind it. I help brands conceptualize their digital output, plan content calendars, and ensure consistency across all media channels to maximize reach and engagement."
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <section className="py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 max-w-2xl"
          >
            <div className="text-accent text-sm font-display tracking-widest uppercase mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-accent"></div>
              Media
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              Creative <br/><span className="text-gray-500 italic font-light">Output.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Beyond writing code, I specialize in digital media production, crafting compelling visual narratives through video editing and graphic design.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start mb-20">
            {/* Tabs List */}
            <div className="flex flex-col gap-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
              {services.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-4 py-4 pl-8 text-left transition-colors duration-300 ${activeTab === i ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {activeTab === i && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`${activeTab === i ? 'text-accent' : ''}`}>
                    {service.icon}
                  </div>
                  <span className="font-display font-bold text-xl uppercase tracking-wider">{service.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 min-h-[300px] flex items-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                   className="relative z-10"
                 >
                   <div className="text-accent mb-6 inline-block p-4 rounded-full bg-white/5 border border-white/10">
                     {services[activeTab].icon}
                   </div>
                   <h3 className="text-3xl font-display font-bold text-white mb-4">{services[activeTab].title}</h3>
                   <p className="text-xl text-gray-300 mb-6 font-light">{services[activeTab].desc}</p>
                   <p className="text-gray-500 leading-relaxed">{services[activeTab].details}</p>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>

          {/* Placeholder for future video/image gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-video bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 text-gray-500"
          >
            <MonitorPlay size={48} className="opacity-20" />
            <p className="font-display tracking-widest uppercase text-sm">Media Showreel Coming Soon</p>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Creative;