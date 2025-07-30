'use client';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useEffect, useState } from 'react';

export const FlowersBanner = () => {
  const t = useTranslations('Home');
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isMobile, setIsMobile] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
      const isSmallScreen = window.innerWidth < 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      setIsMobile(isMobileDevice || isSmallScreen || isTouchDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Track user interaction to enable autoplay
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {
          // Fallback: if autoplay fails, show controls
          if (videoRef.current) {
            videoRef.current.controls = true;
          }
        });
      }
    };

    // Add event listeners for user interaction
    const events = ['touchstart', 'touchend', 'click', 'scroll'];
    events.forEach((event) => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && isInView && videoLoaded) {
      // Try to play video when it comes into view
      const playVideo = async () => {
        try {
          await videoRef.current!.play();
        } catch (error) {
          // If autoplay fails, show controls on mobile
          if (isMobile && videoRef.current) {
            videoRef.current.controls = true;
          }
        }
      };

      playVideo();
    }
  }, [isInView, videoLoaded, isMobile]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    // Fallback to poster image if video fails to load
    if (videoRef.current) {
      videoRef.current.style.display = 'none';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative text-center py-56 full-width-child text-white overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={isMobile && !hasUserInteracted}
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        poster="/flowers-banner.webp"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
      >
        <source src="/flowers-banner-video.webm" type="video/webm" />
        <source src="/flowers-banner-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      <div className="relative z-20">
        <p className="text-headline md:text-banner uppercase">{t('ourStory.title')}</p>
      </div>
    </motion.div>
  );
};
