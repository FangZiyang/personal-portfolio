Company / school logos go here.

The site automatically uses these files. If a file is missing or fails to
load, it gracefully falls back to the lettered monogram, so nothing breaks.

Drop your logo images in THIS folder (public/icon/) with these exact names:

  rbc.png        - Royal Bank of Canada
  toronto.png    - City of Toronto
  meituan.png    - Meituan
  mcmaster.png   - McMaster University
  zhejiang.png   - Zhejiang University
  fuzhou.png     - Fuzhou University

Notes:
- PNG with a transparent background looks best (SVG also works — if you use
  SVG, rename to e.g. rbc.svg and tell me, or update the filename in
  src/data.js).
- Logos are shown inside a white rounded tile and auto-scaled to fit, so any
  reasonable square-ish or wide logo will look clean.
- Files placed in the project-root /icon folder are NOT served by the dev
  server or build — they must live here, under public/.
