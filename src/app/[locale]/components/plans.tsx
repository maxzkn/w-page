'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export const Plans = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto py-20 md:py-40 text-center bg-black text-white full-width-child px-5"
    >
      <h2 className="text-headline md:text-banner mb-12 uppercase">{t('plans.title')}</h2>
      <div className="grid grid-cols-[auto_1px_1fr] gap-8 max-w-2xl mx-auto">
        {/* Row 1 */}
        <div className="text-right">13:30</div>
        <div className="row-span-5 w-px bg-white opacity-80" />
        <div className="text-left">
          <div className="font-bold">{t('plans.ceremony.title')}</div>
          <div className="text-main">{t('plans.ceremony.text')}</div>
        </div>
        {/* Row 2 */}
        <div className="text-right">14:30</div>
        {/* Empty cell for divider */}
        <div className="text-left">
          <div className="font-bold">{t('plans.photoshoot.title')}</div>
          <div className="text-main">
            {t('plans.photoshoot.text1')}
            <br />
            {t('plans.photoshoot.text2')}
          </div>
        </div>
        {/* Row 3 */}
        <div className="text-right">17:00</div>
        {/* Empty cell for divider */}
        <div className="text-left">
          <div className="font-bold">{t('plans.party.title')}</div>
          <div className="text-main">
            {t('plans.party.text1')}
            <br />
            {t('plans.party.text2')}
            <br />
            {t('plans.party.text3')}
          </div>
        </div>
        {/* Row 4 */}
        <div className="text-right">22:00</div>
        {/* Empty cell for divider */}
        <div className="text-left">
          <div className="font-bold">{t('plans.cake.title')}</div>
          <div className="text-main">{t('plans.cake.text')}</div>
        </div>
        {/* Row 5 */}
        <div className="text-right">01:00</div>
        {/* Empty cell for divider */}
        <div className="text-left">
          <div className="font-bold">{t('plans.partyClose.title')}</div>
          <div className="text-main">
            {t('plans.partyClose.text1')}
            <br />
            {t('plans.partyClose.text2')}
            <br />
            {t('plans.partyClose.text3')}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
