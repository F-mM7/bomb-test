import { useEffect, useRef } from 'react';
import {
  calculateGlobalScale,
  setGlobalScale,
  setZIndexVariables,
} from '../utils/responsive';

export const useResponsiveSetup = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const scale = calculateGlobalScale(containerWidth, containerHeight);
      setGlobalScale(scale);
      setZIndexVariables();
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    
    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return { containerRef };
};