import { useState, useEffect } from 'react';

export default function useIsMobile(initialValue: number): boolean {
  const [width, setWidth] = useState<number>(initialValue);

  function handleWindowResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return width <= 992;
}
