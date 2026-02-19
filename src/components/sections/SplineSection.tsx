import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url?: string }, HTMLElement>;
    }
  }
}

export function SplineSection() {
  useEffect(() => {
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full" style={{ height: '600px' }}>
      <spline-viewer
        url="https://prod.spline.design/fFZA6RAQ39ts6DIc/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </section>
  );
}
