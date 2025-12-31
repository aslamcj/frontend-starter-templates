import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FadeIn } from './components/FadeIn';
import { StaggerList } from './components/StaggerList';
import { TimelineDemo } from './components/TimelineDemo';
import { ScrollTriggerDemo } from './components/ScrollTriggerDemo';
import { TextAnimation } from './components/TextAnimation';
import { MorphingShape } from './components/MorphingShape';

gsap.registerPlugin(useGSAP);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container" ref={containerRef}>
      <h1>GSAP Animation Demos</h1>

      <div className="demo-section">
        <h2>Fade In Animation</h2>
        <FadeIn>
          <div style={{ padding: '2rem', background: '#292524', borderRadius: '12px' }}>
            This content fades in with GSAP
          </div>
        </FadeIn>
      </div>

      <div className="demo-section">
        <h2>Stagger Animation</h2>
        <StaggerList
          items={['GSAP Item 1', 'GSAP Item 2', 'GSAP Item 3', 'GSAP Item 4', 'GSAP Item 5']}
        />
      </div>

      <div className="demo-section">
        <h2>Timeline Animation</h2>
        <TimelineDemo />
      </div>

      <div className="demo-section">
        <h2>Text Animation</h2>
        <TextAnimation text="GSAP makes text animations easy!" />
      </div>

      <div className="demo-section">
        <h2>Morphing Shapes</h2>
        <MorphingShape />
      </div>

      <div className="demo-section">
        <h2>Scroll Trigger</h2>
        <ScrollTriggerDemo />
      </div>
    </div>
  );
}
