import React from 'react';
import { education } from '../data';
import { CompanyLogo } from './CompanyLogo';

export const Education = () => {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Education</span>
          <h2>Academic foundation.</h2>
        </div>

        <div className="education__list">
          {education.map((edu, idx) => (
            <div className="card education-card reveal" data-reveal-delay={idx * 80} key={edu.school}>
              <CompanyLogo logo={edu.logo} mono={edu.mono} alt={edu.school} sizeClass="education-card__mono" />
              <div className="education-card__body">
                <h3>{edu.school}</h3>
                <p className="education-card__degree">{edu.degree}</p>
              </div>
              <div className="education-card__meta">
                <span className="education-card__date">{edu.date}</span>
                <span className="education-card__loc">{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
