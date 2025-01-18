/*
 * @fileoverview Module which provides methods to create a webpage/website 
 * @author Arsalan Khan (https://github.com/i24k3)
 * @version 1.0.0
 * @license MIT
 * @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
 *
 * :wqa
 * */

/*
 * Configures and initializes BrowserSync for live-reloading during development.
 * This configuration automatically starts a local server and watches for changes in HTML, CSS, and JavaScript files.
 * When changes are detected, the page is automatically reloaded in the browser.
 * 
 * @requires browser-sync
 * 
 * Example usage:
 * 1. Install BrowserSync: npm install browser-sync
 * 2. Run this script to initialize the server and file watchers.
 * 
 * Configuration options:
 * - `server.baseDir`: The base directory for the local server.
 * - `files`: The file types to watch for changes. In this case, it watches HTML, CSS, and JS files.
 * - `notify`: Disables the BrowserSync notification popup.
 */
const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: './' // Your base directory
  },
  files: ['**/*.html', '**/*.css', '**/*.js'], // Watch these file types for changes
  notify: false
});

