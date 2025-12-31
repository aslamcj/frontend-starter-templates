import { useRef, useEffect, useCallback } from 'react';
import { animate, spring, type AnimationOptions } from 'motion';

export function useAnimate<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const animateTo = useCallback((keyframes: Record<string, unknown>, options?: AnimationOptions) => {
    if (ref.current) {
      return animate(ref.current, keyframes, options);
    }
    return null;
  }, []);

  return { ref, animate: animateTo };
}

export function useFadeIn<T extends HTMLElement>(duration = 0.5, delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animate(
        ref.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration, delay, easing: 'ease-out' }
      );
    }
  }, [duration, delay]);

  return ref;
}

export function useSpringAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const springTo = useCallback(
    (
      keyframes: Record<string, unknown>,
      config: { stiffness?: number; damping?: number } = {}
    ) => {
      if (ref.current) {
        const { stiffness = 200, damping = 20 } = config;
        return animate(ref.current, keyframes, {
          easing: spring({ stiffness, damping }),
        });
      }
      return null;
    },
    []
  );

  return { ref, spring: springTo };
}

export function useHoverAnimation<T extends HTMLElement>(
  hoverStyles: Record<string, unknown>,
  options?: AnimationOptions
) {
  const ref = useRef<T>(null);
  const originalStyles = useRef<Record<string, unknown>>({});

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Store original styles
    Object.keys(hoverStyles).forEach((key) => {
      const computedStyle = getComputedStyle(element);
      originalStyles.current[key] = computedStyle.getPropertyValue(
        key.replace(/([A-Z])/g, '-$1').toLowerCase()
      );
    });

    const handleMouseEnter = () => {
      animate(element, hoverStyles, options);
    };

    const handleMouseLeave = () => {
      animate(element, originalStyles.current, options);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverStyles, options]);

  return ref;
}
