export const revealEase = [0.22, 1, 0.36, 1];

export const sectionViewport = {
  once: true,
  amount: 0.24
};

export const fadeUp = (delay = 0, distance = 24) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: sectionViewport,
  transition: {
    duration: 0.78,
    delay,
    ease: revealEase
  }
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: sectionViewport,
  transition: {
    duration: 0.7,
    delay,
    ease: revealEase
  }
});
