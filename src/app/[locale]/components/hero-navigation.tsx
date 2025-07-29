'use client';
import { ViewGalleryButton } from './view-gallery-button';
import { motion } from 'framer-motion';

function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const locales = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'lt', label: 'LT' },
  ];
  return (
    <div className="flex gap-2">
      {locales.map(({ code, label }) => (
        <a
          key={code}
          href={`/${code}`}
          className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${
            currentLocale === code
              ? 'bg-white text-black'
              : 'bg-black/50 text-white hover:bg-white hover:text-black'
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export const HeroNavigation = ({ locale }: { locale: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="absolute top-8 right-10 z-20 flex items-center gap-3"
    >
      <ViewGalleryButton className="inline-block px-1 py-1 text-main text-white border-b border-transparent hover:border-white transition uppercase" />
      <LanguageSwitcher currentLocale={locale} />
    </motion.div>
  );
};
