import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Rent It Right",
    description: "A comprehensive property rental platform making it easier for owners and renters to connect. Built with modern UI/UX principles and smooth interactions.",
    image: "/project_rent_it_right.png",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Nexus UI",
    description: "An interactive dashboard system with real-time data visualization and complex state management, focused on performance and accessibility.",
    image: "/project_nexus.png",
    link: "#",
    tags: ["Next.js", "TS", "D3.js"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-widest font-inter">Portfolio</div>
          <h2 className="text-4xl font-bold text-text-primary font-sora">Featured Projects</h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-last' : ''}`}
              >
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl shadow-gray-100 border border-white/50 bg-white/40 backdrop-blur-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-indigo-50/50 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest font-inter border border-indigo-100/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-text-primary font-sora">{project.title}</h3>
                
                <p className="text-text-secondary leading-relaxed text-lg font-inter">
                  {project.description}
                </p>
                
                <div className="pt-2">
                  <a 
                    href={project.link} 
                    className="text-primary font-semibold hover:text-primary-container inline-flex items-center group font-inter"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
