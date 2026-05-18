import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Rent It Right',
    description:
      'A full-stack rental marketplace platform designed to simplify the renting experience for both owners and renters with modern UI/UX and smooth booking flows.',
    image: '/rent-it-right.png',
    link: 'https://rentitright.vercel.app/',
    github: 'https://github.com/Himanshu931/RentItRight',
    tags: ['React', 'Node.js', 'MongoDB'],
    featured: true,
  },
  {
    title: 'Nexus UI',
    description:
      'An interactive dashboard system focused on real-time visualization, accessibility, and scalable component architecture.',
    image: '/project_nexus.png',
    link: '#',
    github: '#',
    tags: ['Next.js', 'TypeScript', 'D3.js'],
    featured: false,
  },
  {
    title: 'DevFlow',
    description:
      'A developer productivity tool that streamlines code review workflows with AI-powered suggestions, inline comments, and team collaboration features.',
    image: '/project_nexus.png',
    link: '#',
    github: '#',
    tags: ['React', 'Python', 'FastAPI'],
    featured: false,
  },
  {
    title: 'Lumina AI',
    description:
      'An AI-driven content generation platform that helps creators draft, edit, and publish blogs, social posts, and marketing copy at scale.',
    image: '/project_nexus.png',
    link: '#',
    github: '#',
    tags: ['Next.js', 'OpenAI', 'Prisma'],
    featured: false,
  },
];

/* ── shared link components ───────────────────────────────────────── */
function LiveLink({ href, gradient }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-inter transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
      style={{
        background: gradient,
        color: '#F1F8F7',
        boxShadow: '0 4px 18px rgba(50, 10, 107, 0.28)',
      }}
    >
      Live Preview
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}

function GithubLink({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-inter transition-all duration-300 hover:scale-[1.03]"
      style={{
        color: '#320A6B',
        background: 'rgba(50,10,107,0.07)',
        border: '1px solid rgba(50,10,107,0.16)',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.572C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
      GitHub
    </a>
  );
}

/* ── Tag pill ─────────────────────────────────────────────────────── */
function Tag({ label }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest font-inter"
      style={{
        background: 'rgba(50,10,107,0.07)',
        color: '#320A6B',
        border: '1px solid rgba(50,10,107,0.14)',
      }}
    >
      {label}
    </span>
  );
}

/* ── Featured (hero) card ─────────────────────────────────────────── */
function FeaturedCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="group relative rounded-[2rem] overflow-hidden"
      style={{
        background: 'rgba(241,248,247,0.55)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(50,10,107,0.13)',
        boxShadow: '0 8px 48px rgba(50,10,107,0.1)',
      }}
    >
      {/* top accent */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #320A6B, #065084, #0F828C)' }} />

      <div className="grid md:grid-cols-2 gap-0">
        {/* Image panel */}
        <div className="relative overflow-hidden" style={{ minHeight: 360 }}>
          <img
            src={project.image}
            alt={`${project.title} - Full Stack Project by Himanshu Prusty`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            loading="lazy"
            decoding="async"
          />

          {/* Featured badge */}
          <div
            className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold font-inter uppercase tracking-widest"
            style={{
              background: 'linear-gradient(135deg, #320A6B, #0F828C)',
              color: '#F1F8F7',
              boxShadow: '0 4px 14px rgba(50,10,107,0.35)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            Featured
          </div>
        </div>

        {/* Content panel */}
        <div className="flex flex-col justify-center p-10">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>

          <h3
            className="text-4xl font-bold font-sora leading-tight mb-4"
            style={{ color: '#320A6B' }}
          >
            {project.title}
          </h3>

          <p
            className="text-base leading-relaxed font-inter mb-8"
            style={{ color: '#065084' }}
          >
            {project.description}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <LiveLink href={project.link} gradient="linear-gradient(135deg, #320A6B, #065084)" />
            <GithubLink href={project.github} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Standard card ────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const gradient = index % 2 === 0
    ? 'linear-gradient(135deg, #320A6B, #065084)'
    : 'linear-gradient(135deg, #065084, #0F828C)';

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative rounded-[1.75rem] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2"
      style={{
        background: 'rgba(241,248,247,0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(50,10,107,0.12)',
        boxShadow: '0 4px 24px rgba(50,10,107,0.07)',
      }}
    >
      {/* accent bar */}
      <div className="h-[3px]" style={{ background: gradient }} />

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 180 }}>
        <img
          src={project.image}
          alt={`${project.title} - Web Application by Himanshu Prusty`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(241,248,247,0.5) 0%, transparent 60%)' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>

        <h3
          className="text-lg font-bold font-sora leading-tight mb-2"
          style={{ color: '#320A6B' }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed font-inter mb-4 flex-1"
          style={{ color: '#065084' }}
        >
          {project.description}
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LiveLink href={project.link} gradient={gradient} />
          <GithubLink href={project.github} />
        </div>
      </div>

      {/* hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(50,10,107,0.05), transparent 60%)',
        }}
      />
    </motion.article>
  );
}

const Projects = () => {
  const PER_PAGE = 3;
  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const visibleProjects = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const goNext = () => { setDir(1); setPage((p) => Math.min(p + 1, totalPages - 1)); };
  const goPrev = () => { setDir(-1); setPage((p) => Math.max(p - 1, 0)); };

  const variants = {
    enter: (d) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'rgba(50,10,107,0.06)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'rgba(15,130,140,0.08)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-3xl" style={{ background: 'rgba(6,80,132,0.05)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold font-sora leading-tight" style={{ color: '#320A6B' }}>
            Featured{' '}
            <span className="relative inline-block">
              Projects
              <span
                className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #320A6B, #0F828C)' }}
              />
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-inter" style={{ color: '#065084' }}>
            A collection of projects focused on building immersive,
            performant, and visually polished digital experiences.
          </p>
        </motion.div>

        {/* Grid + pagination */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={page * PER_PAGE + i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Arrows — only when more than 3 projects */}
          {totalPages > 1 && (
            <>
              {/* Left arrow */}
              <button
                onClick={goPrev}
                disabled={page === 0}
                aria-label="Previous projects"
                className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 hover:scale-105 z-10"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 2px 16px rgba(50,10,107,0.12)',
                  border: '1px solid rgba(50,10,107,0.1)',
                  color: '#320A6B',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right arrow */}
              <button
                onClick={goNext}
                disabled={page === totalPages - 1}
                aria-label="Next projects"
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 hover:scale-105 z-10"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 2px 16px rgba(50,10,107,0.12)',
                  border: '1px solid rgba(50,10,107,0.1)',
                  color: '#320A6B',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Page dots — centered below */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > page ? 1 : -1); setPage(i); }}
                    aria-label={`Page ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === page ? 24 : 8,
                      height: 8,
                      background: i === page
                        ? 'linear-gradient(90deg, #320A6B, #0F828C)'
                        : 'rgba(50,10,107,0.18)',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;