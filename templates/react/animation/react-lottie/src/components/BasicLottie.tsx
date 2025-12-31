import Lottie from 'lottie-react';
import { checkAnimation } from '../animations/check';

export function BasicLottie() {
  return (
    <Lottie
      animationData={checkAnimation}
      loop={true}
      style={{ width: 200, height: 200, margin: '0 auto' }}
    />
  );
}
