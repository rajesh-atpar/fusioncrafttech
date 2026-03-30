import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Server,
  Shield,
  Smartphone,
  Terminal,
  Zap
} from 'lucide-react';
import { SectionIntro } from './ui/SectionIntro';
import { fadeUp, revealEase } from './ui/sectionMotion';

export const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const technologies = [
    {
      category: 'frontend',
      title: 'Frontend Systems',
      icon: Globe,
      items: [
        { name: 'React', level: 95, color: 'from-cyan-300 to-sky-400' },
        { name: 'Next.js', level: 92, color: 'from-sky-300 to-cyan-300' },
        { name: 'Vue.js', level: 90, color: 'from-emerald-300 to-cyan-300' },
        { name: 'TypeScript', level: 88, color: 'from-blue-300 to-sky-400' }
      ]
    },
    {
      category: 'backend',
      title: 'Backend Foundations',
      icon: Server,
      items: [
        { name: 'Node.js', level: 93, color: 'from-emerald-300 to-cyan-300' },
        { name: 'Python', level: 91, color: 'from-blue-300 to-cyan-300' },
        { name: 'Go', level: 85, color: 'from-cyan-300 to-sky-400' },
        { name: 'Java', level: 87, color: 'from-amber-200 to-orange-300' }
      ]
    },
    {
      category: 'database',
      title: 'Data Layer',
      icon: Database,
      items: [
        { name: 'PostgreSQL', level: 90, color: 'from-blue-300 to-cyan-300' },
        { name: 'MongoDB', level: 88, color: 'from-emerald-300 to-cyan-300' },
        { name: 'Redis', level: 92, color: 'from-rose-200 to-orange-200' },
        { name: 'Elasticsearch', level: 85, color: 'from-cyan-300 to-indigo-300' }
      ]
    },
    {
      category: 'cloud',
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: [
        { name: 'AWS', level: 94, color: 'from-amber-200 to-cyan-300' },
        { name: 'Docker', level: 91, color: 'from-cyan-300 to-sky-400' },
        { name: 'Kubernetes', level: 88, color: 'from-blue-300 to-indigo-300' },
        { name: 'CI/CD', level: 89, color: 'from-emerald-300 to-cyan-300' }
      ]
    },
    {
      category: 'mobile',
      title: 'Mobile Delivery',
      icon: Smartphone,
      items: [
        { name: 'React Native', level: 90, color: 'from-cyan-300 to-sky-400' },
        { name: 'Flutter', level: 87, color: 'from-emerald-300 to-cyan-300' },
        { name: 'Swift', level: 83, color: 'from-amber-200 to-orange-300' },
        { name: 'Kotlin', level: 85, color: 'from-blue-300 to-indigo-300' }
      ]
    },
    {
      category: 'ai',
      title: 'AI & Automation',
      icon: Cpu,
      items: [
        { name: 'OpenAI', level: 92, color: 'from-cyan-300 to-sky-400' },
        { name: 'TensorFlow', level: 88, color: 'from-amber-200 to-orange-300' },
        { name: 'PyTorch', level: 85, color: 'from-violet-300 to-sky-300' },
        { name: 'Scikit-learn', level: 87, color: 'from-emerald-300 to-cyan-300' }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Data' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ai', name: 'AI' }
  ];

  const filteredTech =
    selectedCategory === 'all'
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  const stats = [
    { icon: Code, number: '15+', label: 'Years building digital products' },
    { icon: Shield, number: '200+', label: 'Projects and launches supported' },
    { icon: Zap, number: '50+', label: 'Technologies used in production' },
    { icon: Terminal, number: '24/7', label: 'Support and optimization coverage' }
  ];

  return (
    <section id="technologies" className="section-shell px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Technology Stack"
          title={
            <>
              Built with the tools that keep <span className="text-white/82">premium interfaces fast,</span>{' '}
              <span className="bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_28%,#60a5fa_58%,#fde68a_92%)] bg-clip-text text-transparent">
                scalable, and dependable.
              </span>
            </>
          }
          description="We choose technology based on launch speed, maintainability, performance, and the kind of product experience your business is trying to create."
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
          {filteredTech.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.article
                key={tech.category}
                {...fadeUp(0.1 + index * 0.05)}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: revealEase }}
                className="premium-panel rounded-[30px] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="section-eyebrow !mx-0">{tech.category}</div>
                    <h3 className="font-display mt-5 text-2xl font-semibold text-white">{tech.title}</h3>
                  </div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {tech.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      {...fadeUp(0.14 + skillIndex * 0.04, 18)}
                      className="rounded-[22px] border border-white/8 bg-slate-950/36 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/8">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.85, delay: 0.16 + skillIndex * 0.05, ease: revealEase }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
