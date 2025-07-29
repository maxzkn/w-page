import React from 'react';
import { use } from 'react';
import { Hero } from './components/hero';
import { OurWedding } from './components/our-wedding';
import { FAQ } from './components/faq';
import { Information } from './components/information';
import { FlowersBanner } from './components/flowers-banner';
import { OurStory } from './components/our-story';
import { WeddingGifts } from './components/wedding-gifts';
import { Footer } from './components/footer';
import { Plans } from './components/plans';
import { WeddingGallery } from './components/wedding-gallery';
import { MapComponent } from '@/components/map';
import { PasswordProtection } from './components/password-protection';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  return (
    <PasswordProtection locale={locale}>
      <>
        <Hero locale={locale} />
        <main className="custom-container">
          <OurWedding />
          <Information />
          <WeddingGifts />
          <FlowersBanner />
          <OurStory />
          <Plans />
          <FAQ />
          <WeddingGallery />
          <MapComponent />
          <Footer />
        </main>
      </>
    </PasswordProtection>
  );
}
