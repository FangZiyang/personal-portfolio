import React from 'react';
import { profile, stats } from '../data';
import { useCountUp } from '../hooks';

const StatCard = ({ stat, index }) => {
  const { ref, display } = useCountUp(stat.value, { duration: 1900 });
  return (
    <div className="card stat-card reveal" data-reveal-delay={index * 90}>
      <div className="stat-card__value" ref={ref}>
        {stat.prefix || ''}
        {display}
        {stat.suffix || ''}
      </div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__sub">{stat.sub}</div>
    </div>
  );
};

export const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__intro reveal">
            <span className="eyebrow">About</span>
            <h2>Backend engineer who cares about reliability at scale.</h2>
            <p>{profile.about}</p>
            <p className="about__intro-sub">
              Currently completing my M.Eng in Computing &amp; Software at McMaster University and
              looking for full-time software engineering roles starting{' '}
              <strong>September 2026</strong>.
            </p>
          </div>

          <div className="about__stats">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
