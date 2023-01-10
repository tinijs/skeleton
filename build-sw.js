require('workbox-build').injectManifest({
  // DO NOT EDIT THESE FIELDS
  swSrc: 'www/sw.js',
  swDest: 'www/sw.js',
  globDirectory: 'www',
  // customize the precaching stratergy here
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
