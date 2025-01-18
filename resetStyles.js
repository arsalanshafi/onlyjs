/*
 * @fileoverview Module which provides methods to reset all the browser default styles
 * @author Arsalan Khan (https://github.com/i24k3)
 * @version 1.0.0
 * @license MIT
 * @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
 *
 * :wqa
 * */

/*
 * Resets basic styles for the page to ensure consistent layout across browsers.
 * Adds global CSS rules to the document, including:
 * 1. Zeroing out margins and paddings for all elements.
 * 2. Setting box-sizing to border-box for all elements.
 * 3. Applying a default font-family for the body element.
 * 
 * Additional global styles can be added as needed.
 */

export function resetStyles() {

var style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
  }
  /* Add more styles as needed */
`;
document.head.appendChild(style);
}

