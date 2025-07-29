'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WEDDING_DATE = new Date('2025-10-18T00:00:00Z');

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const t = useTranslations('Home');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Always render the same structure, but show real countdown only after hydration
  const display = hydrated ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex font-secondary gap-6 text-2xl sm:text-4xl tracking-widest text-white px-6 py-3"
    >
      <div>
        <span className="block text-3xl sm:text-5xl">{display.days}</span>
        <span className="text-xs">{t('countdown.days')}</span>
      </div>
      <div>
        <span className="block text-3xl sm:text-5xl">{display.hours}</span>
        <span className="text-xs">{t('countdown.hours')}</span>
      </div>
      <div>
        <span className="block text-3xl sm:text-5xl">{display.minutes}</span>
        <span className="text-xs">{t('countdown.minutes')}</span>
      </div>
      <div>
        <span className="block text-3xl sm:text-5xl">{display.seconds}</span>
        <span className="text-xs">{t('countdown.seconds')}</span>
      </div>
    </motion.div>
  );
}
