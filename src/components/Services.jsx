import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code,
  Cpu,
  Globe,
  Palette,
  Shield,
  Smartphone,
  Star
} from 'lucide-react';
import { pexelsImage } from '../utils/stockImages';
import { SectionIntro } from './ui/SectionIntro';
import { fadeUp, revealEase } from './ui/sectionMotion';

export const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with sharp product thinking, fast engineering, and measurable performance.',
      features: ['React, Vue, or modern frontend stacks', 'Node.js, Python, and API architecture', 'Progressive enhancement and SEO foundations'],
      image: pexelsImage(6804595),
      imageAlt: 'Software engineer focused on a multi-monitor coding setup in a modern office',
      accent: 'from-cyan-300/30 via-sky-400/16 to-transparent',
      badge: 'Build'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native-feeling mobile products for iOS and Android with polished flows, reliable performance, and scalable foundations.',
      features: ['React Native and Flutter delivery', 'App store launch support', 'Retention-focused product flows'],
      image: pexelsImage(4565780),
      imageAlt: 'Modern smartphone displaying a polished mobile app interface on a wooden surface',
      accent: 'from-indigo-300/26 via-sky-400/14 to-transparent',
      badge: 'Mobile'
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Experience-led design systems that turn strategy into premium interfaces, strong conversions, and intuitive product behavior.',
      features: ['Interface systems and component logic', 'Prototyping for stakeholder alignment', 'Conversion-aware customer journeys'],
      image: pexelsImage(28455765),
      imageAlt: 'Creative desktop with multiple screens and devices arranged for product design work',
      accent: 'from-amber-200/28 via-cyan-300/10 to-transparent',
      badge: 'Design'
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Modern deployment, infrastructure, and cloud architecture that keep products fast, secure, and ready to scale.',
      features: ['AWS, Azure, and cloud-native patterns', 'Containerized delivery pipelines', 'Operational visibility and support'],
      image: pexelsImage(17489163),
      imageAlt: 'Blue-lit server rack inside a modern data center environment',
      accent: 'from-sky-300/26 via-cyan-300/12 to-transparent',
      badge: 'Cloud'
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security practices designed into the product lifecycle so launches feel dependable from the first release forward.',
      features: ['Security reviews and audit support', 'Risk reduction in architecture decisions', 'Ongoing operational hardening'],
      image: pexelsImage(5483075),
      imageAlt: 'Close-up of secure coding work on a laptop with a developer at the keyboard',
      accent: 'from-rose-300/24 via-orange-200/10 to-transparent',
      badge: 'Security'
    },
    {
      id: 'ai-solutions',
      icon: Cpu,
      title: 'AI Solutions',
      description: 'Applied AI and automation experiences that solve real workflows, enrich products, and create meaningful operational lift.',
      features: ['LLM-powered assistants and workflows', 'Automation for internal systems', 'Data-informed product intelligence'],
      image: pexelsImage(2599244),
      imageAlt: 'Futuristic humanoid robot representing artificial intelligence and automation',
      accent: 'from-violet-300/28 via-cyan-300/10 to-transparent',
      badge: 'AI'
    }
  ];

  const stats = [
    { number: '500+', label: 'Releases and campaigns supported', icon: CheckCircle2 },
    { number: '98%', label: 'Long-term client satisfaction', icon: Star },
    { number: '24/7', label: 'Operational support availability', icon: Globe }
  ];

  return (
    <section id="services" className="section-shell px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Capabilities"
          title={
            <>
              Services designed to <span className="text-white/82">look premium,</span>{' '}
              <span className="bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_28%,#60a5fa_58%,#fde68a_92%)] bg-clip-text text-transparent">
                ship fast, and scale cleanly.
              </span>
            </>
          }
          description="Every engagement is structured around product clarity, visual polish, and dependable execution so the end result feels intentional across brand, UX, and engineering."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const isActive = hoveredService === service.id;

            return (
              <motion.article
                key={service.id}
                {...fadeUp(0.06 + index * 0.05)}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: revealEase }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group premium-panel relative overflow-hidden rounded-[30px]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-80`} />

                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    animate={{ scale: isActive ? 1.08 : 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.02),rgba(5,11,22,0.84))]" />
                  <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
                    <div className="section-eyebrow !mx-0 border-white/12 bg-slate-950/46 text-cyan-100/74">
                      {service.badge}
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.08] text-white backdrop-blur-xl">
                      <service.icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="relative p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300/74">{service.description}</p>

                  <div className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-slate-200/74">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-200" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100"
                  >
                    Start this service
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            {...fadeUp(0.12)}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
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
          </motion.div>

          <motion.div
            {...fadeUp(0.18)}
            className="premium-panel relative overflow-hidden rounded-[32px] p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            <div className="relative">
              <div className="section-eyebrow !mx-0">Delivery Model</div>
              <h3 className="font-display mt-6 text-3xl font-semibold text-white sm:text-4xl">
                Premium execution without the template feel.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300/78">
                We combine product strategy, design craft, and engineering rigor to ship work that feels polished from
                the first impression to the final deployment handoff.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/22 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(59,130,246,0.18),rgba(251,191,36,0.08))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(8,145,178,0.18)]"
                >
                  Book a strategy call
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/88"
                >
                  See recent work
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
