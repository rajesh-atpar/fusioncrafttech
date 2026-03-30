import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'contact', label: 'Contact' }
];

const revealEase = [0.22, 1, 0.36, 1];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  const scrollToSection = (target) => {
    const sectionId = target.startsWith('#') ? target.slice(1) : target;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 28);

    if (latest < 96) {
      setIsVisible(true);
      return;
    }

    setIsVisible(latest < previous || latest - previous < 2);
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = 'home';

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item.id;
          break;
        }

        if (scrollPosition >= sectionTop) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -120, opacity: 1 }}
      transition={{ duration: 0.75, ease: revealEase }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          animate={{
            scale: scrolled ? 0.985 : 1,
            backgroundColor: scrolled ? 'rgba(4, 10, 24, 0.82)' : 'rgba(4, 10, 24, 0.42)',
            borderColor: scrolled ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.08)'
          }}
          transition={{ duration: 0.55, ease: revealEase }}
          className="relative overflow-hidden rounded-[28px] border backdrop-blur-2xl shadow-[0_20px_80px_rgba(2,6,23,0.48)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(103,232,249,0.16),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(251,191,36,0.10),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

          <div className="relative flex h-[78px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-3 text-left"
            >
              <motion.div
                whileHover={{ rotate: -4, scale: 1.04 }}
                transition={{ duration: 0.45, ease: revealEase }}
                className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_14px_32px_rgba(8,145,178,0.18)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(125,211,252,0.92),transparent_34%),linear-gradient(140deg,rgba(14,165,233,0.42),rgba(7,18,34,0.34),rgba(251,191,36,0.12))]" />
                <span className="font-display relative text-sm font-semibold uppercase tracking-[0.28em] text-white">
                  FC
                </span>
              </motion.div>

              <div className="hidden sm:block">
                <div className="font-display text-[0.65rem] uppercase tracking-[0.38em] text-cyan-100/70">
                  Product Studio
                </div>
                <div className="font-display text-base font-semibold text-white lg:text-lg">
                  FusionCraft Tech
                </div>
              </div>
            </button>

            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.id)}
                      className="group relative rounded-full px-4 py-2.5 text-sm font-semibold text-white/72 transition-colors duration-300 hover:text-white"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(59,130,246,0.14),rgba(251,191,36,0.08))] shadow-[0_12px_30px_rgba(34,211,238,0.12)]"
                          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        />
                      )}
                      <span className="absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-white/90 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                      <span className={`relative z-10 ${isActive ? 'text-white' : ''}`}>{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="group relative hidden overflow-hidden rounded-full border border-cyan-300/22 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_44px_rgba(8,145,178,0.22)] sm:inline-flex"
              >
                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(59,130,246,0.18),rgba(251,191,36,0.08))]" />
                <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(135deg,rgba(7,18,34,0.96),rgba(8,20,37,0.92))]" />
                <span className="absolute inset-y-0 left-[-30%] w-[42%] -skew-x-12 bg-white/12 opacity-0 blur-xl transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-200" />
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsOpen((open) => !open)}
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white transition-colors duration-300 hover:bg-white/[0.09] lg:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? 'close' : 'menu'}
                    initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="absolute"
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.42, ease: revealEase }}
                className="overflow-hidden border-t border-white/10 lg:hidden"
              >
                <div className="space-y-3 px-4 pb-5 pt-4 sm:px-6">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {NAV_ITEMS.map((item, index) => {
                      const isActive = activeSection === item.id;

                      return (
                        <motion.button
                          key={item.id}
                          type="button"
                          initial={{ opacity: 0, x: -18 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -18 }}
                          transition={{ duration: 0.28, delay: index * 0.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollToSection(item.id)}
                          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors duration-300 ${
                            isActive
                              ? 'bg-[linear-gradient(135deg,rgba(56,189,248,0.16),rgba(59,130,246,0.10))] text-white'
                              : 'text-white/72 hover:bg-white/[0.05] hover:text-white'
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                              isActive ? 'bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]' : 'bg-white/15'
                            }`}
                          />
                        </motion.button>
                      );
                    })}
                  </div>

                  <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 14 }}
                    transition={{ duration: 0.32, delay: 0.16 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection('contact')}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-300/22 px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_44px_rgba(8,145,178,0.22)]"
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(59,130,246,0.18),rgba(251,191,36,0.08))]" />
                    <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(135deg,rgba(7,18,34,0.96),rgba(8,20,37,0.92))]" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-cyan-200" />
                      Start Your Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
};
