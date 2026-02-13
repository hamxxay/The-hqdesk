import { useCallback, useEffect, useState } from 'react';

const useResponsiveSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSizes = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight]);

// src/hooks/useResponsiveSize.ts (lines 12-17)
useEffect(() => {
  window.addEventListener('resize', setSizes);
  setSizes();
  return () => window.removeEventListener('resize', setSizes);  // Add this line
}, [setSizes]);


  return { width, height };
};

export default useResponsiveSize;
