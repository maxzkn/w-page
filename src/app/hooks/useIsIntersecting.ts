import { RefObject, useEffect, useState } from 'react';

export const useIsIntersecting = (ref: RefObject<HTMLElement | null>) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        if (!hasIntersected && entry.isIntersecting) {
          setIntersecting(true);
          setHasIntersected(true);
        }
      });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return isIntersecting;
};
