import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#78B9B5]/15 blur-[120px] rounded-full z-0"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-text-primary leading-tight font-sora tracking-tighter">
            Let's create something <br />
            <span className="text-[#320A6B] italic">meaningful</span> together.
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-inter">
            Currently seeking opportunities to collaborate on innovative projects. Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="mailto:contact@example.com"
              className="bg-[#065084] text-white px-8 py-3 rounded-full font-medium hover:bg-[#065084]/90 transition-all duration-300 transform hover:scale-[1.02] border border-[#065084]/20"
            >
              Get in Touch
            </a>
            <a
              href="#resume"
              className="bg-white/40 backdrop-blur-sm border border-black/10 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-white/60 hover:backdrop-blur-md transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
