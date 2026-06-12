import React from 'react';

// Luxury hover micro-interaction: each character rolls upward and is
// replaced by a duplicate sliding in from below, staggered left to right.
// Activates when a `.roll-trigger` ancestor is hovered or focused.
export const RollingText = ({ text }) => (
  <span className="roll">
    <span className="visually-hidden">{text}</span>
    <span className="roll__row" aria-hidden="true">
      {text.split('').map((c, i) => (
        <span className="roll__char" style={{ '--rd': `${i * 22}ms` }} key={`${c}-${i}`}>
          <span className="roll__a">{c === ' ' ? ' ' : c}</span>
          <span className="roll__b">{c === ' ' ? ' ' : c}</span>
        </span>
      ))}
    </span>
  </span>
);
