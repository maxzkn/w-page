'use client';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
      const shouldBeVisible = scrollTop > 500;

      if (shouldBeVisible !== isVisible) {
        setIsVisible(shouldBeVisible);
      }
    };

    handleScroll();

    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    return () => {
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [isVisible]);

  const scrollToTop = () => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-10 z-[9999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 border border-gray-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};
