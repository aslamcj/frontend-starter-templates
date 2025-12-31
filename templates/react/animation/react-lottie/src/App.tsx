import { BasicLottie } from './components/BasicLottie';
import { ControlledLottie } from './components/ControlledLottie';
import { InteractiveLottie } from './components/InteractiveLottie';
import { LottieWithSegments } from './components/LottieWithSegments';
import { LottieLoader } from './components/LottieLoader';
import { DotLottieDemo } from './components/DotLottieDemo';

export default function App() {
  return (
    <div className="container">
      <h1>Lottie Animation Demos</h1>

      <div className="demo-section">
        <h2>Basic Lottie Animation</h2>
        <div className="demo-grid">
          <div className="lottie-card">
            <h3>Auto-playing Animation</h3>
            <BasicLottie />
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Controlled Animation</h2>
        <div className="demo-grid">
          <div className="lottie-card">
            <h3>Play/Pause/Stop Controls</h3>
            <ControlledLottie />
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Interactive Animation</h2>
        <div className="demo-grid">
          <div className="lottie-card">
            <h3>Hover to Play</h3>
            <InteractiveLottie trigger="hover" />
          </div>
          <div className="lottie-card">
            <h3>Click to Play</h3>
            <InteractiveLottie trigger="click" />
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Segment Playback</h2>
        <div className="demo-grid">
          <div className="lottie-card">
            <h3>Play Specific Segments</h3>
            <LottieWithSegments />
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Loading Indicator</h2>
        <div className="demo-grid">
          <div className="lottie-card">
            <h3>Async Loading Demo</h3>
            <LottieLoader />
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>DotLottie Format</h2>
        <div className="demo-grid">
          <div className="lottie-card">
            <h3>Optimized .lottie Format</h3>
            <DotLottieDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
