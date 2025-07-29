"use client";

import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(() => {
      if (typeof window !== "undefined") return window.matchMedia(query).matches;
      return false;
    });
  
    useEffect(() => {
      const media = window.matchMedia(query);
  
      const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
  
      media.addEventListener("change", handleChange);
  
      return () => {
        media.removeEventListener("change", handleChange);
      };
    }, [query]);
  
    return matches;
  };

  export default useMediaQuery;