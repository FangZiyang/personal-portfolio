import React, { useState } from 'react';
import { experiences } from '../data';
import { CompanyLogo } from './CompanyLogo';
import { Lightbox } from './Lightbox';

const ExperienceCard = ({ exp, idx }) => {
  const [shot, setShot] = useState(null);
  const images = exp.images || [];

  return (
    <article className="timeline__item reveal" data-reveal-delay={idx * 60}>
      <span className="timeline__node" />
      <div className="card timeline__card">
        <div className="timeline__top">
          <div className="timeline__id">
            <CompanyLogo logo={exp.logo} mono={exp.mono} alt={exp.company} sizeClass="timeline__mono" />
            <div>
              <h3 className="timeline__company">{exp.company}</h3>
              <p className="timeline__role">{exp.role}</p>
            </div>
          </div>
          <div className="timeline__when">
            <span className="timeline__date">{exp.date}</span>
            <span className="timeline__loc">{exp.location}</span>
          </div>
        </div>

        <p className="timeline__summary">{exp.summary}</p>

        <ul className="timeline__bullets">
          {exp.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="timeline__tech">
          {exp.tech.map((t) => (
            <span className="pill" key={t}>
              {t}
            </span>
          ))}
        </div>

        {images.length > 0 && (
          <div className="gallery">
            {images.map((src, i) => (
              <button
                className="gallery__thumb"
                key={src}
                onClick={() => setShot(i)}
                aria-label={`View ${exp.company} screenshot ${i + 1}`}
              >
                <img src={`${process.env.PUBLIC_URL}/${src}`} alt={`${exp.company} ${i + 1}`} loading="lazy" />
                <span className="gallery__zoom">View</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <Lightbox images={images} index={shot} alt={exp.company} onClose={() => setShot(null)} onIndex={setShot} />
    </article>
  );
};

export const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2>Where I've shipped.</h2>
          <p>
            Three engineering roles across enterprise AI, public-sector integration and
            high-concurrency commerce — building systems people depend on.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <ExperienceCard exp={exp} idx={idx} key={exp.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
