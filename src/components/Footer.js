import React from 'react';
import { profile } from '../data';
import { ArrowRight, Mail, LinkedIn, Github } from '../icons';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__cta reveal">
          <span className="eyebrow">
            <span className="dot" /> {profile.availability}
          </span>
          <h2 className="footer__headline">Let's build something great.</h2>
          <p className="footer__sub">
            I'm open to full-time software engineering opportunities and always happy to talk shop.
            The fastest way to reach me is email.
          </p>

          <div className="footer__actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <LinkedIn width={18} height={18} /> LinkedIn <ArrowRight width={15} height={15} />
            </a>
          </div>

          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="nav__icon" aria-label="GitHub">
              <Github width={18} height={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav__icon" aria-label="LinkedIn">
              <LinkedIn width={18} height={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="nav__icon" aria-label="Email">
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
