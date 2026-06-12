import React from 'react';
import { tickerItems } from '../data';

// Infinite marquee of the tech stack. The track holds two copies of the
// list and animates translateX(-50%) for a seamless loop.
export const Ticker = () => {
  const row = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {row.map((item, i) => (
          <span className="ticker__item" key={`${item}-${i}`}>
            {item}
            <span className="ticker__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
