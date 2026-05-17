import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Cpu, FolderOpen, Activity, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('about');

  const navItems = [
    {
      id: 'about', label: 'About', icon: (
        <Fingerprint className="h-5 w-5" strokeWidth={2} />
      ), outlineIcon: (
        <Fingerprint className="h-5 w-5" strokeWidth={1.5} />
      ), href: '#about'
    },
    {
      id: 'skills', label: 'Skills', icon: (
        <Cpu className="h-5 w-5" strokeWidth={2} />
      ), outlineIcon: (
        <Cpu className="h-5 w-5" strokeWidth={1.5} />
      ), href: '#skills'
    },
    {
      id: 'projects', label: 'Projects', icon: (
        <FolderOpen className="h-5 w-5" strokeWidth={2} />
      ), outlineIcon: (
        <FolderOpen className="h-5 w-5" strokeWidth={1.5} />
      ), href: '#projects'
    },
    {
      id: 'stats', label: 'Stats', icon: (
        <Activity className="h-5 w-5" strokeWidth={2.5} />
      ), outlineIcon: (
        <Activity className="h-5 w-5" strokeWidth={1.5} />
      ), href: '#stats'
    },
    {
      id: 'contact', label: 'Contact', icon: (
        <MessageCircle className="h-5 w-5" fill="currentColor" stroke="currentColor" strokeWidth={0} />
      ), outlineIcon: (
        <MessageCircle className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} />
      ), href: '#contact'
    }
  ];


  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const windowHeight = window.innerHeight;
        const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
        let currentActive = active;
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
            currentActive = section.id;
          }
        }
        if (currentActive !== active) {
          setActive(currentActive);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-6">
      <div className="relative w-full flex items-center">

        {/* Center Navbar */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-text-primary/20 backdrop-blur-md rounded-full p-1 flex items-center shadow-sm border border-[#78B9B5]/30 overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative flex items-center rounded-full transition-colors duration-300"
                  style={{ padding: isActive ? '0.625rem 1rem' : '0.625rem' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 flex-shrink-0 ${isActive ? 'text-[#320A6B]' : 'text-[#065084]/70'}`}>
                    {isActive ? item.icon : item.outlineIcon}
                  </span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        key={item.id + '-label'}
                        initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                        animate={{ width: 'auto', opacity: 1, marginLeft: 6 }}
                        exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="relative z-10 font-sora text-xs font-bold text-[#320A6B] overflow-hidden whitespace-nowrap"
                        style={{ display: 'inline-block' }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </motion.nav>
        </div>

        {/* Right Resume Button */}
        <div className="ml-auto">
          <a
            href="#resume"
            className="bg-[#065084] text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-[#065084]/90 transition-all duration-300 transform hover:scale-[1.02] border border-[#065084]/20"
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
