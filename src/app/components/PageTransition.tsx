'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Set navigating state to hide content immediately
    setIsNavigating(true);
    setIsVisible(false);
    
    // Add shorter delay to make total time 0.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsNavigating(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run effect when pathname changes

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: isVisible ? 'transparent' : 'white',
        transition: 'background-color 0s'
      }}
    >
      <div 
        className={`transition-opacity duration-600 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          visibility: isNavigating ? 'hidden' : 'visible'
        }}
      >
        {children}
      </div>
    </div>
  );
};
