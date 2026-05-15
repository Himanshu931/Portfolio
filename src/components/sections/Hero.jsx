import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    if (sphereRef.current) {
      gsap.to(sphereRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#78B9B5]/15 blur-[120px] rounded-full z-0"></div>
      <div className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] bg-[#065084]/10 blur-[150px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase font-inter border border-white/80 shadow-sm">
            👋 Welcome to my portfolio
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-text-primary leading-tight font-sora tracking-tighter">
            Himanshu <br />
            <span className="text-[#320A6B]">Prusty.</span>
          </h1>

          <p className="text-lg text-text-secondary max-w-lg leading-relaxed font-inter">
            Frontend Developer + UI Engineer + Problem Solver. Crafting high performance digital experiences with precision and light.
          </p>

          <div className="flex space-x-4 pt-4">
            <a
              href="#projects"
              className="bg-[#065084] text-white px-8 py-3 rounded-full font-medium hover:bg-[#065084]/90 transition-all duration-300 transform hover:scale-[1.02] border border-[#065084]/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white/40 backdrop-blur-sm border border-white/60 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-white/60 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
