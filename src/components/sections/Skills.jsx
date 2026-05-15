import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"]
  },
  {
    title: "Programming",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["JavaScript", "TypeScript", "C++", "Python"]
  },
  {
    title: "Backend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Tools",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v2a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
      </svg>
    ),
    skills: ["Git", "VS Code", "Figma", "Docker"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-widest font-inter">Expertise</div>
          <h2 className="text-4xl font-bold text-text-primary font-sora">Skills & Mastery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[1.5rem] shadow-sm hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="w-10 h-10 bg-white/60 border border-white rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {category.icon}
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-4 font-sora">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-indigo-50/50 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-inter border border-indigo-100/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
