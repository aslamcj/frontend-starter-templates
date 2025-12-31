import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Ensure root element exists
if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure there is a <div id="root"></div> in your HTML.'
  );
}

// Create root and render app
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
