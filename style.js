/*
* @fileoverview Module which provides methods to apply styles to elements.
* @author Arsalan Khan (https://github.com/i24k3)
* @version 1.0.0
* @license MIT
* @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
*/

/**
* Applies a set of CSS styles to an element selected by a query selector.
*
* @param {string} element - A string representing the CSS selector of the element to which the styles will be applied.
* @param {Object} styles - An object containing key-value pairs, where each key is a CSS property and each value is the corresponding style value.
*
* @throws {Warning} Logs a warning if the styles argument is not an object or if the element is not found.
*
* Example usage:
* style('#myDiv', { backgroundColor: 'red', color: 'white' });
* //"--OR--"
* style(select('someselector'), styleObj);
*/
export function style(element, styles) {
  const htmlElement = document.querySelector(element);
  if (typeof styles === 'object' && styles !== null) {
    for (const styleProperty in styles) {
      if (styles.hasOwnProperty(styleProperty)) {
        htmlElement.style[styleProperty] = styles[styleProperty];
      }
    }
  } else {
    console.warn(`
    The style method takes objects as arguements,
    'style(elementObj, styleObj);' please provide param of suitable datatype`);
  }
}

/**
* Applies a set of CSS styles to the current element (via `this`), typically used as an extension on `HTMLElement` objects.
*
* @param {Object} styles - An object containing key-value pairs, where each key is a CSS property and each value is the corresponding style value.
*
* @throws {Warning} Logs a warning if the styles argument is not an object.
*
* Example usage:
* element.setStyle({ backgroundColor: 'blue', color: 'yellow' });
* //"--OR--"
* element.setStyle(styleObj);
*/
export function setStyle(styles) {
  if (typeof styles === 'object' && styles !== null) {
    this.style.cssText = '';  // Remove all existing inline styles

    for (const styleProperty in styles) {
      if (styles.hasOwnProperty(styleProperty)) {
        this.style[styleProperty] = styles[styleProperty];
      }
    }
  } else {
    console.warn("The setStyle method expects an object as an argument.");
  }
}

Object.defineProperty(HTMLElement.prototype, 'setStyle', {
  value: function(styles) {
    setStyle.call(this, styles);
  },
  writable: true,
  configurable: true
});

