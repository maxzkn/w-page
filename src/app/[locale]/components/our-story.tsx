'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const OurStory = () => {
  const t = useTranslations('Home');
  const ourStoryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ourStoryRef, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ourStoryRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-12 text-center sm:text-left xl:justify-around xl:items-center xl:flex-row py-20 lg:py-40">
        <div className="flex flex-col gap-10 xl:w-1/3">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-2xl uppercase font-semibold text-center xl:text-left">
                {t('ourStory.howWeMet.title')}
              </p>
              <p className="text-main">{t('ourStory.howWeMet.text')}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl uppercase font-semibold text-center xl:text-left">
              {t('ourStory.firstKiss.title')}
            </p>
            <p className="text-main">{t('ourStory.firstKiss.text')}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl uppercase font-semibold text-center xl:text-left">
              {t('ourStory.proposal.title')}
            </p>
            <p className="text-main">{t('ourStory.proposal.text')}</p>
          </div>
        </div>
        <figure className="text-center">
          <Image
            src="/bridge.webp"
            alt="Bridge over the river at dawn"
            width={700}
            height={400}
            className="grayscale w-full xl:w-[700px] mx-auto"
          />
          <figcaption className="mt-2 text-main text-gray-500">
            <p>The Proposal, Magere Brug, Amsterdam, 16 May 2022</p>
          </figcaption>
        </figure>
      </div>
    </motion.div>
  );
};
