import { useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface AnimationOptions {
  duration?: number;
  ease?: string;
  delay?: number;
}

export function useGsapAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const { contextSafe } = useGSAP({ scope: ref });

  const animateTo = contextSafe((props: gsap.TweenVars) => {
    if (ref.current) {
      return gsap.to(ref.current, props);
    }
    return null;
  });

  const animateFrom = contextSafe((props: gsap.TweenVars) => {
    if (ref.current) {
      return gsap.from(ref.current, props);
    }
    return null;
  });

  const animateFromTo = contextSafe((fromProps: gsap.TweenVars, toProps: gsap.TweenVars) => {
    if (ref.current) {
      return gsap.fromTo(ref.current, fromProps, toProps);
    }
    return null;
  });

  return { ref, animateTo, animateFrom, animateFromTo };
}

export function useFadeIn(options: AnimationOptions = {}) {
  const { duration = 0.8, ease = 'power3.out', delay = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        opacity: 0,
        y: 30,
        duration,
        delay,
        ease,
      });
    }
  }, [duration, delay, ease]);

  return ref;
}

export function useStagger(selector: string, options: AnimationOptions = {}) {
  const { duration = 0.6, ease = 'back.out(1.7)', delay = 0 } = options;
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(selector, {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration,
        delay,
        ease,
      });
    },
    { scope: containerRef, dependencies: [selector, duration, delay, ease] }
  );

  return containerRef;
}
