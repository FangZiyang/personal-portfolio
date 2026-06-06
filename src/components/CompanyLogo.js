import React, { useState } from 'react';

// Renders a company/school logo from public/icon/<logo>.
// Falls back to the graphite monogram if the file is missing or fails to load.
export const CompanyLogo = ({ logo, mono, alt, sizeClass = '' }) => {
  const [failed, setFailed] = useState(!logo);

  if (failed) {
    return <span className={`monogram ${sizeClass}`}>{mono}</span>;
  }

  return (
    <span className={`logo-badge ${sizeClass}`}>
      <img
        src={`${process.env.PUBLIC_URL}/icon/${logo}`}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </span>
  );
};
