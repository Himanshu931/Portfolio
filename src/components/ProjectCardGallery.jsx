import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

/**
 * ProjectCardGallery
 * A curved arc card carousel built with CSS 3D + Framer Motion.
 * Shows full project details on each card.
 */
export default function ProjectCardGallery({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef(null);

  const count = projects.length;

  // Spread angle (degrees) of the full arc
  const spread = 30;

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(count - 1, index));
    setActiveIndex(clamped);
  };

  return (
    <div className="relative w-full select-none" style={{ minHeight: 520 }}>
      {/* 3D Stage */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center overflow-visible"
        style={{ perspective: 1200, height: 480 }}
        onMouseDown={(e) => {
          setIsDragging(false);
          dragStartX.current = e.clientX;
        }}
        onMouseMove={(e) => {
          if (Math.abs(e.clientX - dragStartX.current) > 4) setIsDragging(true);
        }}
        onMouseUp={(e) => {
          if (!isDragging) return;
          const delta = e.clientX - dragStartX.current;
          if (delta < -40) goTo(activeIndex + 1);
          if (delta > 40) goTo(activeIndex - 1);
          setIsDragging(false);
        }}
        onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const delta = e.changedTouches[0].clientX - dragStartX.current;
          if (delta < -40) goTo(activeIndex + 1);
          if (delta > 40) goTo(activeIndex - 1);
        }}
      >
        {projects.map((project, i) => {
          const offset = i - activeIndex;
          // Arc math
          const angle = offset * (spread / Math.max(count - 1, 1)) * (count === 1 ? 0 : 1);
          const isActive = i === activeIndex;
          const absOff = Math.abs(offset);

          const rotateY = angle * 2.5;
          const translateX = offset * 340;
          const translateZ = isActive ? 80 : -absOff * 60;
          const scale = isActive ? 1 : 0.82 - absOff * 0.04;
          const opacity = absOff > 2 ? 0 : isActive ? 1 : 0.55 - absOff * 0.05;
          const zIndex = count - absOff;

          return (
            <motion.div
              key={project.title}
              animate={{
                rotateY,
                x: translateX,
                z: translateZ,
                scale,
                opacity,
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              style={{
                position: 'absolute',
                transformStyle: 'preserve-3d',
                zIndex,
                cursor: isActive ? 'default' : 'pointer',
                width: 520,
              }}
              onClick={() => { if (!isDragging && !isActive) goTo(i); }}
            >
              <ProjectCard project={project} isActive={isActive} index={i} />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIndex ? 28 : 8,
              height: 8,
              background: i === activeIndex
                ? 'linear-gradient(90deg, #320A6B, #0F828C)'
                : 'rgba(50, 10, 107, 0.2)',
            }}
          />
        ))}
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={() => goTo(activeIndex - 1)}
        disabled={activeIndex === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20"
        style={{
          background: 'rgba(50, 10, 107, 0.08)',
          border: '1px solid rgba(50, 10, 107, 0.18)',
          color: '#320A6B',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goTo(activeIndex + 1)}
        disabled={activeIndex === count - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20"
        style={{
          background: 'rgba(50, 10, 107, 0.08)',
          border: '1px solid rgba(50, 10, 107, 0.18)',
          color: '#320A6B',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function ProjectCard({ project, isActive, index }) {
  const accentGradient = index % 2 === 0
    ? 'linear-gradient(135deg, #320A6B, #065084)'
    : 'linear-gradient(135deg, #065084, #0F828C)';

  return (
    <div
      className="relative overflow-hidden transition-shadow duration-500"
      style={{
        borderRadius: '1.75rem',
        background: 'rgba(241, 248, 247, 0.65)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: isActive
          ? '1px solid rgba(50, 10, 107, 0.22)'
          : '1px solid rgba(50, 10, 107, 0.1)',
        boxShadow: isActive
          ? '0 24px 64px rgba(50, 10, 107, 0.18), 0 4px 16px rgba(50, 10, 107, 0.1)'
          : '0 4px 24px rgba(50, 10, 107, 0.06)',
      }}
    >
      {/* Accent bar */}
      <div className="h-[3px] w-full" style={{ background: accentGradient }} />

      {/* Project Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: 190, background: 'rgba(50,10,107,0.05)' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            filter: isActive ? 'none' : 'brightness(0.75) saturate(0.7)',
            transform: isActive ? 'scale(1.02)' : 'scale(1)',
          }}
          onError={(e) => {
            // Fallback gradient if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Image overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(241,248,247,0.4) 0%, transparent 60%)' }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest font-inter"
              style={{
                background: 'rgba(50, 10, 107, 0.07)',
                color: '#320A6B',
                border: '1px solid rgba(50, 10, 107, 0.14)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold font-sora mb-2 leading-tight"
          style={{ color: '#320A6B' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed font-inter mb-5"
          style={{ color: '#065084', opacity: 0.85 }}
        >
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-inter transition-all duration-300"
            style={{
              background: accentGradient,
              color: '#F1F8F7',
              boxShadow: '0 4px 14px rgba(50, 10, 107, 0.25)',
            }}
          >
            Live Preview
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium font-inter transition-colors duration-300"
            style={{ color: '#065084' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.572C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
