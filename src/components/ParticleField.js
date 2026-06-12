import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks';

// Animated node-network canvas for the hero: drifting particles linked by
// faint lines, gently attracted to (and wired up to) the cursor. Reads as a
// living distributed system. Pauses when the hero leaves the viewport.
export const ParticleField = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || prefersReducedMotion()) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const host = canvas.parentElement;
    const LINK = 130;
    const MOUSE_R = 210;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let pts = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const r = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 768 ? 36 : 84;
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.2,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < MOUSE_R && d > 0.001) {
          // gentle attraction toward the cursor
          p.x += (dx / d) * 0.45 * (1 - d / MOUSE_R);
          p.y += (dy / d) * 0.45 * (1 - d / MOUSE_R);
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const o = (1 - Math.sqrt(d2) / LINK) * 0.17;
            ctx.strokeStyle = `rgba(124, 140, 255, ${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < MOUSE_R * MOUSE_R) {
          const o = (1 - Math.sqrt(md2) / MOUSE_R) * 0.3;
          ctx.strokeStyle = `rgba(67, 217, 255, ${o})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = 'rgba(150, 175, 255, 0.55)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener('resize', resize);
    host.addEventListener('mousemove', onMove, { passive: true });
    host.addEventListener('mouseleave', onLeave);

    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => (entries[0].isIntersecting ? start() : stop()),
        { threshold: 0.05 }
      );
      io.observe(host);
    } else {
      start();
    }

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      host.removeEventListener('mousemove', onMove);
      host.removeEventListener('mouseleave', onLeave);
      if (io) io.disconnect();
    };
  }, []);

  return <canvas className="hero__particles" ref={ref} aria-hidden="true" />;
};
