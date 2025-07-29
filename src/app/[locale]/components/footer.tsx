'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-10 flex items-center justify-center bg-black text-white full-width-child text-main"
    >
      <p>Lera & Max &copy; 2025</p>
    </motion.footer>
  );
};
