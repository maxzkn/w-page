'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mb-4 mr-4 sm:mr-6"
    >
      <Image src="/logo.svg" alt="Logo" width={500} height={500} className="object-contain" />
    </motion.div>
  );
};
