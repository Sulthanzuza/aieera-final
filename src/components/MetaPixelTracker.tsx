import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const MetaPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {

    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]); 

  return null;
};

export default MetaPixelTracker;