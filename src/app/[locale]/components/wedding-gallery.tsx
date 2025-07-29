'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import Image from 'next/image';

export const WeddingGallery = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      id="wedding-gallery"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="py-40 full-width-child">
        <Image
          src="/gallery.webp"
          alt="gallery-image"
          fill
          className="object-cover z-0 opacity-30 grayscale"
        />
        <h2 className="text-center text-headline md:text-banner uppercase mb-3">
          {t('gallery.button')}
        </h2>
      </div>
      <div className="flex flex-col gap-8 py-20 md:py-40 items-center text-main">
        <p>{t('gallery.text')}</p>
      </div>
    </motion.div>
  );
};
