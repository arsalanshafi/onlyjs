const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: './' // Your base directory
  },
  files: ['**/*.html', '**/*.css', '**/*.js'], // Watch these file types for changes
  notify: false
});

