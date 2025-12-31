import { useSpring, animated } from '@react-spring/web';

interface SpringNumberProps {
  value: number;
}

export function SpringNumber({ value }: SpringNumberProps) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.span>{number.to((n) => Math.floor(n).toLocaleString())}</animated.span>;
}
