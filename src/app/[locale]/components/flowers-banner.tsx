'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useEffect, useState } from 'react';

export const FlowersBanner = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative text-center py-56 full-width-child text-white overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={isMobile}
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        poster="/flowers-banner.webp"
      >
        <source src="/flowers-banner-video.webm" type="video/webm" />
        <source src="/flowers-banner-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      <div className="relative z-20">
        <p className="text-headline md:text-banner uppercase">{t('ourStory.title')}</p>
      </div>
    </motion.div>
  );
};
