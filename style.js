

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


export function applyStyle(styles) {
  if (typeof styles === 'object' && styles !== null) {
    this.style.cssText = '';  // Remove all existing inline styles

    for (const styleProperty in styles) {
      if (styles.hasOwnProperty(styleProperty)) {
        this.style[styleProperty] = styles[styleProperty];
      }
    }
  } else {
    console.warn("The applyStyle method expects an object as an argument.");
  }
}

Object.defineProperty(HTMLElement.prototype, 'applyStyle', {
  value: function(styles) {
    applyStyle.call(this, styles);
  },
  writable: true,
  configurable: true
});

