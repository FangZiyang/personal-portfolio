import React, { useRef } from 'react';
import { profile } from '../data';
import { ArrowRight, ArrowDown, Github, MapPin } from '../icons';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Hero = () => {
  const heroRef = useRef(null);

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
      <div className="hero__grid" />
      <div className="hero__glow" />

      <div className="container hero__inner">
        {/* Temporarily hidden per request:
        <div className="eyebrow hero__badge reveal">
          <span className="dot" />
          {profile.availability} · {profile.location}
        </div>
        */}

        <h1 className="hero__title reveal" data-reveal-delay="90">
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="hero__lede reveal" data-reveal-delay="180">
          {profile.lede}
        </p>

        <div className="hero__cta reveal" data-reveal-delay="280">
          <button className="btn btn-primary" onClick={() => scrollToId('contact')}>
            Get in touch <ArrowRight />
          </button>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Github width={18} height={18} /> View GitHub
          </a>
        </div>

        <div className="hero__meta reveal" data-reveal-delay="380">
          <span className="hero__meta-item">
            <MapPin width={15} height={15} /> {profile.location}
          </span>
          <span className="hero__meta-sep" />
          <span className="hero__meta-item">M.Eng · McMaster University</span>
          <span className="hero__meta-sep" />
          <span className="hero__meta-item">Open to full-time roles</span>
        </div>
      </div>

      <button className="hero__scroll" onClick={() => scrollToId('about')} aria-label="Scroll down">
        <span>Scroll</span>
        <ArrowDown width={15} height={15} />
      </button>
    </section>
  );
};
