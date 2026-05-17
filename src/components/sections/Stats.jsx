import React, { useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

/* =========================================================
   Animated Counter
========================================================= */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [motionValue, isInView, target]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* =========================================================
   Data
========================================================= */

const stats = [
  {
    value: 280,
    suffix: '+',
    label: 'LeetCode Problems',
    sublabel: 'Solved across multiple topics',
    gradient: 'linear-gradient(135deg, #320A6B, #065084)',
  },

  {
    value: 1491,
    label: 'Contest Rating',
    sublabel: 'LeetCode contest rating',
    gradient: 'linear-gradient(135deg, #065084, #0F828C)',
  },

  {
    value: 15,
    suffix: '+',
    label: 'Projects Built',
    sublabel: 'Frontend & full-stack projects',
    gradient: 'linear-gradient(135deg, #0F828C, #065084)',
  },

  {
    value: 548,
    suffix: '+',
    label: 'GitHub Contributions',
    sublabel: 'Yearly coding activity',
    gradient: 'linear-gradient(135deg, #320A6B, #0F828C)',
  },
];

const skills = [
  'Dynamic Programming',
  'Monotonic Stack',
  'Bit Manipulation',
  'Divide & Conquer',
  'React',
  'Node.js',
  'MongoDB',
  'TypeScript',
];

const timeline = [
  {
    year: '2023',
    title: 'Started B.Tech Journey',
  },

  {
    year: '2024',
    title: 'Built First Full Stack Project',
  },

  {
    year: '2025',
    title: 'Solved 200+ LeetCode Problems',
  },

  {
    year: '2026',
    title: 'Built RentItRight Platform',
  },
];

const techStack = [
  {
    name: 'React',
    width: '92%',
  },

  {
    name: 'Node.js',
    width: '80%',
  },

  {
    name: 'MongoDB',
    width: '72%',
  },

  {
    name: 'TypeScript',
    width: '66%',
  },
];

/* =========================================================
   Component
========================================================= */

const Stats = () => {
  return (
    <section
      id="stats"
      className="relative py-32 px-6 overflow-hidden bg-[#f7fbfb]"
    >
      {/* =========================================================
          Background Glows
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[#320A6B]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#0F828C]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================
            Heading
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#0F828C] mb-5">
            Developer Analytics
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#320A6B] font-sora">
            My Coding Journey
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-[#065084] leading-relaxed">
            Competitive programming, open-source contributions,
            shipped products, and continuous learning.
          </p>

          {/* LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com/Himanshu931"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-[#320A6B] text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/Himanshu1003/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-[#320A6B]/15 text-[#320A6B] font-semibold transition-all duration-300 hover:bg-[#320A6B]/5"
            >
              LeetCode
            </a>

            <a
              href="https://codolio.com/profile/himanshu931"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-[#0F828C]/20 text-[#0F828C] font-semibold transition-all duration-300 hover:bg-[#0F828C]/5"
            >
              Codolio
            </a>
          </div>
        </motion.div>

        {/* =========================================================
            Top Grid
        ========================================================= */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* =========================================================
              LeetCode Card
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 rounded-[2rem] p-8 bg-white/60 backdrop-blur-xl border border-[#320A6B]/10 shadow-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-[#320A6B]">
                  LeetCode
                </h3>

                <p className="text-sm text-[#065084] mt-1">
                  Problem Solving Profile
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#320A6B]/10 flex items-center justify-center text-2xl">
                ⚡
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-5xl font-bold text-[#320A6B]">
                  <AnimatedCounter target={280} suffix="+" />
                </div>

                <p className="text-[#065084] mt-2">
                  Problems Solved
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 bg-[#320A6B]/5">
                  <div className="text-2xl font-bold text-[#320A6B]">
                    1491
                  </div>

                  <p className="text-sm text-[#065084] mt-1">
                    Contest Rating
                  </p>
                </div>

                <div className="rounded-2xl p-4 bg-[#0F828C]/5">
                  <div className="text-2xl font-bold text-[#320A6B]">
                    503K
                  </div>

                  <p className="text-sm text-[#065084] mt-1">
                    Global Rank
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#320A6B] mb-4">
                  Strong Topics
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-full bg-[#320A6B]/10 text-[#320A6B] text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              GitHub Heatmap
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-[2rem] p-8 bg-white/60 backdrop-blur-xl border border-[#320A6B]/10 shadow-xl"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold text-[#320A6B]">
                  GitHub Contributions
                </h3>

                <p className="text-sm text-[#065084] mt-1">
                  Daily coding consistency
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#0F828C]/10 flex items-center justify-center text-2xl">
                🚀
              </div>
            </div>

            <div className="overflow-x-auto">
              <GitHubCalendar
                username="Himanshu931"
                blockSize={15}
                blockMargin={5}
                fontSize={14}
              />
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            Stats Cards
        ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-[1.8rem] p-7 bg-white/60 backdrop-blur-xl border border-[#320A6B]/10 shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="w-full h-1 rounded-full mb-6"
                style={{
                  background: stat.gradient,
                }}
              />

              <div
                className="text-4xl font-bold mb-2"
                style={{
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix || ''}
                />
              </div>

              <h4 className="text-lg font-bold text-[#320A6B]">
                {stat.label}
              </h4>

              <p className="text-sm mt-2 text-[#065084]">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            Tech Stack
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] p-8 mb-14 bg-white/60 backdrop-blur-xl border border-[#320A6B]/10 shadow-xl"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold text-[#320A6B]">
                Most Used Stack
              </h3>

              <p className="text-[#065084] mt-2">
                Technologies I frequently build with
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#065084]/10 flex items-center justify-center text-2xl">
              💻
            </div>
          </div>

          <div className="space-y-7">
            {techStack.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-[#320A6B]">
                    {item.name}
                  </span>

                  <span className="text-[#065084]">
                    {item.width}
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-[#320A6B]/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-[#320A6B] to-[#0F828C]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            Codolio Section
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] p-8 mb-14 bg-white/60 backdrop-blur-xl border border-[#320A6B]/10 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#0F828C] mb-4">
                Unified Developer Profile
              </p>

              <h3 className="text-4xl font-bold text-[#320A6B] mb-5">
                Codolio Analytics
              </h3>

              <p className="max-w-2xl text-[#065084] leading-relaxed">
                A centralized developer profile combining coding
                platforms, projects, GitHub activity, and technical
                growth journey.
              </p>
            </div>

            <a
              href="https://codolio.com/profile/himanshu931"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#320A6B] to-[#0F828C] text-white font-semibold transition-all duration-300 hover:scale-105 w-fit"
            >
              Visit Codolio
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-2xl p-6 bg-[#320A6B]/5 border border-[#320A6B]/10">
              <div className="text-3xl mb-4">⚡</div>

              <h4 className="text-xl font-bold text-[#320A6B] mb-3">
                Coding Analytics
              </h4>

              <p className="text-sm text-[#065084] leading-relaxed">
                Track coding progress, DSA growth,
                contest ratings, and activity.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#0F828C]/5 border border-[#0F828C]/10">
              <div className="text-3xl mb-4">🚀</div>

              <h4 className="text-xl font-bold text-[#320A6B] mb-3">
                Developer Portfolio
              </h4>

              <p className="text-sm text-[#065084] leading-relaxed">
                Showcase projects, skills,
                achievements, and open-source work.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#065084]/5 border border-[#065084]/10">
              <div className="text-3xl mb-4">📈</div>

              <h4 className="text-xl font-bold text-[#320A6B] mb-3">
                Growth Journey
              </h4>

              <p className="text-sm text-[#065084] leading-relaxed">
                Visualize your development consistency,
                learning, and improvement over time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            Timeline
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] p-8 bg-white/60 backdrop-blur-xl border border-[#320A6B]/10 shadow-xl"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold text-[#320A6B]">
                Journey Timeline
              </h3>

              <p className="text-[#065084] mt-2">
                Important milestones in my coding journey
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#320A6B]/10 flex items-center justify-center text-2xl">
              📅
            </div>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-[#320A6B]" />

                  {index !== timeline.length - 1 && (
                    <div className="w-[2px] flex-1 bg-[#320A6B]/20 mt-2" />
                  )}
                </div>

                <div className="pb-8">
                  <p className="text-sm uppercase tracking-widest text-[#0F828C] mb-1">
                    {item.year}
                  </p>

                  <h4 className="text-xl font-bold text-[#320A6B]">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;