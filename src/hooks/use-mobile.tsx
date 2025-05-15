import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768; // Example breakpoint for mobile (Tailwind's md)

export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on initial mount
    const checkDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return isMobile;
}

