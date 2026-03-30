import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, BriefcaseBusiness, GitBranch, Mail, MessageSquare } from 'lucide-react';
import { fadeUp } from './ui/sectionMotion';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/fusioncrafttech', label: 'GitHub' },
    { icon: BriefcaseBusiness, href: 'https://linkedin.com/company/fusioncrafttech', label: 'LinkedIn' },
    { icon: MessageSquare, href: 'https://twitter.com/fusioncrafttech', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@fusioncrafttech.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact', href: '#contact' }
  ];

  const serviceLinks = ['Web Experiences', 'Mobile Products', 'UI/UX Design', 'Cloud Platforms', 'AI Workflows'];

  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...fadeUp()}
          className="premium-panel overflow-hidden rounded-[36px] p-8 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(125,211,252,0.92),transparent_34%),linear-gradient(140deg,rgba(14,165,233,0.42),rgba(7,18,34,0.34),rgba(251,191,36,0.12))]" />
                  <span className="font-display relative text-sm font-semibold uppercase tracking-[0.28em] text-white">
                    FC
                  </span>
                </div>
                <div>
                  <div className="section-eyebrow !mx-0">Product Studio</div>
                  <div className="font-display mt-3 text-2xl font-semibold text-white">FusionCraft Tech</div>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-300/74">
                Premium digital products, modern engineering, and launch-ready design systems for teams that want more
                than a standard agency build.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <div className="section-eyebrow !mx-0">Navigate</div>
              <ul className="mt-6 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-slate-300/74 transition-colors duration-300 hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="section-eyebrow !mx-0">Capabilities</div>
              <ul className="mt-6 space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service} className="text-sm text-slate-300/74">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="section-eyebrow !mx-0">Let’s Talk</div>
              <div className="mt-6 space-y-4 text-sm text-slate-300/74">
                <div>
                  <div className="text-slate-400">Email</div>
                  <div className="mt-1 text-white">hello@fusioncrafttech.com</div>
                </div>
                <div>
                  <div className="text-slate-400">Phone</div>
                  <div className="mt-1 text-white">+1 (555) 123-4567</div>
                </div>
                <div>
                  <div className="text-slate-400">Location</div>
                  <div className="mt-1 text-white">Silicon Valley, CA</div>
                </div>
              </div>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToTop}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/22 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(59,130,246,0.18),rgba(251,191,36,0.08))] px-5 py-3 text-sm font-semibold text-white"
              >
                <ArrowUp className="h-4 w-4" />
                Back to top
              </motion.button>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 FusionCraft Tech. All rights reserved.</div>
            <div>Designed and engineered with product-level craft.</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
