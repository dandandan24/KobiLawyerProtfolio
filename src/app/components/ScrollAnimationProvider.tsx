'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollAnimationContextType {
  animatedElements: Set<string>;
}

const ScrollAnimationContext = createContext<ScrollAnimationContextType | undefined>(undefined);

export const useScrollAnimation = () => {
  const context = useContext(ScrollAnimationContext);
  if (!context) {
    throw new Error('useScrollAnimation must be used within a ScrollAnimationProvider');
  }
  return context;
};

interface ScrollAnimationProviderProps {
  children: ReactNode;
}

export const ScrollAnimationProvider = ({ children }: ScrollAnimationProviderProps) => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  // Reset scroll animations when route changes, but show home page elements immediately
  useEffect(() => {
    if (pathname === '/') {
      // For home page, show hero and about sections immediately (like refresh)
      setAnimatedElements(new Set(['hero', 'about']));
    } else {
      // For other pages, reset all animations
      setAnimatedElements(new Set());
    }
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setAnimatedElements(prev => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // Recreate observer when route changes

  return (
    <ScrollAnimationContext.Provider value={{ animatedElements }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
};
