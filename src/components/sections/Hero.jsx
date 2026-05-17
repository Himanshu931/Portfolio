import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { gsap } from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  // ── TEXT (fades + lifts simultaneously with everything else) ──
  const textOpacity = useTransform(smoothProgress, [0.0, 0.65], [1, 0]);
  const textY = useTransform(smoothProgress, [0.0, 0.65], [0, -60]);

  // ── IMAGE (slides left, x only) ──
  const imageX = useTransform(smoothProgress, [0.0, 0.8], ["0%", "-115%"]);

  // ── ABOUT CARD (rises from below) ──
  const aboutY = useTransform(smoothProgress, [0.0, 0.8], ["110%", "0%"]);
  const aboutOpacity = useTransform(smoothProgress, [0.0, 0.4], [0, 1]);



  // ── BACKGROUND PARALLAX ──
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative h-[250vh] bg-[#f8fafc]"
    >

      {/* AMBIENT GLOWS */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#78B9B5]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#320A6B]/15 blur-[150px] rounded-full" />
      </motion.div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6">
        <motion.div
          style={{}}
          className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10"
        >

          {/* ── LEFT CONTENT ── */}
          <motion.div style={{ opacity: textOpacity, y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white shadow-sm text-xs tracking-[0.25em] uppercase font-semibold text-[#065084]">
                ✦ Full Stack Developer
              </div>

              <div className="space-y-2">
                <h1 className="text-6xl md:text-[7.5rem] font-black leading-[0.9] tracking-[-0.08em] text-[#0f172a]">
                  Himanshu
                </h1>
                <h1 className="text-6xl md:text-[7.5rem] font-black leading-[0.9] tracking-[-0.08em]">
                  <span className="bg-gradient-to-r from-[#065084] via-[#320A6B] to-[#78B9B5] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    Prusty
                  </span>
                </h1>
              </div>

              <p className="max-w-xl text-base md:text-lg leading-relaxed text-slate-600">
                Building immersive and scalable digital experiences with modern web technologies, thoughtful design, and performance-driven engineering.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="#projects"
                  className="px-8 py-4 rounded-full bg-[#065084] text-white font-medium shadow-lg shadow-[#065084]/20 transition-all"
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-white/70 backdrop-blur-xl border border-white text-slate-800 font-medium shadow-md"
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ──
              About card is in normal flow (sets column height).
              Photo is absolute on top → slides left while card rises behind it.
          ── */}
          <div className="hidden lg:flex justify-center relative">

            {/* ABOUT CARD — rises up */}
            <motion.div
              style={{ y: aboutY, opacity: aboutOpacity }}
              className="relative w-full max-w-[520px] mx-auto flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#065084]" />
                  <span className="text-sm tracking-[0.2em] uppercase font-semibold text-[#065084]">
                    The Developer
                  </span>
                </div>

                <div>
                  <h2 className="text-4xl font-black leading-tight tracking-tight text-[#0f172a]">
                    Engineering with <br />
                    <span className="text-[#320A6B]">Precision & Soul</span>
                  </h2>
                </div>

                <div className="space-y-5 text-slate-600 leading-relaxed text-[17px] pt-2">
                  <p>
                    Hi, I'm <span className="font-bold text-slate-800">Himanshu Prusty</span>. I bridge the gap between elegant design and complex engineering.
                  </p>
                  <p>
                    Rather than just writing code, my focus is on crafting robust, scalable architectures that power seamless, pixel-perfect user experiences. Every line I write is geared towards high performance and maintainability.
                  </p>
                  <p>
                    Currently, I'm deep into the modern web ecosystem—building enterprise-grade applications with <span className="font-semibold text-slate-800">React, Next.js, Node.js, and TypeScript</span>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {["Architecture", "UI Engineering", "Performance", "Scalability"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-[#065084]/5 text-[#065084] text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* PHOTO — slides left */}
            <motion.div
              style={{ x: imageX }}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div ref={imageRef} className="relative w-full max-w-[460px] mx-auto mt-12">
                <div className="absolute inset-0 bg-gradient-to-r from-[#065084]/20 to-[#320A6B]/20 blur-3xl scale-110 rounded-full pointer-events-none" />

                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/30 shadow-2xl backdrop-blur-xl bg-white/10">
                  <div className="absolute inset-0 rounded-[2.5rem] p-[1px] bg-gradient-to-br from-white/60 via-transparent to-white/20" />
                  <img
                    src="/Me.jpeg"
                    alt="Himanshu Prusty"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-16 top-16 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl border border-white"
                >
                  <p className="text-sm font-semibold text-slate-800">UI Engineer</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -right-12 bottom-20 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl border border-white"
                >
                  <p className="text-sm font-semibold text-slate-800">Problem Solver</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 8s ease infinite; }
      `}</style>
    </section>
  );
};

export default Hero;