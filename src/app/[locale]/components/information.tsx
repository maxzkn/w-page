'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export const Information = () => {
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
      className="flex flex-col items-center justify-center text-center gap-20 lg:flex-row lg:items-baseline lg:gap-40 px-8 py-20 lg:py-40 bg-black full-width-child text-white text-main"
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
        <p>{t('information.photoshoot.text3')}</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-main uppercase">{t('information.party.title')}</p>
        <p className="text-main mb-2">17:00</p>
        <p>{t('information.party.location')}</p>
        <p>{t('information.party.address1')}</p>
        <p>{t('information.party.address2')}</p>
        <Link
          href="#map"
          className="text-main border  border-white  bg-black text-white hover:bg-white hover:text-black transition px-3 py-1"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {t('information.party.showLocationButtonTitle')}
        </Link>
      </div>
    </motion.div>
  );
};
