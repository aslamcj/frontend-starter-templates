// Simple loading spinner animation data
export const loadingAnimation = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: 'Loading',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Spinner',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], h: 0 },
            { t: 60, s: [360], h: 0 },
          ],
        },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'el',
              s: { a: 0, k: [80, 80] },
              p: { a: 0, k: [0, 0] },
              nm: 'Circle',
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.486, 0.365, 0.918, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 8 },
              lc: 2,
              lj: 2,
              nm: 'Stroke 1',
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: { a: 0, k: 75 },
              o: {
                a: 1,
                k: [
                  { t: 0, s: [0], h: 0 },
                  { t: 60, s: [360], h: 0 },
                ],
              },
              m: 1,
              nm: 'Trim Paths 1',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Spinner',
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
  markers: [],
};
