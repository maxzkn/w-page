import { Countdown } from './countdown';
import { HeroNavigation } from './hero-navigation';
import { Logo } from './logo';

export const Hero = ({ locale }: { locale: string }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mb-10 md:mb-20">
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center lg:bg-auto lg:bg-[position:unset]"
        style={{
          backgroundImage: 'url(/hero.webp)',
          filter: 'grayscale(1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
      <HeroNavigation locale={locale} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        {/* <Logo /> */}
        {/* <Countdown /> */}
      </div>
    </section>
  );
};
