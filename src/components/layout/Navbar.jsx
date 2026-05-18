import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Fingerprint,
  Cpu,
  FolderOpen,
  Activity,
  MessageCircle,
  X,
  Download
} from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('about');
  const [resumeOpen, setResumeOpen] = useState(false);
  const fileId = "1J2d-c_nza2HBYDS1dTsHfKa3OilMo0X_";

  const resumeView = `https://drive.google.com/file/d/${fileId}/preview`;

  const resumeDownload = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const navItems = [
    {
      id: 'about',
      label: 'About',
      icon: <Fingerprint className="h-5 w-5" strokeWidth={2} />,
      outlineIcon: <Fingerprint className="h-5 w-5" strokeWidth={1.5} />,
      href: '#about'
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: <Cpu className="h-5 w-5" strokeWidth={2} />,
      outlineIcon: <Cpu className="h-5 w-5" strokeWidth={1.5} />,
      href: '#skills'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FolderOpen className="h-5 w-5" strokeWidth={2} />,
      outlineIcon: <FolderOpen className="h-5 w-5" strokeWidth={1.5} />,
      href: '#projects'
    },
    {
      id: 'stats',
      label: 'Stats',
      icon: <Activity className="h-5 w-5" strokeWidth={2.5} />,
      outlineIcon: <Activity className="h-5 w-5" strokeWidth={1.5} />,
      href: '#stats'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: (
        <MessageCircle
          className="h-5 w-5"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={0}
        />
      ),
      outlineIcon: (
        <MessageCircle
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
      ),
      href: '#contact'
    }
  ];

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const windowHeight = window.innerHeight;
        const sections = navItems
          .map(item => document.getElementById(item.id))
          .filter(Boolean);

        let currentActive = active;

        for (const section of sections) {
          const rect = section.getBoundingClientRect();

          if (
            rect.top <= windowHeight * 0.4 &&
            rect.bottom >= windowHeight * 0.4
          ) {
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
  }, [active]);

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 px-6">
        <div className="relative w-full flex items-center">

          {/* Center Navbar */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <motion.nav
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
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
                        section.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="relative flex items-center rounded-full transition-colors duration-300"
                    style={{
                      padding: isActive
                        ? '0.625rem 1rem'
                        : '0.625rem'
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white rounded-full z-0"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 flex-shrink-0 ${isActive
                        ? 'text-[#320A6B]'
                        : 'text-[#065084]/70'
                        }`}
                    >
                      {isActive ? item.icon : item.outlineIcon}
                    </span>

                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          key={item.id + '-label'}
                          initial={{
                            width: 0,
                            opacity: 0,
                            marginLeft: 0
                          }}
                          animate={{
                            width: 'auto',
                            opacity: 1,
                            marginLeft: 6
                          }}
                          exit={{
                            width: 0,
                            opacity: 0,
                            marginLeft: 0
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30
                          }}
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

          {/* Resume Button */}
          <div className="ml-auto">
            <button
              onClick={() => setResumeOpen(true)}
              className="group relative overflow-hidden flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95"
              style={{
                background: '#065084',
                border: '1px solid rgba(120,185,181,0.35)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {/* Teal pulse dot */}
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: '#78B9B5',
                  boxShadow: '0 0 0 2px rgba(120,185,181,0.25)',
                }}
              />

              {/* File icon */}
              <svg
                className="w-3.5 h-3.5 opacity-80 flex-shrink-0"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={1.75}
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M14 3v4a1 1 0 001 1h4" />
                <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
              </svg>

              View Resume

              {/* Glint sweep */}
              <span
                className="pointer-events-none absolute top-0 h-full w-[40%] -skew-x-[18deg] animate-[glint_3.2s_ease-in-out_infinite]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 40
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 40
              }}
              transition={{
                duration: 0.3
              }}
              className="relative w-full max-w-6xl h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
            >

              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-white border-b">
                <h2 className="text-lg font-semibold text-black">
                  Resume
                </h2>

                <div className="flex items-center gap-3">
                  <a
                    href={resumeDownload}
                    className="flex items-center gap-2 bg-[#065084] text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                  >
                    <Download size={16} />
                    Download
                  </a>

                  <button
                    onClick={() => setResumeOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-100 transition"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* PDF */}
              <iframe
                src={resumeView}
                title="Resume"
                className="w-full h-full pt-[72px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;