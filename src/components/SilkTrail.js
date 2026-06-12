import React, { useEffect, useRef } from 'react';
import { hasFinePointer, prefersReducedMotion } from '../hooks';

// Silk ribbon trail: a soft, tapered gradient stroke that flows behind the
// cursor with inertia and dissolves. Two passes per segment (wide halo +
// bright core) over a quadratic curve through smoothed points.
export const SilkTrail = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !hasFinePointer() || prefersReducedMotion()) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const LIFE = 800; // ms a point stays alive
    const pts = [];
    const head = { x: 0, y: 0, fx: 0, fy: 0, seen: false };
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      head.x = e.clientX;
      head.y = e.clientY;
      if (!head.seen) {
        head.fx = head.x;
        head.fy = head.y;
        head.seen = true;
      }
    };

    const step = () => {
      const now = performance.now();

      if (head.seen) {
        // the head hugs the cursor; the silk lag lives in the fading tail
        head.fx += (head.x - head.fx) * 0.55;
        head.fy += (head.y - head.fy) * 0.55;
        const last = pts[pts.length - 1];
        if (!last || Math.hypot(head.fx - last.x, head.fy - last.y) > 1.2) {
          pts.push({ x: head.fx, y: head.fy, t: now });
        }
      }
      while (pts.length && now - pts[0].t > LIFE) pts.shift();

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (pts.length > 2) {
        ctx.globalCompositeOperation = 'lighter';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < pts.length - 1; i++) {
          const p0 = pts[i - 1];
          const p1 = pts[i];
          const p2 = pts[i + 1];
          const alive = Math.max(0, 1 - (now - p1.t) / LIFE);
          if (alive <= 0) continue;

          const speed = Math.min(Math.hypot(p2.x - p0.x, p2.y - p0.y), 64);
          const width = (1.8 + speed * 0.18) * alive;
          // cyan at the head drifting to violet along the tail
          const hue = 268 - (i / pts.length) * 72;

          ctx.beginPath();
          ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
          ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);

          ctx.strokeStyle = `hsla(${hue}, 95%, 72%, ${0.17 * alive})`;
          ctx.lineWidth = width + 9 * alive;
          ctx.stroke();

          ctx.strokeStyle = `hsla(${hue}, 100%, 86%, ${0.42 * alive})`;
          ctx.lineWidth = Math.max(width * 0.45, 0.5);
          ctx.stroke();
        }

        ctx.globalCompositeOperation = 'source-over';
      }

      raf = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="silk-trail" ref={ref} aria-hidden="true" />;
};
