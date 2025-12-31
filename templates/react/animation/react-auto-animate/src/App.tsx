import { AnimatedList } from './components/AnimatedList';
import { AnimatedDropdown } from './components/AnimatedDropdown';
import { AnimatedGrid } from './components/AnimatedGrid';
import { AnimatedForm } from './components/AnimatedForm';
import { AnimatedAccordion } from './components/AnimatedAccordion';
import { CustomDuration } from './components/CustomDuration';

export default function App() {
  return (
    <div className="container">
      <h1>Auto Animate Demos</h1>

      <div className="demo-section">
        <h2>Animated List</h2>
        <AnimatedList />
      </div>

      <div className="demo-section">
        <h2>Animated Dropdown</h2>
        <AnimatedDropdown />
      </div>

      <div className="demo-section">
        <h2>Animated Grid</h2>
        <AnimatedGrid />
      </div>

      <div className="demo-section">
        <h2>Animated Form</h2>
        <AnimatedForm />
      </div>

      <div className="demo-section">
        <h2>Accordion</h2>
        <AnimatedAccordion />
      </div>

      <div className="demo-section">
        <h2>Custom Duration</h2>
        <CustomDuration />
      </div>
    </div>
  );
}
