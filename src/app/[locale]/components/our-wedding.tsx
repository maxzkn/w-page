'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export const OurWedding = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: isMobile ? '-50px' : '-100px' });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-2xl mx-auto py-20 lg:py-40 px-4 sm:px-0 text-center"
    >
      <h2 className="text-headline md:text-banner mb-6 uppercase">{t('ourWedding.title')}</h2>
      <p className="text-lg font-primary sm:text-headline">{t('ourWedding.date')}</p>
    </motion.section>
  );
};
