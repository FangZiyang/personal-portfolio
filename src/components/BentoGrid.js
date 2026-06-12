import React from 'react';
import { skillGroups } from '../data';
import { CategoryIcon } from '../icons';

export const BentoGrid = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Toolkit</span>
          <h2>Skills &amp; stack.</h2>
          <p>The languages, frameworks and infrastructure I reach for to build dependable systems.</p>
        </div>

        <div className="bento">
          {skillGroups.map((group, idx) => (
            <div
              className={`card bento__card ${group.span === 'wide' ? 'bento__card--wide' : ''} reveal`}
              data-reveal-delay={idx * 70}
              key={group.title}
            >
              <div className={`bento__icon bento__icon--${group.hue || 'indigo'}`}>
                <CategoryIcon name={group.icon} width={22} height={22} />
              </div>
              <h3 className="bento__title">{group.title}</h3>
              <div className="bento__pills">
                {group.skills.map((s) => (
                  <span className="pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
