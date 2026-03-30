import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ExternalLink, GitBranch, X } from 'lucide-react';
import { pexelsImage } from '../utils/stockImages';
import { SectionIntro } from './ui/SectionIntro';
import { fadeUp, revealEase } from './ui/sectionMotion';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack commerce experience with live inventory, high-intent merchandising, and premium checkout flows.',
      image: pexelsImage(6207736),
      imageAlt: 'Hands shopping online with a laptop and credit card on a clean desk',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      stats: { users: '10K+', revenue: '$500K+', conversion: '3.2%' },
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      description: 'A decision-grade dashboard that turns complex data into live, actionable business intelligence.',
      image: pexelsImage(6770610),
      imageAlt: 'Laptop screen filled with analytics graphs and data visualization panels',
      category: 'ai',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      stats: { accuracy: '95%', data: '1M+', insights: '50+' },
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'A trust-focused mobile banking flow designed for security, speed, and everyday usage.',
      image: pexelsImage(6406691),
      imageAlt: 'Smartphone displaying a digital wallet interface for modern mobile banking',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Node.js', 'Blockchain'],
      stats: { downloads: '100K+', transactions: '$10M+', rating: '4.8' },
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Healthcare Management',
      description: 'A telemedicine-first platform bringing booking, consultation, and record management into one system.',
      image: pexelsImage(7195306),
      imageAlt: 'Healthcare professional using a laptop for a telemedicine consultation',
      category: 'web',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      stats: { patients: '50K+', doctors: '500+', appointments: '200K+' },
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'A scalable social product designed around content velocity, messaging, and deeper daily engagement.',
      image: pexelsImage(5082579),
      imageAlt: 'Smartphone in hand with a social media app open beside a desktop setup',
      category: 'web',
      tags: ['Next.js', 'GraphQL', 'Redis', 'WebSockets'],
      stats: { users: '1M+', posts: '10M+', engagement: '85%' },
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 6,
      title: 'IoT Smart Home',
      description: 'A connected home control system that unifies devices, automation, and monitoring in one clean interface.',
      image: pexelsImage(16423103),
      imageAlt: 'Tablet controlling a smart home interface inside a connected modern kitchen',
      category: 'iot',
      tags: ['Arduino', 'React', 'MQTT', 'Node-RED'],
      stats: { devices: '10K+', homes: '5K+', savings: '30%' },
      link: '#',
      github: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Products' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Systems' },
    { id: 'iot', name: 'IoT Platforms' }
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="section-shell px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Selected Work"
          title={
            <>
              Products we’ve shaped with <span className="text-white/82">strategy, design,</span>{' '}
              <span className="bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_28%,#60a5fa_58%,#fde68a_92%)] bg-clip-text text-transparent">
                and launch discipline.
              </span>
            </>
          }
          description="A curated snapshot of the kinds of digital experiences we build: conversion-focused, technically reliable, and unmistakably polished."
        />

        <motion.div
          {...fadeUp(0.08)}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => {
            const active = selectedCategory === category.id;

            return (
              <motion.button
                key={category.id}
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? 'border-cyan-300/24 bg-[linear-gradient(135deg,rgba(34,211,238,0.20),rgba(59,130,246,0.14))] text-white shadow-[0_12px_30px_rgba(8,145,178,0.16)]'
                    : 'border-white/10 bg-white/[0.04] text-white/74 hover:text-white'
                }`}
              >
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              {...fadeUp(0.1 + index * 0.05)}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35, ease: revealEase }}
              onClick={() => setSelectedProject(project)}
              className="group premium-panel overflow-hidden rounded-[30px] text-left"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.02),rgba(5,11,22,0.86))]" />
                <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
                  <div className="section-eyebrow !mx-0 border-white/12 bg-slate-950/42 text-cyan-100/74">
                    {project.featured ? 'Featured Case' : 'Case Study'}
                  </div>
                  <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                      <GitBranch className="h-4 w-4" />
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300/74">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200/72"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-[20px] border border-white/8 bg-slate-950/36 px-3 py-4 text-center"
                    >
                      <div className="font-display text-lg font-semibold text-white">{value}</div>
                      <div className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  View case details
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.96 }}
                transition={{ duration: 0.38, ease: revealEase }}
                onClick={(event) => event.stopPropagation()}
                className="premium-panel relative w-full max-w-4xl overflow-hidden rounded-[34px]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/58 text-white"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative min-h-[280px] lg:min-h-full">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.10),rgba(5,11,22,0.82))]" />
                  </div>

                  <div className="relative p-8 sm:p-10">
                    <div className="section-eyebrow !mx-0">Project Snapshot</div>
                    <h3 className="font-display mt-6 text-3xl font-semibold text-white">{selectedProject.title}</h3>
                    <p className="mt-5 text-base leading-8 text-slate-300/78">{selectedProject.description}</p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200/74"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 grid grid-cols-3 gap-3">
                      {Object.entries(selectedProject.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="rounded-[20px] border border-white/8 bg-slate-950/38 px-3 py-4 text-center"
                        >
                          <div className="font-display text-lg font-semibold text-white">{value}</div>
                          <div className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={selectedProject.github}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white"
                      >
                        <GitBranch className="h-4 w-4" />
                        View code
                      </a>
                      <a
                        href={selectedProject.link}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/22 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(59,130,246,0.18),rgba(251,191,36,0.08))] px-5 py-3 text-sm font-semibold text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};
