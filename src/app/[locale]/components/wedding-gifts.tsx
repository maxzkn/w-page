'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export const WeddingGifts = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: isMobile ? '-50px' : '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-main text-center py-20 lg:py-40 flex flex-col gap-4 items-center"
    >
      <h2 className="text-headline md:text-banner uppercase mb-3">{t('weddingGifts.title')}</h2>
      <p>{t('weddingGifts.text1')}</p>
      <p>{t('weddingGifts.text2')}</p>
      <p>{t('weddingGifts.text3')}</p>
    </motion.div>
  );
};
