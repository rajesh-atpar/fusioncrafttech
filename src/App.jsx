import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar_fixed';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Technologies } from './components/Skills';
import { Testimonials } from './components/Contact';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <Preloader key="preloader" onComplete={handlePreloaderComplete} />
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Technologies />
            <Testimonials />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
