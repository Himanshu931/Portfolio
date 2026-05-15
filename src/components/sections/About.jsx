import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#78B9B5]/10 blur-[150px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Statement */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white/40 backdrop-blur-xl border border-white/50 p-10 rounded-[1.5rem] flex flex-col justify-center shadow-sm"
          >
            <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-widest font-inter">The Story</div>
            <h2 className="text-xl md:text-3xl font-bold text-text-primary leading-snug font-sora">
              BTech student passionate about crafting immersive interfaces that bridge the gap between complexity and human intuition.
            </h2>
          </motion.div>

          {/* Stat 1 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/40 backdrop-blur-xl border border-white/50 p-10 rounded-[1.5rem] flex flex-col justify-center items-center text-center shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="text-3xl md:text-5xl font-bold text-[#320A6B] font-sora mb-2">25+</div>
            <div className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-inter">Mobile Center</div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/40 backdrop-blur-xl border border-white/50 p-10 rounded-[1.5rem] flex flex-col justify-center items-center text-center shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="text-3xl md:text-5xl font-bold text-[#320A6B] font-sora mb-2">300+</div>
            <div className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-inter">Web Designs</div>
          </motion.div>

          {/* Card 3 (Full width) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-white/40 backdrop-blur-xl border border-white/50 p-10 rounded-[1.5rem] flex flex-col md:flex-row justify-between items-center shadow-sm hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl font-bold text-text-primary font-sora">Technical Mindset</h3>
              <p className="text-text-secondary font-inter">Focused on scalability, performance, and clean architecture to ensure long-term maintainability.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="w-14 h-14 bg-white/60 border border-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
