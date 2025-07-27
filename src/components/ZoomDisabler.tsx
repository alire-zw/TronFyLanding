'use client';

import { useEffect } from 'react';

export default function ZoomDisabler() {
  useEffect(() => {
    // Disable pinch zoom
    const disablePinchZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Disable double tap zoom
    let lastTapTime = 0;
    const disableDoubleTapZoom = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTapTime < 300) {
        e.preventDefault();
      }
      lastTapTime = now;
    };

    // Force viewport settings
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    document.getElementsByTagName('head')[0].appendChild(meta);

    // Add event listeners
    document.addEventListener('touchstart', disablePinchZoom, { passive: false });
    document.addEventListener('touchend', disableDoubleTapZoom, false);

    // Cleanup function
    return () => {
      document.removeEventListener('touchstart', disablePinchZoom);
      document.removeEventListener('touchend', disableDoubleTapZoom);
      if (meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, []);

  return null;
} 