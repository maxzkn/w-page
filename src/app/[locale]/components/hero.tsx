'use client';
import { Countdown } from './countdown';
import { HeroNavigation } from './hero-navigation';
import { Logo } from './logo';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { useEffect } from 'react';

export const Hero = ({ locale }: { locale: string }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Scroll to top when component mounts (after login)
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Set a stable viewport height that doesn't change with browser UI
      const setStableViewportHeight = () => {
        // Use the larger of current height or a minimum height
        const currentHeight = window.innerHeight;
        const minHeight = Math.max(currentHeight, 600); // Minimum height
        document.documentElement.style.setProperty('--stable-vh', `${minHeight}px`);
      };

      // Set initial height
      setStableViewportHeight();

      // Update on orientation change
      window.addEventListener('orientationchange', setStableViewportHeight);

      return () => {
        window.removeEventListener('orientationchange', setStableViewportHeight);
      };
    }
  }, [isMobile]);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden hero-section"
      style={{
        minHeight: isMobile ? 'var(--stable-vh, 100vh)' : '100vh',
        height: isMobile ? 'var(--stable-vh, 100vh)' : '100vh',
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
            height: isMobile ? 'var(--stable-vh, 100vh)' : '100vh',
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
