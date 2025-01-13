

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

