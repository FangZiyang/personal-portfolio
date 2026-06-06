import React, { useState } from 'react';
import { projects } from '../data';
import { ArrowRight, Github } from '../icons';
import { Lightbox } from './Lightbox';

const ProjectCard = ({ p, idx }) => {
  const [shot, setShot] = useState(null);
  const images = p.images || [];
  const hasImages = images.length > 0;

  return (
    <div className="card project-card reveal" data-reveal-delay={idx * 80}>
      {hasImages ? (
        <button className="project-card__cover" onClick={() => setShot(0)} aria-label={`View ${p.title} screenshots`}>
          <img src={`${process.env.PUBLIC_URL}/${images[0]}`} alt={p.title} loading="lazy" />
          <span className="project-card__cover-badge">
            {images.length > 1 ? `${images.length} images` : 'View'}
          </span>
        </button>
      ) : (
        <div className="project-card__head">
          <span className="project-card__mono">{p.mono}</span>
          <span className="project-card__glyph">{p.mono}</span>
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__titles">
          <h3>{p.title}</h3>
          <span className="project-card__tagline">{p.tagline}</span>
        </div>
        <p className="project-card__desc">{p.description}</p>
        <div className="project-card__tech">
          {p.tech.map((t) => (
            <span className="pill" key={t}>
              {t}
            </span>
          ))}
        </div>
        <a className="project-card__link" href={p.link} target="_blank" rel="noopener noreferrer">
          <Github width={16} height={16} /> View on GitHub <ArrowRight width={15} height={15} />
        </a>
      </div>

      <Lightbox images={images} index={shot} alt={p.title} onClose={() => setShot(null)} onIndex={setShot} />
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected Work</span>
          <h2>Things I've built.</h2>
          <p>Side projects exploring distributed systems, infrastructure and high-concurrency design.</p>
        </div>

        <div className="projects__grid">
          {projects.map((p, idx) => (
            <ProjectCard p={p} idx={idx} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
