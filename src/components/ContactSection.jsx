import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, GitBranch, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { SectionIntro } from './ui/SectionIntro';
import { fadeUp, revealEase } from './ui/sectionMotion';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1800));

    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/fusioncrafttech', label: 'GitHub' },
    { icon: BriefcaseBusiness, href: 'https://linkedin.com/company/fusioncrafttech', label: 'LinkedIn' },
    { icon: MessageSquare, href: 'https://twitter.com/fusioncrafttech', label: 'Twitter' }
  ];

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'hello@fusioncrafttech.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'Silicon Valley, California' }
  ];

  return (
    <section id="contact" className="section-shell px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Contact & Collaboration"
          title={
            <>
              Ready to build something that <span className="text-white/82">looks sharper,</span>{' '}
              <span className="bg-[linear-gradient(135deg,#f8fafc_0%,#67e8f9_28%,#60a5fa_58%,#fde68a_92%)] bg-clip-text text-transparent">
                performs better, and feels premium?
              </span>
            </>
          }
          description="If you’re planning a redesign, new product, AI workflow, or high-conversion site, we’d love to shape the next release with you."
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            {...fadeUp(0.08)}
            className="space-y-6"
          >
            <div className="premium-panel overflow-hidden rounded-[32px] p-8">
              <div className="section-eyebrow !mx-0">Talk to the team</div>
              <h3 className="font-display mt-6 text-3xl font-semibold text-white">Let’s map the next release.</h3>
              <p className="mt-5 text-base leading-8 text-slate-300/78">
                We collaborate best when goals are clear, timelines are real, and product quality matters. Reach out
                and we’ll help scope the right next step.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    {...fadeUp(0.12 + index * 0.05, 18)}
                    className="flex items-start gap-4 rounded-[24px] border border-white/8 bg-slate-950/36 p-5"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.label}</div>
                      <div className="mt-2 text-base font-medium text-white">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.12),transparent_34%),rgba(6,14,27,0.7)] p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Availability</div>
                <div className="font-display mt-3 text-2xl font-semibold text-white">Discovery calls this week</div>
                <p className="mt-3 text-sm leading-7 text-slate-300/72">
                  We typically reply within one business day with next steps, clarifying questions, or a recommended
                  project format.
                </p>
              </div>
            </div>

            <motion.div
              {...fadeUp(0.18)}
              className="premium-panel rounded-[32px] p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="section-eyebrow !mx-0">Follow FusionCraft</div>
                  <h4 className="font-display mt-4 text-2xl font-semibold text-white">Stay connected</h4>
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
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
            </motion.div>
          </motion.div>

          <motion.div
            {...fadeUp(0.12)}
            className="premium-panel rounded-[32px] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="section-eyebrow !mx-0">Project Inquiry</div>
                <h3 className="font-display mt-5 text-3xl font-semibold text-white">Send us a message</h3>
              </div>
              <div className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100/76">
                Premium delivery
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300/78">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-slate-400 focus:border-cyan-300/28 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300/78">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-slate-400 focus:border-cyan-300/28 focus:outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300/78">Project Details</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={7}
                  placeholder="Tell us what you’re building, what needs to improve, and how soon you want to move."
                  className="w-full resize-none rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-white placeholder:text-slate-400 focus:border-cyan-300/28 focus:outline-none"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-slate-300/68">
                  The more context you share, the more useful our first reply will be. A rough brief, goals, and timing
                  are more than enough to get started.
                </p>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: revealEase }}
                  className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full border border-cyan-300/22 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(59,130,246,0.18),rgba(251,191,36,0.08))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(8,145,178,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-flex h-4 w-4 rounded-full border border-white/30 border-t-transparent"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
