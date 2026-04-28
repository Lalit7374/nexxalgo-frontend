import React, { useEffect, useRef, useState } from 'react';

/**
 * VantaBackground — uses VANTA.NET (interactive 3D network)
 *
 * Settings used:
 *   color: 0x4a9eff        — brand blue dots & connection lines
 *   backgroundColor: 0x1b1b1d — dark charcoal/black
 *   points: 13             — number of dots
 *   maxDistance: 29        — line connection threshold
 *   spacing: 17            — distance between dots
 *   showDots: true
 *
 * - Loads three.js (r134) + vanta.net dynamically from CDN
 * - Properly destroys WebGL context on unmount (no memory leaks)
 * - Respects prefers-reduced-motion
 * - Lighter settings on mobile for performance
 */
const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      const interval = setInterval(() => {
        if (window.THREE && window.VANTA) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
      setTimeout(() => { clearInterval(interval); resolve(); }, 2000);
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });

const VantaBackground = ({ intensity = 'normal' }) => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 600;
    let cancelled = false;

    const init = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');

        if (cancelled || !vantaRef.current || !window.VANTA) return;

        // Exact settings from the Vanta config you provided
        effectRef.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4a9eff,           // brand blue accent #4a9eff
          backgroundColor: 0x1b1b1d, // your dark charcoal
          points: isMobile ? 8 : intensity === 'light' ? 10 : 13,
          maxDistance: isMobile ? 22 : 29,
          spacing: isMobile ? 20 : 17,
          showDots: true,
        });

        setIsReady(true);
      } catch (err) {
        console.warn('Vanta failed to load, using CSS fallback bg:', err);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (effectRef.current) {
        try { effectRef.current.destroy(); } catch (_) {}
        effectRef.current = null;
      }
    };
  }, [intensity]);

  return (
    <div
      ref={vantaRef}
      className="vanta-bg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: isReady ? 1 : 0,
        transition: 'opacity 1.2s ease',
      }}
    />
  );
};

export default VantaBackground;
