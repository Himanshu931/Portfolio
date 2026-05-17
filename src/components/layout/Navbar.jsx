import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('about');

  const navItems = [
    {
      id: 'about', label: 'About', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ), outlineIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ), href: '#about'
    },
    {
      id: 'skills', label: 'Skills', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
      ), outlineIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), href: '#skills'
    },
    {
      id: 'projects', label: 'Projects', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ), outlineIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.97a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.97-2.909a1 1 0 00-1.175 0l-3.97 2.909c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.909c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69l1.519-4.674z" />
        </svg>
      ), href: '#projects'
    },
    {
      id: 'contact', label: 'Contact', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.43-3.9-6.63-6.83l1.96-1.54a1.11 1.11 0 00.24-1.02 11.39 11.39 0 01-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.45 3 3.99 3 13.37 10.63 21 20.01 21c.54 0 .99-.45.99-.99v-3.64c0-.54-.45-.99-.99-.99z" />
        </svg>
      ), outlineIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.68l.6 1.45a1 1 0 01-.24 1.05L7.7 7.07a16.03 16.03 0 006.33 6.33l1.06-1.06a1 1 0 011.05-.24l1.45.6a1 1 0 01.68.94V19a2 2 0 01-2 2h-1c-5.07 0-9.19-4.12-9.19-9.19V5z" />
        </svg>
      ), href: '#contact'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
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
                  className="relative px-4 py-2.5 flex items-center space-x-1.5 text-sm font-medium transition-colors duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-[#320A6B]' : 'text-[#065084]/70'}`}>
                    {isActive ? item.icon : item.outlineIcon}
                  </span>
                  <span className={`relative z-10 font-sora text-xs hidden sm:inline-block ${isActive ? 'text-[#320A6B] font-bold' : 'text-[#065084]/70'}`}>
                    {item.label}
                  </span>
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
