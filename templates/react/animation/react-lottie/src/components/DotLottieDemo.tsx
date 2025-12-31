import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function DotLottieDemo() {
  return (
    <div>
      <DotLottieReact
        src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
        loop
        autoplay
        style={{ width: 200, height: 200, margin: '0 auto' }}
      />
      <p style={{ fontSize: '0.875rem', color: '#a78bfa', marginTop: '0.5rem' }}>
        .lottie format is smaller and optimized
      </p>
    </div>
  );
}
