'use client';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export const FAQ = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 md:py-40 px-5 flex items-center flex-col gap-4"
    >
      <div className="text-headline md:text-banner mb-6 uppercase">{t('faq.title')}</div>
      <div className="w-full max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('faq.question1.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question1.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t('faq.question2.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question2.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{t('faq.question3.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question3.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{t('faq.question4.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question4.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>{t('faq.question5.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question5.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>{t('faq.question6.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question6.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>{t('faq.question7.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question7.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>{t('faq.question8.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question8.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>{t('faq.question9.title')}</AccordionTrigger>
            <AccordionContent>{t('faq.question9.answer')}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  );
};
