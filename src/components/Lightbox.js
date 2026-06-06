import React, { useCallback, useEffect } from 'react';

const url = (src) => `${process.env.PUBLIC_URL}/${src}`;

// Full-screen image viewer. `index` is the active image (or null when closed).
export const Lightbox = ({ images = [], index, alt = '', onClose, onIndex }) => {
  const open = index !== null && index !== undefined;
  const count = images.length;

  const go = useCallback(
    (dir) => {
      if (!open) return;
      onIndex((index + dir + count) % count);
    },
    [open, index, count, onIndex]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, go, onClose]);

  if (!open) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      {count > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      <figure className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <img src={url(images[index])} alt={alt} className="lightbox__img" />
        {count > 1 && (
          <figcaption className="lightbox__count">
            {index + 1} / {count}
          </figcaption>
        )}
      </figure>

      {count > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </div>
  );
};
