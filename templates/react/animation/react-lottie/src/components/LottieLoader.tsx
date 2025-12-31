import { useState } from 'react';
import Lottie from 'lottie-react';
import { loadingAnimation } from '../animations/loading';

export function LottieLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const simulateLoad = () => {
    setIsLoading(true);
    setData(null);

    setTimeout(() => {
      setIsLoading(false);
      setData('Data loaded successfully!');
    }, 3000);
  };

  return (
    <div style={{ minHeight: '250px' }}>
      {isLoading ? (
        <div>
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{ width: 150, height: 150, margin: '0 auto' }}
          />
          <p style={{ textAlign: 'center', color: '#a78bfa' }}>Loading...</p>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          {data ? (
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#4ade80' }}>{data}</p>
          ) : (
            <p style={{ marginBottom: '1rem', color: '#a78bfa' }}>Click to simulate loading</p>
          )}
          <button onClick={simulateLoad}>Load Data</button>
        </div>
      )}
    </div>
  );
}
