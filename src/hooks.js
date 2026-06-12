import { useEffect, useRef, useState } from 'react';

/** Safe media-query helpers (jsdom has no matchMedia). */
export function prefersReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function hasFinePointer() {
  return (
    typeof window.matchMedia === 'function' && window.matchMedia('(pointer: fine)').matches
  );
}

/**
 * Reveals all `.reveal` elements on the page as they scroll into view.
 * Call once near the app root. Respects optional `data-reveal-delay` (ms).
 */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'));
    if (!nodes.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = el.getAttribute('data-reveal-delay');
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}

/**
 * Cursor-tracked spotlight for `.card` elements: keeps the CSS vars
 * `--sx` / `--sy` (percent) updated on whichever card the mouse is over.
 * One delegated listener for the whole page, throttled to one frame.
 */
export function useCardSpotlight() {
  useEffect(() => {
    let raf = 0;
    const onMove = (e) => {
      if (!(e.target instanceof Element)) return;
      const card = e.target.closest('.card');
      if (!card || raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--sx', `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty('--sy', `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * Magnetic pull for `.magnetic` elements: they lean toward the cursor while
 * hovered and spring back on leave (the spring comes from a CSS transition).
 */
export function useMagnetic(strength = 0.16) {
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;

    const els = Array.from(document.querySelectorAll('.magnetic'));
    const cleanups = els.map((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove, { passive: true });
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => cleanups.forEach((c) => c());
  }, [strength]);
}

/**
 * 3D tilt for `.tilt` elements: rotates toward the cursor in perspective,
 * with a slow settle back on leave.
 */
export function useTilt(maxDeg = 7) {
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;

    const els = Array.from(document.querySelectorAll('.tilt'));
    const cleanups = els.map((el) => {
      const onEnter = () => {
        el.style.transition = 'transform 0.12s ease-out';
      };
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(px * maxDeg).toFixed(2)}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        el.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
        el.style.transform = '';
      };
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mousemove', onMove, { passive: true });
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => cleanups.forEach((c) => c());
  }, [maxDeg]);
}

/**
 * Pointer-tracked bloom inside buttons: keeps `--bx` / `--by` (percent)
 * updated on the hovered .btn / .nav__cta so a radial sheen follows the
 * cursor. One delegated listener, throttled to one frame.
 */
export function usePointerBloom() {
  useEffect(() => {
    if (!hasFinePointer()) return undefined;

    let raf = 0;
    const onMove = (e) => {
      if (!(e.target instanceof Element)) return;
      const btn = e.target.closest('.btn, .nav__cta');
      if (!btn || raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--bx', `${((e.clientX - r.left) / r.width) * 100}%`);
        btn.style.setProperty('--by', `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/** Cycles 0..length-1 on an interval (for the hero role rotator). */
export function useRotator(length, interval = 2600) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);

  return index;
}

/** Animated count-up that starts when the element enters the viewport. */
export function useCountUp(target, { duration = 1800, decimals = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setValue(target);
      };
      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');

  return { ref, display };
}

/** Tracks which section id is currently active based on scroll position. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.32;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  return active;
}

/** Returns scroll progress 0..1 of the whole document. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}
