import { StrictMode } from 'react'; 
import { createRoot, hydrateRoot } from 'react-dom/client'; 
import App from './App.tsx'; 
import './index.css';


declare global {
  interface Window {
    snapSaveState?: () => string;
  }
}

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {

  hydrateRoot(
    rootElement, 
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}


window.snapSaveState = () => {
  return document.documentElement.outerHTML;
};