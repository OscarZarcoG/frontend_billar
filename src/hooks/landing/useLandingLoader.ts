'use client';

import { useState, useEffect } from 'react';

interface UseLandingLoaderOptions {
  loadingDelay?: number;
}

export function useLandingLoader({ loadingDelay = 100 }: UseLandingLoaderOptions = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(timer);
  }, [loadingDelay]);

  return {
    isLoading: !isMounted || isLoading,
    isMounted,
  };
}