import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center h-[50vh] max-h-[400px] min-h-[250px] pointer-events-none mix-blend-difference text-white">
      
      {/* Track */}
      <div className="relative w-[2px] flex-1 bg-white/20 rounded-full">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ height: '100%', scaleY: smoothProgress, originY: 0 }}
        />
        
        {/* Glowing Orb at the current position */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"
          style={{ 
            top: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
            y: '-50%' 
          }}
        />
      </div>

    </div>
  );
};

export default ScrollIndicator;
