import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { SectionIntro } from './ui/SectionIntro';
import { fadeUp } from './ui/sectionMotion';

export const About = () => {
  const stats = [
    { number: '50+', label: 'Projects delivered', icon: Target },
    { number: '25+', label: 'Specialists collaborating', icon: Users },
    { number: '99%', label: 'Client satisfaction', icon: Award },
    { number: '24/7', label: 'Support continuity', icon: Zap }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Studio launch',
      desc: 'FusionCraft Tech launched with a product-first approach to design, engineering, and digital growth.'
    },
    {
      year: '2024',
      title: 'Enterprise delivery',
      desc: 'We shipped our first large-scale engagements and built repeatable systems for premium execution.'
    },
    {
      year: '2025',
      title: 'Cross-functional scale',
      desc: 'The team expanded across engineering, product design, automation, and cloud architecture.'
    },
    {
      year: '2026',
      title: 'Experience-led growth',
      desc: 'We refined our process around launch velocity, measurable business lift, and long-term support.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation first',
      desc: 'We blend sharp strategy with emerging technology so every release feels current and future-proof.'
    },
    {
      icon: Users,
      title: 'Client-centered',
      desc: 'We work like a product partner, keeping communication clear and decisions grounded in business impact.'
    },
    {
      icon: Award,
      title: 'Quality obsession',
      desc: 'From interaction polish to deployment standards, every detail is shaped to feel premium and reliable.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous growth',
      desc: 'We keep refining systems, tooling, and craft so your product keeps improving after launch day.'
    }
  ];

  return (
    <section id="about" className="section-shell px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Inside FusionCraft"
          title={
            <>
              Built for <span className="text-white/85">clarity, craft,</span>{' '}
              <span className="bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_28%,#60a5fa_58%,#fde68a_92%)] bg-clip-text text-transparent">
                and scale.
              </span>
            </>
          }
          description="We operate like a premium product team: strategic upfront, fast in execution, and meticulous about how every launch looks, feels, and performs."
        />

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            {...fadeUp(0.08)}
            className="premium-panel rounded-[32px] p-6 sm:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold text-white">Mission</h3>
                <p className="mt-4 text-base leading-7 text-slate-300/76">
                  Transform ambitious ideas into digital products that look refined, perform fast, and create measurable
                  growth for the businesses behind them.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-100">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold text-white">Vision</h3>
                <p className="mt-4 text-base leading-7 text-slate-300/76">
                  Set a higher bar for what digital studios deliver by pairing premium aesthetics, solid engineering,
                  and operational thinking in every engagement.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  {...fadeUp(0.12 + index * 0.06, 20)}
                  className="rounded-[24px] border border-white/8 bg-slate-950/40 p-5 transition-colors duration-300 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-200">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300/72">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              {...fadeUp(0.14)}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="premium-panel rounded-[28px] p-5 sm:p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-200">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display mt-5 text-3xl font-semibold text-white">{stat.number}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300/72">{stat.label}</div>
                  <div
                    className="mt-4 h-px w-14 bg-gradient-to-r from-cyan-300/40 to-transparent"
                    style={{ opacity: 1 - index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="premium-panel rounded-[32px] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="section-eyebrow !mx-0">Our Journey</div>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-white">How we’ve evolved</h3>
                </div>
              </div>

              <div className="relative mt-8 space-y-5 pl-6">
                <div className="absolute bottom-2 left-[11px] top-1 w-px bg-gradient-to-b from-cyan-300/50 via-white/16 to-transparent" />
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    {...fadeUp(0.24 + index * 0.06, 18)}
                    className="relative rounded-[24px] border border-white/8 bg-slate-950/36 p-5"
                  >
                    <span className="absolute left-[-20px] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                    <div className="font-display text-sm uppercase tracking-[0.28em] text-cyan-100/70">{item.year}</div>
                    <div className="mt-3 text-lg font-semibold text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300/72">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
