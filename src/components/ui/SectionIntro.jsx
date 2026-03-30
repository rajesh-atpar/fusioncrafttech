import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './sectionMotion';

export const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  children
}) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      {...fadeUp()}
      className={[
        'mb-14',
        isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left',
        className
      ].join(' ')}
    >
      {eyebrow ? (
        <div
          className={[
            'section-eyebrow',
            isCentered ? 'mx-auto' : ''
          ].join(' ')}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2 className="font-display mt-6 text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-[3.6rem]">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-300/80 sm:text-xl">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-8">{children}</div> : null}
    </motion.div>
  );
};
