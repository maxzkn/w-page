'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export const Information = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex flex-wrap items-baseline text-center gap-20 md:gap-40 justify-center px-8 py-20 md:py-40 bg-black full-width-child text-white text-main"
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-main uppercase">{t('information.ceremony.title')}</p>
        <p className="text-main mb-2">13:30</p>
        <p>{t('information.ceremony.location')}</p>
        <p>{t('information.ceremony.address1')}</p>
        <p>{t('information.ceremony.address2')}</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-main uppercase">{t('information.photoshoot.title')}</p>
        <p className="text-main mb-2">14:30</p>
        <p>{t('information.photoshoot.text1')}</p>
        <p>{t('information.photoshoot.text2')}</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-main uppercase">{t('information.party.title')}</p>
        <p className="text-main mb-2">17:00</p>
        <p>{t('information.party.location')}</p>
        <p>{t('information.party.address1')}</p>
        <p>{t('information.party.address2')}</p>
      </div>
    </motion.div>
  );
};
