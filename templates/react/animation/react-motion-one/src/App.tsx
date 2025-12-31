import { FadeIn } from './components/FadeIn';
import { AnimateElement } from './components/AnimateElement';
import { StaggerDemo } from './components/StaggerDemo';
import { SpringDemo } from './components/SpringDemo';
import { TimelineDemo } from './components/TimelineDemo';
import { ScrollDemo } from './components/ScrollDemo';

export default function App() {
  return (
    <div className="container">
      <h1>Motion One Demos</h1>

      <div className="demo-section">
        <h2>Fade In Animation</h2>
        <FadeIn>
          <div style={{ padding: '2rem', background: '#0c4a6e', borderRadius: '12px' }}>
            This content fades in with Motion One
          </div>
        </FadeIn>
      </div>

      <div className="demo-section">
        <h2>Animate Element</h2>
        <AnimateElement />
      </div>

      <div className="demo-section">
        <h2>Stagger Animation</h2>
        <StaggerDemo />
      </div>

      <div className="demo-section">
        <h2>Spring Physics</h2>
        <SpringDemo />
      </div>

      <div className="demo-section">
        <h2>Timeline Animation</h2>
        <TimelineDemo />
      </div>

      <div className="demo-section">
        <h2>Scroll Animation</h2>
        <ScrollDemo />
      </div>
    </div>
  );
}
