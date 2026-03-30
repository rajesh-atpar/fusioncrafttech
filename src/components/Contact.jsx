import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquare, Quote, Star, Users } from 'lucide-react';
import { pexelsPortrait } from '../utils/stockImages';
import { SectionIntro } from './ui/SectionIntro';
import { fadeUp, revealEase } from './ui/sectionMotion';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: pexelsPortrait(17943555),
      imageAlt: 'Professional portrait of a smiling businesswoman in a neutral studio setting',
      content:
        'FusionCraft Tech transformed our digital infrastructure with a level of polish and precision that immediately changed how customers perceived our brand.',
      rating: 5,
      project: 'Enterprise Cloud Migration'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'InnovateLabs',
      image: pexelsPortrait(13801497),
      imageAlt: 'Professional portrait of a smiling businessman standing in a bright office hallway',
      content:
        'Their team moves like a product partner, not just a vendor. The design quality, engineering speed, and clarity in every handoff made a huge difference.',
      rating: 5,
      project: 'AI Analytics Platform'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Product Manager',
      company: 'DataFlow Corp',
      image: pexelsPortrait(8101981),
      imageAlt: 'Professional portrait of a smiling businesswoman in a modern office',
      content:
        'They delivered an app that felt premium from the first test build. Our users noticed the difference immediately and engagement climbed fast.',
      rating: 5,
      project: 'Mobile Banking Application'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Founder',
      company: 'StartupHub',
      image: pexelsPortrait(33100454),
      imageAlt: 'Professional studio portrait of a smiling businessman in formal attire',
      content:
        'FusionCraft brought startup speed with enterprise-level thinking. We got a sharper product, better support, and a launch we felt proud to show investors.',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Marketing Director',
      company: 'BrandBoost',
      image: pexelsPortrait(32938139),
      imageAlt: 'Professional portrait of a woman smiling in a modern office environment',
      content:
        'The website they built feels elevated in every interaction. It not only looks better than our old presence, it performs better in search and conversion too.',
      rating: 5,
      project: 'Corporate Website'
    }
  ];

  const current = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { number: '100+', label: 'Long-term clients', icon: Users },
    { number: '50+', label: 'Products delivered', icon: Star },
    { number: '5.0', label: 'Average partner rating', icon: MessageSquare }
  ];

  return (
    <section id="testimonials" className="section-shell px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Client Perspective"
          title={
            <>
              Trusted by teams that expect <span className="text-white/82">great execution,</span>{' '}
              <span className="bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_28%,#60a5fa_58%,#fde68a_92%)] bg-clip-text text-transparent">
                not just good intentions.
              </span>
            </>
          }
          description="Our best work tends to feel calm, premium, and effective. The feedback below reflects what matters most to clients after launch: trust, clarity, and outcomes."
        />

        <motion.div
          {...fadeUp(0.08)}
          className="premium-panel overflow-hidden rounded-[34px] p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="section-eyebrow !mx-0">Featured Testimonial</div>
              <h3 className="font-display mt-5 text-2xl font-semibold text-white sm:text-3xl">
                What it feels like to ship with FusionCraft
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={prevTestimonial}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={nextTestimonial}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.42, ease: revealEase }}
              className="mt-8 grid gap-6 lg:grid-cols-[0.38fr_0.62fr]"
            >
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 rounded-[24px] object-cover border border-white/10"
                  />
                  <div>
                    <div className="font-display text-2xl font-semibold text-white">{current.name}</div>
                    <div className="mt-1 text-sm text-slate-300/72">
                      {current.position} at <span className="text-cyan-100">{current.company}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-1.5">
                  {Array.from({ length: current.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current text-amber-300" />
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-white/8 bg-slate-950/38 p-5">
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Project</div>
                  <div className="mt-3 text-lg font-semibold text-white">{current.project}</div>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-slate-950/40 p-6 sm:p-8">
                <Quote className="h-10 w-10 text-cyan-200" />
                <p className="mt-6 font-display text-2xl leading-[1.45] text-white sm:text-[1.9rem]">
                  “{current.content}”
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'w-10 bg-cyan-300' : 'w-2.5 bg-white/18'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...fadeUp(0.14 + index * 0.05)}
              whileHover={{ y: -4 }}
              className="premium-panel rounded-[28px] p-5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-200">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="font-display mt-5 text-3xl font-semibold text-white">{stat.number}</div>
              <div className="mt-2 text-sm leading-6 text-slate-300/72">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
