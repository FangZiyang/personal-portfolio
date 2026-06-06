import React, { useEffect, useMemo, useState } from 'react';
import { navSections, profile } from '../data';
import { useActiveSection, useScrollProgress } from '../hooks';
import { LinkedIn, Github } from '../icons';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = useMemo(() => navSections.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <nav className="nav__inner">
          <button className="nav__brand" onClick={() => go('home')} aria-label="Back to top">
            <span className="nav__brand-mark">RF</span>
            <span className="nav__brand-text">{profile.name}</span>
          </button>

          <div className="nav__links">
            {navSections.map((s) => (
              <button
                key={s.id}
                className={`nav__link ${active === s.id ? 'is-active' : ''}`}
                onClick={() => go(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="nav__actions">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav__icon" aria-label="LinkedIn">
              <LinkedIn width={17} height={17} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="nav__icon" aria-label="GitHub">
              <Github width={17} height={17} />
            </a>
            <button className="nav__cta" onClick={() => go('contact')}>
              Let's talk
            </button>
          </div>

          <button
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {navSections.map((s) => (
          <button key={s.id} className="mobile-menu__link" onClick={() => go(s.id)}>
            {s.label}
          </button>
        ))}
        <button className="btn btn-primary mobile-menu__cta" onClick={() => go('contact')}>
          Let's talk
        </button>
        <div className="mobile-menu__social">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav__icon">
            <LinkedIn width={18} height={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="nav__icon">
            <Github width={18} height={18} />
          </a>
        </div>
      </div>
    </>
  );
};
