import React from 'react';
import { profile } from '../data';
import { RollingText } from './RollingText';
import { ArrowRight, Mail, LinkedIn, Github } from '../icons';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__cta reveal">
          <span className="eyebrow">
            <span className="dot" /> Based in Toronto, ON
          </span>
          <h2 className="footer__headline">
            Let's build something <span className="gradient-text">great</span>.
          </h2>
          <p className="footer__sub">
            Always happy to talk backend systems, AI infrastructure, or an idea you want to ship.
            The fastest way to reach me is email.
          </p>

          <div className="footer__actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary magnetic roll-trigger">
              <Mail /> <RollingText text={profile.email} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost magnetic roll-trigger"
            >
              <LinkedIn width={18} height={18} /> <RollingText text="LinkedIn" />{' '}
              <ArrowRight width={15} height={15} />
            </a>
          </div>

          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="nav__icon magnetic" aria-label="GitHub">
              <Github width={18} height={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav__icon magnetic" aria-label="LinkedIn">
              <LinkedIn width={18} height={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="nav__icon magnetic" aria-label="Email">
              <Mail width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__brand">
            <span className="nav__brand-mark">RF</span> {profile.fullName}
          </span>
          <span className="footer__copy">© {year} · Designed &amp; built with care.</span>
        </div>
      </div>
    </footer>
  );
};
