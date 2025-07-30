'use client';
import { Countdown } from './countdown';
import { HeroNavigation } from './hero-navigation';
import { Logo } from './logo';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { useEffect, useState } from 'react';

export const Hero = ({ locale }: { locale: string }) => {
  const isMobile = useIsMobile();
  const [initialViewportHeight, setInitialViewportHeight] = useState<number | null>(null);

  useEffect(() => {
    if (isMobile) {
      // Capture the initial viewport height and never change it
      const height = window.innerHeight;
      setInitialViewportHeight(height);

      // Set CSS custom property for stable height
      document.documentElement.style.setProperty('--initial-vh', `${height}px`);
    }
  }, [isMobile]);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden hero-section"
      style={{
        minHeight: isMobile && initialViewportHeight ? `${initialViewportHeight}px` : '100vh',
      }}
    >
      {isMobile ? (
        // Mobile: Use initial viewport height to prevent zoom issues
        <div
          className="absolute inset-0 w-full z-0"
          style={{
            backgroundImage: 'url(/hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(1)',
            height: initialViewportHeight ? `${initialViewportHeight}px` : '100vh',
          }}
        />
      ) : (
        // Desktop: Use background image with parallax
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed lg:bg-auto lg:bg-[position:20%_15%]"
          style={{
            backgroundImage: 'url(/hero.webp)',
            filter: 'grayscale(1)',
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
      <HeroNavigation locale={locale} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <Logo />
        <Countdown />
      </div>
    </section>
  );
};
