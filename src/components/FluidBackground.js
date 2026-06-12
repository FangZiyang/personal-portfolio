import React, { useEffect, useRef, useState } from 'react';
import { hasFinePointer, prefersReducedMotion } from '../hooks';

// Full-page liquid background: an aurora color field and a dot lattice,
// both warped by ripples that spread from the mouse trail, with a faint
// luminous wake. Drifts slowly on its own when the mouse is idle.
// Renders nothing on touch devices / reduced motion / no WebGL — the CSS
// aurora on body::before remains as the fallback.

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const TRAIL = 10;

const FRAG = `
precision mediump float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime;
uniform vec4 uTrail[${TRAIL}]; /* x, y (uv), age (s), strength (0..1) */

float blob(vec2 uv, vec2 c, float r, vec2 aspect) {
  float d = length((uv - c) * aspect);
  return exp(-d * d / (r * r));
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uRes.x / max(uRes.y, 1.0), 1.0);

  /* ripples from the mouse trail displace the sampling position */
  vec2 disp = vec2(0.0);
  float wake = 0.0;
  for (int i = 0; i < ${TRAIL}; i++) {
    vec4 p = uTrail[i];
    if (p.w <= 0.0) continue;
    vec2 d = (uv - p.xy) * aspect;
    float r = length(d);
    float ring = sin(r * 36.0 - p.z * 3.2) * exp(-r * 8.5) * p.w;
    disp += (r > 0.0001 ? d / r : vec2(0.0)) * ring * 0.009;
    wake += abs(ring);
  }

  /* slow ambient warp keeps it alive when idle */
  vec2 w = uv + disp;
  w += 0.012 * vec2(sin(w.y * 4.0 + uTime * 0.25), cos(w.x * 3.5 + uTime * 0.21));

  /* aurora field (positions echo the CSS fallback washes) */
  vec3 col = vec3(0.020, 0.024, 0.043); /* #05060b */
  col += vec3(0.18, 0.22, 0.58) * blob(w, vec2(0.12 + 0.06 * sin(uTime * 0.11), -0.02 + 0.05 * cos(uTime * 0.13)), 0.55, aspect) * 0.42;
  col += vec3(0.40, 0.18, 0.58) * blob(w, vec2(0.92 + 0.05 * cos(uTime * 0.09), 0.02 + 0.05 * sin(uTime * 0.12)), 0.50, aspect) * 0.36;
  col += vec3(0.10, 0.42, 0.58) * blob(w, vec2(0.50 + 0.08 * sin(uTime * 0.07), 1.10), 0.60, aspect) * 0.32;

  /* dot lattice, bent by the same displacement */
  vec2 g = w * uRes;
  vec2 cell = fract(g / 30.0) - 0.5;
  float dd = length(cell) * 30.0;
  float dotShape = smoothstep(1.9, 0.7, dd);
  float dotMask = 0.30 + 0.70 * exp(-length((uv - vec2(0.5, 0.30)) * aspect) * 1.7);
  col += vec3(1.0) * dotShape * 0.05 * dotMask;

  /* luminous wake along the ripples */
  col += vec3(0.45, 0.55, 1.0) * wake * 0.03;

  gl_FragColor = vec4(col, 1.0);
}`;

const supported = () =>
  typeof WebGLRenderingContext !== 'undefined' && hasFinePointer() && !prefersReducedMotion();

const compile = (gl, type, src) => {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  return sh;
};

export const FluidBackground = () => {
  const canvasRef = useRef(null);
  const [off, setOff] = useState(() => !supported());

  useEffect(() => {
    if (off) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: true });
    if (!gl) {
      setOff(true);
      return undefined;
    }
    let disposed = false;

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setOff(true);
      return undefined;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uTrail = gl.getUniformLocation(prog, 'uTrail');

    const LIFE = 1250; // ms a ripple keeps expanding
    const points = []; // {x, y (uv), t}
    let last = { x: -1, y: -1, t: 0 };
    const trailData = new Float32Array(TRAIL * 4);
    const t0 = performance.now();
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const onMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const now = performance.now();
      const moved = Math.hypot((x - last.x) * window.innerWidth, (y - last.y) * window.innerHeight);
      if (moved > 26 || now - last.t > 110) {
        points.push({ x, y, t: now });
        if (points.length > TRAIL) points.shift();
        last = { x, y, t: now };
      }
    };

    const frame = () => {
      if (disposed) return;
      const now = performance.now();
      while (points.length && now - points[0].t > LIFE) points.shift();
      trailData.fill(0);
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const age = (now - p.t) / 1000;
        const k = 1 - (now - p.t) / LIFE;
        trailData[i * 4] = p.x;
        trailData[i * 4 + 1] = p.y;
        trailData[i * 4 + 2] = age;
        trailData[i * 4 + 3] = k * k; // ease-out fade
      }
      gl.uniform4fv(uTrail, trailData);
      gl.uniform1f(uTime, (now - t0) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [off]);

  if (off) return null;
  return <canvas className="fluid-bg" ref={canvasRef} aria-hidden="true" />;
};
