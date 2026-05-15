import React from 'react';
import { motion } from 'framer-motion';

const Algorithm = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#78B9B5]/15 blur-[120px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase font-inter border border-white/80 shadow-sm">
            Data Structures & Algorithms
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight font-sora">
            Algorithm & <br />
            Performance Mastery
          </h2>

          <p className="text-text-secondary max-w-lg leading-relaxed text-lg font-inter">
            Committed to writing efficient code. Solving complex problems on LeetCode and Codeforces with a focus on optimization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div>
              <div className="text-4xl font-bold text-[#320A6B] font-sora">1500+</div>
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-inter mt-1">Problems Solved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#320A6B] font-sora">Top 5%</div>
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-inter mt-1">Global Rank</div>
            </div>
          </div>
        </motion.div>

        {/* Image Content (Code Editor) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl shadow-gray-100 border border-white/50 bg-white/40 backdrop-blur-xl">
            <img
              src="/algorithm_mastery.png"
              alt="Code Editor"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Algorithm;
