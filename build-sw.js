require('workbox-build').injectManifest({
  swSrc: './www/sw.js',
  swDest: './www/sw.js',
  globDirectory: './www',
  globPatterns: [
    '**/*.html',
    '**/*.css',
    '**/*.js',
    '**/*.ico',
    '**/*.jpg',
    '**/*.png',
    '**/*.webp',
    '**/*.svg',
  ],
});
