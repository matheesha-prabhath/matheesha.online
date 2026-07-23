import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, MonitorPlay } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Creative = () => {
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
              Media
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              Creative <br/><span className="text-gray-500 italic font-light">Output.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Beyond writing code, I specialize in digital media production, crafting compelling visual narratives through video editing and graphic design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 mb-20">
            {[
              { icon: <Film size={32} />, title: "Video Production", desc: "Professional video editing using Adobe Premiere Pro and After Effects for social media and commercial use." },
              { icon: <Camera size={32} />, title: "Graphic Design", desc: "Crafting impactful visual assets, social media posts, and branding materials with Adobe Photoshop." },
              { icon: <MonitorPlay size={32} />, title: "Content Strategy", desc: "Developing and executing creative content strategies that align with brand identity and engage audiences." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg p-10 hover:bg-white/5 transition-colors group"
              >
                <div className="text-gray-600 mb-8 group-hover:text-accent transition-colors duration-300 group-hover:scale-110 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
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
