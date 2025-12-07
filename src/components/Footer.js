import React from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
  return (
    <footer className="footer" id="connect">
      <div className="container">
        <div className="footer-content">
          <h2>Let's work together.</h2>
          <p>416-888-5379 | fangz58@mcmaster.ca</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/ziyang-fang" target="_blank" rel="noreferrer" className="social-btn">
              <img src={navIcon1} alt="LinkedIn" /> LinkedIn
            </a>
            <a href="https://github.com/FangZiyang" target="_blank" rel="noreferrer" className="social-btn">
              <img src={navIcon2} alt="GitHub" /> GitHub
            </a>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Ziyang (Ryan) Fang. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
