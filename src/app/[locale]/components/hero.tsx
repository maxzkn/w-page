'use client';
import { Countdown } from './countdown';
import { HeroNavigation } from './hero-navigation';
import { Logo } from './logo';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Image from 'next/image';

export const Hero = ({ locale }: { locale: string }) => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {isMobile ? (
        // Mobile: Use Next.js Image component
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/hero.webp"
            alt="Hero background"
            fill
            priority
            className="object-cover grayscale"
            sizes="100vw"
          />
        </div>
      ) : (
        // Desktop: Use background image with parallax
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed lg:bg-auto lg:bg-[position:unset]"
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
