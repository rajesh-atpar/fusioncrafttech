import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import { ArrowRight, Code2, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';

const headlineLines = [
  { text: 'Digital products', style: 'text-white' },
  {
    text: 'that feel years ahead',
    style: 'bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_28%,#60a5fa_56%,#fde68a_92%)] bg-clip-text text-transparent'
  },
  { text: 'from day one', style: 'text-white/92' }
];

const featurePills = [
  { icon: Sparkles, label: 'Experience-first design' },
  { icon: Zap, label: 'Fast release cycles' },
  { icon: Shield, label: 'Enterprise-grade foundations' }
];

const heroStats = [
  { value: '50+', label: 'Launches shipped', tone: 'from-cyan-300/26 to-sky-400/12' },
  { value: '99%', label: 'Client satisfaction', tone: 'from-sky-300/20 to-cyan-300/10' },
  { value: '24/7', label: 'Operational support', tone: 'from-amber-200/18 to-orange-200/8' }
];

const heroParticles = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 13) % 96 + 2}%`,
  top: `${(index * 17) % 78 + 8}%`,
  size: index % 3 === 0 ? 3 : 2,
  driftX: index % 2 === 0 ? 24 + index * 2 : -26 - index * 2,
  driftY: -38 - (index % 5) * 18,
  delay: (index % 6) * 0.55,
  duration: 10 + (index % 4) * 2.2
}));

const revealEase = [0.22, 1, 0.36, 1];

const HeroAction = ({ href, onClick, variant = 'primary', icon: Icon, children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isPrimary = variant === 'primary';

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;

    setOffset({ x, y });
  };

  const resetOffset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      onMouseMove={handleMove}
      onMouseLeave={resetOffset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.55 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      className={`group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-7 text-[15px] font-semibold text-white ${
        isPrimary
          ? 'border border-cyan-300/24 shadow-[0_20px_55px_rgba(8,145,178,0.20)]'
          : 'border border-white/12 shadow-[0_18px_48px_rgba(2,6,23,0.28)]'
      }`}
    >
      <span
        className={`absolute inset-0 ${
          isPrimary
            ? 'bg-[linear-gradient(135deg,rgba(34,211,238,0.34),rgba(59,130,246,0.22),rgba(250,204,21,0.12))]'
            : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]'
        }`}
      />
      <span
        className={`absolute inset-[1px] rounded-full ${
          isPrimary
            ? 'bg-[linear-gradient(135deg,rgba(7,18,34,0.96),rgba(9,21,38,0.92))]'
            : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]'
        }`}
      />
      <span className="absolute inset-y-0 left-[-25%] w-[42%] -skew-x-12 bg-white/12 opacity-0 blur-xl transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {Icon ? (
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.28, ease: revealEase }}
            className="inline-flex"
          >
            <Icon className="h-4 w-4" />
          </motion.span>
        ) : null}
      </span>
    </motion.a>
  );
};

export const Hero = () => {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const pointerX = useMotionValue(540);
  const pointerY = useMotionValue(340);
  const pointerTiltX = useMotionValue(0);
  const pointerTiltY = useMotionValue(0);

  const smoothPointerX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.8 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.8 });
  const smoothTiltX = useSpring(pointerTiltX, { stiffness: 140, damping: 20, mass: 0.8 });
  const smoothTiltY = useSpring(pointerTiltY, { stiffness: 140, damping: 20, mass: 0.8 });

  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${smoothPointerX}px ${smoothPointerY}px, rgba(103, 232, 249, 0.15), transparent 62%)`;

  const visualRotateX = useTransform(smoothTiltY, [-1, 1], [9, -9]);
  const visualRotateY = useTransform(smoothTiltX, [-1, 1], [-12, 12]);
  const floatingShiftX = useTransform(smoothTiltX, [-1, 1], [-22, 22]);
  const floatingShiftY = useTransform(smoothTiltY, [-1, 1], [-18, 18]);
  const reverseShiftX = useTransform(smoothTiltX, [-1, 1], [16, -16]);
  const reverseShiftY = useTransform(smoothTiltY, [-1, 1], [14, -14]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const haloScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.12]);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.18,
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: revealEase
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 34, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.95,
        ease: revealEase
      }
    }
  };

  const scrollToSection = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePointerMove = (event) => {
    if (shouldReduceMotion || !heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;
    const normalizedX = (localX / rect.width - 0.5) * 2;
    const normalizedY = (localY / rect.height - 0.5) * 2;

    pointerX.set(localX);
    pointerY.set(localY);
    pointerTiltX.set(normalizedX);
    pointerTiltY.set(normalizedY);
  };

  const resetPointer = () => {
    pointerTiltX.set(0);
    pointerTiltY.set(0);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="relative isolate overflow-hidden bg-[#050b16]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,47,73,0.68),transparent_42%),linear-gradient(180deg,#050b16_0%,#071222_48%,#08111e_100%)]" />
      <motion.div
        className="absolute inset-0 opacity-90"
        style={{
          background: shouldReduceMotion
            ? 'radial-gradient(circle at top, rgba(103, 232, 249, 0.12), transparent 46%)'
            : spotlight
        }}
      />
      <div className="hero-grid absolute inset-0 opacity-50" />

      <motion.div
        className="absolute left-[5%] top-24 h-64 w-64 rounded-full bg-cyan-400/18 blur-[120px]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 36, 0],
                y: [0, 24, 0],
                scale: [1, 1.12, 1]
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-12 right-[8%] h-72 w-72 rounded-full bg-amber-300/12 blur-[130px]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -28, 0],
                y: [0, -18, 0],
                scale: [1.04, 1, 1.06]
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="pointer-events-none absolute inset-0">
        {heroParticles.map((particle, index) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="absolute rounded-full bg-cyan-100/70"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size
            }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.35 }
                : {
                    x: [0, particle.driftX, 0],
                    y: [0, particle.driftY, 0],
                    opacity: [0.12, 0.75, 0.12],
                    scale: [1, 1.6, 1]
                  }
            }
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:pb-28 lg:pt-40">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          style={{ y: contentY }}
          className="relative z-10 max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-[0.7rem] uppercase tracking-[0.34em] text-cyan-100/70">
              FusionCraft Tech Premium Build System
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-8 font-display text-5xl font-semibold leading-[0.95] text-glow sm:text-6xl lg:text-7xl xl:text-[5.35rem]"
          >
            {headlineLines.map((line) => (
              <motion.span key={line.text} variants={lineVariants} className={`block ${line.style}`}>
                {line.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/88 sm:text-xl"
          >
            We design, engineer, and launch digital experiences with the polish of a category-leading product:
            conversion-focused websites, fast SaaS platforms, mobile apps, and growth systems that feel expensive in the
            best way.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <HeroAction href="#contact" onClick={() => scrollToSection('contact')} variant="primary" icon={ArrowRight}>
              Start a Project
            </HeroAction>
            <HeroAction href="#services" onClick={() => scrollToSection('services')} variant="secondary" icon={Code2}>
              Explore Services
            </HeroAction>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3">
            {featurePills.map((pill) => (
              <div
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72 backdrop-blur-xl"
              >
                <pill.icon className="h-4 w-4 text-cyan-200" />
                <span>{pill.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 hidden gap-4 sm:grid sm:grid-cols-3">
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: revealEase }}
                className="premium-panel rounded-[24px] p-5"
              >
                <div className={`mb-4 h-px w-12 bg-gradient-to-r ${stat.tone}`} />
                <div className="font-display text-3xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-300/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          className="relative mx-auto h-[430px] w-full max-w-[620px] [perspective:1800px] sm:h-[520px] lg:h-[620px]"
        >
          <motion.div
            className="absolute inset-[8%] rounded-full border border-cyan-300/12"
            style={shouldReduceMotion ? undefined : { scale: haloScale }}
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-[18%] rounded-full border border-white/10"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute left-[12%] top-[16%] rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100/75 backdrop-blur-xl"
            style={shouldReduceMotion ? undefined : { x: floatingShiftX, y: floatingShiftY }}
          >
            Motion UI
          </motion.div>
          <motion.div
            className="absolute right-[4%] top-[24%] rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/72 backdrop-blur-xl"
            style={shouldReduceMotion ? undefined : { x: reverseShiftX, y: reverseShiftY }}
          >
            Cloud Scale
          </motion.div>
          <motion.div
            className="absolute bottom-[12%] left-[10%] rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-100/80 backdrop-blur-xl"
            style={shouldReduceMotion ? undefined : { x: reverseShiftX, y: floatingShiftY }}
          >
            AI Systems
          </motion.div>

          <motion.div
            style={shouldReduceMotion ? undefined : { rotateX: visualRotateX, rotateY: visualRotateY }}
            className="absolute inset-6 rounded-[32px] border border-white/12 bg-slate-950/60 p-6 shadow-[0_35px_120px_rgba(2,6,23,0.58)] backdrop-blur-2xl sm:inset-10 sm:p-8 [transform-style:preserve-3d]"
          >
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-[0.68rem] uppercase tracking-[0.4em] text-cyan-100/65">
                    Product Control
                  </div>
                  <div className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Launch with premium velocity
                  </div>
                </div>

                <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.3em] text-emerald-100/80">
                  Live Build
                </div>
              </div>

              <div className="mt-10 grid grid-cols-[1.3fr_0.7fr] gap-4">
                <div className="premium-panel rounded-[26px] p-5">
                  <div className="text-sm uppercase tracking-[0.28em] text-white/45">Growth Lift</div>
                  <div className="font-display mt-3 text-5xl font-semibold text-white">+38%</div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-emerald-200/80">
                    <TrendingUp className="h-4 w-4" />
                    Stronger conversion after launch
                  </div>

                  <div className="mt-6 flex items-end gap-3">
                    {[42, 54, 48, 68, 74, 88].map((height, index) => (
                      <motion.div
                        key={height}
                        className="flex-1 rounded-full bg-[linear-gradient(180deg,rgba(103,232,249,0.92),rgba(56,189,248,0.18))]"
                        initial={{ height: 0 }}
                        animate={{ height }}
                        transition={{ duration: 0.9, delay: 0.3 + index * 0.08, ease: revealEase }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="premium-panel rounded-[24px] p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/45">Avg Latency</div>
                    <div className="font-display mt-3 text-3xl font-semibold text-white">84ms</div>
                    <div className="mt-2 text-sm text-slate-300/68">Cloud-tuned delivery</div>
                  </div>
                  <div className="premium-panel rounded-[24px] p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/45">Coverage</div>
                    <div className="font-display mt-3 text-3xl font-semibold text-white">24/7</div>
                    <div className="mt-2 text-sm text-slate-300/68">Support and iteration</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/45">
                  <span>Delivery Sequence</span>
                  <span>09 days</span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Discover', icon: Sparkles, tone: 'text-cyan-200' },
                    { label: 'Engineer', icon: Code2, tone: 'text-sky-200' },
                    { label: 'Scale', icon: Zap, tone: 'text-amber-200' }
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/8 bg-slate-950/40 p-4 text-center"
                    >
                      <item.icon className={`mx-auto h-5 w-5 ${item.tone}`} />
                      <div className="mt-3 text-sm font-semibold text-white">{item.label}</div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/8">
                        <motion.div
                          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(103,232,249,0.92),rgba(59,130,246,0.72))]"
                          initial={{ width: 0 }}
                          animate={{ width: `${72 + index * 10}%` }}
                          transition={{ duration: 0.8, delay: 0.6 + index * 0.12, ease: revealEase }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={shouldReduceMotion ? undefined : { x: floatingShiftX, y: reverseShiftY }}
            className="absolute right-0 top-10 w-44 rounded-[24px] border border-white/12 bg-slate-950/68 p-4 backdrop-blur-2xl shadow-[0_20px_50px_rgba(2,6,23,0.42)]"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">Engagement</div>
            <div className="font-display mt-2 text-3xl font-semibold text-white">4.9x</div>
            <div className="mt-2 text-sm text-slate-300/68">More meaningful session depth</div>
          </motion.div>

          <motion.div
            style={shouldReduceMotion ? undefined : { x: reverseShiftX, y: floatingShiftY }}
            className="absolute bottom-10 left-0 w-48 rounded-[24px] border border-white/12 bg-slate-950/68 p-4 backdrop-blur-2xl shadow-[0_20px_50px_rgba(2,6,23,0.42)]"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">Confidence</div>
                <div className="font-display mt-1 text-xl font-semibold text-white">Production ready</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-300/70">Security, scalability, and polish baked into the first release.</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[0.65rem] uppercase tracking-[0.42em] text-white/35 md:flex"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll</span>
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            className="h-2.5 w-1 rounded-full bg-cyan-200"
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
