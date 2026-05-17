import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Leetcode } from '@boxicons/react';

/* =========================================================
   Animated Counter
========================================================= */
function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(springValue, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, motionValue, target]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* =========================================================
   Noise texture SVG
========================================================= */
/* NoiseBg removed — feTurbulence SVG filter is GPU-expensive */

/* =========================================================
   Glowing pulsing ring
========================================================= */
const GlowRing = ({ size, cx, cy, color, delay, opacity = 0.12 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: cx - size / 2,
      top: cy - size / 2,
      border: `1px solid ${color}`,
      opacity,
      willChange: 'transform, opacity',
    }}
    animate={{ scale: [1, 1.05, 1], opacity: [opacity, opacity * 1.5, opacity] }}
    transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

/* =========================================================
   Difficulty pill row
========================================================= */
function DiffPill({ label, count, color }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
      <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
      <span className="ml-auto text-sm font-bold" style={{ color }}>
        <AnimatedCounter target={count}/>
      </span>
    </div>
  );
}

/* =========================================================
   Stats Component
========================================================= */
const Stats = () => {
  const [hovered, setHovered] = useState(null);
  const [data, setData] = useState(null);
  const [githubData, setGithubData] = useState(null);

  // const [contestRank, setContestRank] = useState(null);

  // useEffect(() => {
  //   const url = 'https://coderme.vercel.app/leetcode/Himanshu1003';
  //   fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const parsed = JSON.parse(data.contents);
  //       console.log(parsed);
  //     });
  // }, []);

  useEffect(() => {
    fetch('https://leetcode-api-faisalshohag.vercel.app/Himanshu1003')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch LeetCode data');
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error('Error fetching LeetCode stats:', err);
      });

    fetch('https://github-contributions-api.jogruber.de/v4/Himanshu931')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch GitHub contributions data');
        return res.json();
      })
      .then((json) => {
        setGithubData(json);
      })
      .catch((err) => {
        console.error('Error fetching GitHub contributions:', err);
      });
  }, []);

  const totalSolved = data?.totalSolved || 320;
  const easySolved = data?.easySolved || 166;
  const mediumSolved = data?.mediumSolved || 139;
  const hardSolved = data?.hardSolved || 15;
  const ranking = data?.ranking || 415618;

  const allSub = data?.totalSubmissions?.find((s) => s.difficulty === 'All');
  const acceptanceRate = allSub
    ? Math.round((allSub.count / allSub.submissions) * 100)
    : 52;

  // Compute dynamic GitHub details
  const currentYear = new Date().getFullYear();
  const githubContributionsThisYear = githubData?.total?.[currentYear] || 0;
  const githubTotalContributions = githubData?.total
    ? Object.values(githubData.total).reduce((sum, val) => sum + val, 0)
    : 0;

  // Calculate max streak from contributions
  let maxStreak = 30; // fallback default
  if (githubData?.contributions) {
    let currentStreak = 0;
    let computedMax = 0;
    // The contributions are sorted chronologically
    githubData.contributions.forEach((day) => {
      if (day.count > 0) {
        currentStreak++;
        if (currentStreak > computedMax) {
          computedMax = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    });
    if (computedMax > 0) {
      maxStreak = computedMax;
    }
  }

  const bottomMetrics = [
    {
      label: 'Acceptance Rate',
      value: data ? acceptanceRate : 54,
      suffix: '%',
      color: '#a78bfa',
      desc: 'LeetCode profile',
    },
    {
      label: 'Max Streak',
      value: githubData ? maxStreak : 30,
      suffix: 'd',
      color: '#34d399',
      desc: 'GitHub daily',
    },
    {
      label: 'Contests Joined',
      value: 18,
      suffix: '+',
      color: '#60a5fa',
      desc: 'LeetCode',
    },
    {
      label: 'Public Repos',
      value: 15,
      suffix: '+',
      color: '#f472b6',
      desc: 'GitHub',
    },
  ];

  return (
    <section
      id="stats"
      className="relative overflow-hidden py-20 px-6"
      style={{ background: 'linear-gradient(135deg, #0d0720 0%, #0a1628 50%, #07181f 100%)' }}
    >
      {/* removed: <NoiseBg /> */}

      {/* Ambient glow rings — 2 rings instead of 4 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowRing size={700} cx={-60} cy={220} color="#7c3aed" delay={0} opacity={0.1} />
        <GlowRing size={600} cx={1420} cy={420} color="#0f828c" delay={1.5} opacity={0.1} />
        <div
          className="absolute"
          style={{
            width: 1000,
            height: 600,
            left: '50%',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, rgba(15,130,140,0.04) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em]"
            style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', color: '#a78bfa' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
            Developer Stats
          </div>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #e2d9f3 0%, #a78bfa 45%, #34d399 100%)' }}
            >
              Coding in
            </span>
            <span className="block" style={{ color: 'rgba(255,255,255,0.92)' }}>Numbers.</span>
          </h2>

          <p className="max-w-md mx-auto text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.32)' }}>
            LeetCode grind meets daily GitHub hustle — everything quantified.
          </p>
        </motion.div>

        {/* ============================================================
            BENTO GRID
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">

          {/* ── Hero: Problems Solved ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            onHoverStart={() => setHovered('hero')}
            onHoverEnd={() => setHovered(null)}
            className="lg:col-span-4 rounded-[1.5rem] p-6 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(124,58,237,0.2) 0%, rgba(15,130,140,0.1) 100%)',
              border: '1px solid rgba(167,139,250,0.18)',
              minHeight: 270,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
              animate={{ opacity: hovered === 'hero' ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ background: 'radial-gradient(ellipse at 25% 25%, rgba(167,139,250,0.18) 0%, transparent 60%)', willChange: 'opacity' }}
            />
            {/* Deco circle */}
            <div
              className="absolute -right-14 -top-14 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)', border: '1px solid rgba(167,139,250,0.08)' }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-base">
                  <Leetcode />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(167,139,250,0.8)' }}>LeetCode</span>
                <a
                  href="https://leetcode.com/u/Himanshu1003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors duration-200 hover:bg-white/10"
                  style={{ color: 'rgba(255,255,255,0.28)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  Visit ↗
                </a>
              </div>

              <div
                className="text-[4.5rem] font-black tracking-tighter leading-none"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  background: 'linear-gradient(135deg, #ffffff 20%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <AnimatedCounter target={totalSolved} duration={2.5} />
              </div>
              <p className="mt-1.5 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Problems Solved
              </p>
            </div>

            <div
              className="relative z-10 mt-4 pt-4 flex flex-col gap-2.5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <DiffPill label="Easy" count={easySolved} color="#34d399" />
              <DiffPill label="Medium" count={mediumSolved} color="#fbbf24" />
              <DiffPill label="Hard" count={hardSolved} color="#f87171" />
            </div>
          </motion.div>

          {/* ── GitHub card — expanded to fill remaining 8 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            onHoverStart={() => setHovered('github')}
            onHoverEnd={() => setHovered(null)}
            className="lg:col-span-8 rounded-[1.5rem] p-6 relative overflow-hidden flex flex-col"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(15,130,140,0.22)',
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
              animate={{ opacity: hovered === 'github' ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ background: 'radial-gradient(ellipse at 70% 25%, rgba(15,130,140,0.14), transparent 65%)', willChange: 'opacity' }}
            />
            <div
              className="absolute -right-12 -top-12 w-44 h-44 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(15,130,140,0.09), transparent 70%)', border: '1px solid rgba(15,130,140,0.1)' }}
            />

            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4 relative z-10">
              <span className="text-base flex items-center justify-center text-[#34d399]">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(52,211,153,0.78)' }}>GitHub</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>Live</span>
                <a
                  href="https://github.com/Himanshu931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-lg ml-1.5 transition-colors duration-200 hover:bg-white/10"
                  style={{ color: 'rgba(255,255,255,0.28)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  @Himanshu931 ↗
                </a>
              </div>
            </div>

            {/* Contribution count */}
            <div className="mb-4 relative z-10">
              <div
                className="text-5xl font-black tracking-tight leading-none"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  background: 'linear-gradient(135deg, #ffffff 15%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <AnimatedCounter target={githubData ? githubTotalContributions : 548} suffix="+" duration={2} />
              </div>
              <p className="mt-1 text-sm font-medium flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.38)' }}>
                <span>Total Contributions</span>
                {githubData && (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-[#34d399] font-bold">{githubContributionsThisYear} in {currentYear}</span>
                  </>
                )}
              </p>
            </div>

            {/* Calendar — wider now with larger block size */}
            <div className="relative z-10 overflow-x-auto no-scrollbar flex-1 flex items-end">
              <div className="min-w-0 w-full">
                <GitHubCalendar
                  username="Himanshu931"
                  blockSize={13}
                  blockMargin={3}
                  fontSize={12}
                  colorScheme="dark"
                  theme={{
                    light: ['rgba(255,255,255,0.05)', '#1a4731', '#166534', '#15803d', '#34d399'],
                    dark: ['rgba(255,255,255,0.05)', '#1a4731', '#166534', '#15803d', '#34d399'],
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom metrics strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {bottomMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              className="rounded-[1.25rem] px-5 py-4 relative overflow-hidden group cursor-default"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.25rem] pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${m.color}18, transparent 70%)` }}
              />
              <div
                className="text-2xl font-black tracking-tight relative z-10"
                style={{ color: m.color, fontFamily: 'Sora, sans-serif' }}
              >
                <AnimatedCounter target={m.value} suffix={m.suffix} duration={1.8} />
              </div>
              <p className="text-xs font-semibold mt-1 relative z-10" style={{ color: 'rgba(255,255,255,0.48)' }}>
                {m.label}
              </p>
              <p className="text-[11px] mt-0.5 relative z-10" style={{ color: 'rgba(255,255,255,0.2)' }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Footer links ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { label: 'GitHub Profile', href: 'https://github.com/Himanshu931' },
            { label: 'LeetCode Profile', href: 'https://leetcode.com/u/Himanshu1003/' },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.88)';
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)';
                e.currentTarget.style.background = 'rgba(167,139,250,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label} ↗
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;