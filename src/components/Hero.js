import React, { useEffect, useRef, useState } from 'react';
import { profile, terminalLines } from '../data';
import { useRotator, prefersReducedMotion } from '../hooks';
import { ParticleField } from './ParticleField';
import { RollingText } from './RollingText';
import { ArrowRight, ArrowDown, Github } from '../icons';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Remounted (via key) for each word; fades in through a transition.
const RoleWord = ({ word }) => {
  const ref = useRef(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (ref.current) ref.current.classList.add('is-in');
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span className="hero__role-word" ref={ref}>
      {word}
    </span>
  );
};

// Terminal with a typewriter: commands are typed character by character,
// each output line appears once its command finishes.
const Terminal = () => {
  const [pos, setPos] = useState(() =>
    prefersReducedMotion() ? { li: terminalLines.length, ch: 0 } : { li: 0, ch: 0 }
  );
  const allDone = pos.li >= terminalLines.length;

  useEffect(() => {
    if (allDone) return undefined;
    const line = terminalLines[pos.li];
    let t;
    if (pos.li === 0 && pos.ch === 0) {
      t = setTimeout(() => setPos({ li: 0, ch: 1 }), 650);
    } else if (pos.ch < line.cmd.length) {
      t = setTimeout(() => setPos({ li: pos.li, ch: pos.ch + 1 }), 26 + Math.random() * 38);
    } else {
      t = setTimeout(() => setPos({ li: pos.li + 1, ch: 0 }), 360);
    }
    return () => clearTimeout(t);
  }, [pos, allDone]);

  return (
    <div className="terminal tilt" aria-hidden="true">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--r" />
        <span className="terminal__dot terminal__dot--y" />
        <span className="terminal__dot terminal__dot--g" />
        <span className="terminal__bar-title">ryan@toronto — zsh</span>
      </div>
      <div className="terminal__body">
        {terminalLines.map((line, i) => {
          if (i > pos.li) return null;
          const typingThis = i === pos.li && !allDone;
          const cmdText = typingThis ? line.cmd.slice(0, pos.ch) : line.cmd;
          const cmdDone = !typingThis || pos.ch >= line.cmd.length;
          const isLast = i === terminalLines.length - 1;
          return (
            <div key={line.cmd}>
              <div className="terminal__cmd">
                <span className="terminal__prompt">❯</span>
                {cmdText}
                {typingThis && !cmdDone && <span className="terminal__caret" />}
              </div>
              {cmdDone && (
                <div className={`terminal__out ${line.accent ? 'terminal__out--accent' : ''}`}>
                  {line.accent && <span className="terminal__status-dot" />}
                  {line.out}
                  {allDone && isLast && <span className="terminal__caret" />}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Hero = () => {
  const heroRef = useRef(null);
  const roleIndex = useRotator(profile.roles.length, 2800);
  const role = profile.roles[roleIndex];

  const onMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section className="hero" id="home" ref={heroRef} onMouseMove={onMove}>
      <div className="hero__aurora">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
      </div>
      <ParticleField />
      <div className="hero__glow" />

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Availability badge intentionally omitted (hidden per earlier request). */}
          <div className="hero__meta-top reveal">
            <span>Software Engineer</span>
            <span className="hero__meta-sep" />
            <span>Toronto, ON</span>
            <span className="hero__meta-sep" />
            <span>M.Eng @ McMaster</span>
          </div>

          <h1 className="hero__title reveal" data-reveal-delay="90">
            <span className="gradient-text gradient-text--animated">{profile.name}</span>
          </h1>

          <p className="hero__role reveal" data-reveal-delay="170">
            I build <RoleWord word={role} key={role} />
          </p>

          <p className="hero__lede reveal" data-reveal-delay="260">
            {profile.intro}
          </p>

          <div className="hero__cta reveal" data-reveal-delay="340">
            <button className="btn btn-primary magnetic roll-trigger" onClick={() => scrollToId('contact')}>
              <RollingText text="Get in touch" /> <ArrowRight />
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost magnetic roll-trigger"
            >
              <Github width={18} height={18} /> <RollingText text="View GitHub" />
            </a>
          </div>
        </div>

        <div className="hero__visual reveal" data-reveal-delay="300">
          <div className="terminal-float">
            <Terminal />
          </div>
        </div>
      </div>

      <button className="hero__scroll magnetic" onClick={() => scrollToId('about')} aria-label="Scroll down">
        <span>Scroll</span>
        <ArrowDown width={15} height={15} />
      </button>
    </section>
  );
};
