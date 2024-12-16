import { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        ref?: React.RefObject<HTMLElement>;
      };
    }
  }
}

export function SplineBackground() {
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <spline-viewer
        ref={viewerRef}
        url="https://prod.spline.design/XOXla5P6GZ9weBgd/scene.splinecode"
      />
    </div>
  );
}