'use client';
import { useEffect, useState } from 'react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      console.log('window.scrollY:', window.scrollY); // Debug
      setIsVisible(window.scrollY > 300);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility(); // Set initial state
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-3 right-3 z-50">
        <button
          role="button"
          onClick={scrollToTop}
          className="flex border group border-slate-300 hover:bg-slate-300 pt-2.5 focus:outline-none items-center justify-center rounded w-10 h-10 sm:w-14 sm:h-14 text-white transform transition duration-500"
        >
          <div className="w-3 h-3 sm:w-5 sm:h-5 border-accent group-hover:border-black border-t-2 border-l-2 transform rotate-45 transition duration-500"></div>
        </button>
      </div>
    )
  );
};
