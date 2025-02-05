/*
 * @fileoverview Module which provides methods to create a webpage/website 
 * @author Arsalan Khan (https://github.com/i24k3)
 * @version 1.0.0
 * @date January 4, 2025
 * @license MIT
 * [Any additional notes or instructions for other developers]
 * @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
 *
 * :wqa
 * */




/*
 * creates html in the DOM.
 * @param {object} element - object with element properties.
 * @param {object} style - the css to be applied to element.
 * @return {object} htmlElement - a html element with provided properties.
 *
 *
 * element properties: 
 * 1. type = type of element e.g h1, div, code...
 * 2. text = text inside the element e.g "parasyte: The maximum" 
 * 3. id = the html id to be assigned e.g "hentaiIsArt" 
 * 4. className = the html class to be assigned e.g "main__hentaiIsArt"
 *
 * */
export function create(element, styles = '') {
  
  if (typeof element === 'object') {

  const tag = element.type.trim();
  const htmlElement = document.createElement(tag);
  const noTextElements = [
  'div', 'span', 'img', 'input', 'canvas', 'br', 'hr', 'meta', 'video', 'audio',
  "area", "base", "br", "col", "colgroup", "command", "embed",
    "link", "source", "track", "wbr",];

  const html = [
  "a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "base", 
  "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", 
  "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", 
  "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", 
  "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", 
  "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", 
  "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", 
  "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", 
  "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", 
  "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

  // check if the html tag exists
  if (html.includes(element.type.trim().toLowerCase())) {

    // check if the tag isn't a no text tag
   if (noTextElements.includes(element.type.toLowerCase())) {
    htmlElement.innerText = '';

    if (element.type === 'input') {
      htmlElement.setAttribute('type', element.inputType);
      htmlElement.placeholder = element.placeholder;
      }
    } else {

    if (element.type === 'label') {
      htmlElement.setAttribute('for', element.htmlFor);
      htmlElement.setAttribute('type', element.htmlType);
    }
    htmlElement.innerText = element.text || "Haro, Eburi Nyan!";
  }

    htmlElement.classList.add(element.className);
    htmlElement.id = element.id || '';

  } else {

    const msg = `
    The html tag/element you are trying to create dosn't exist: use a valid name.
    `;
    console.warn(msg);
  }


  if (styles !== '') {
    for (const styleProperty in styles) {
      if (styles.hasOwnProperty(styleProperty)) {

        // htmlElement.style[index] = styles[index]
        // htmlElement.style.border = "1px solid black"
        htmlElement.style[styleProperty] = styles[styleProperty];
      }
    }
  }

  // Apply responsive styles if the `responsive` property exists
  if (styles.resp) {
    applyResponsiveStyles(htmlElement, styles.resp);
  }

  // Listen to window resize event and update responsive styles dynamically
  window.addEventListener('resize', () => {
    if (styles.resp) {
      applyResponsiveStyles(htmlElement, styles.resp);
    }
  });

  return htmlElement;
} else {
  console.warn(`
  method 'create()' takes object's as argument,
  i.e 'create(elementObj, elementStyleObj)', please provide parms of suitable data type`);
  }
}

export function applyResponsiveStyles(element, resp) {
  const screenWidth = window.innerWidth;

  // Check screen size and apply corresponding responsive styles
  if (screenWidth <= 600 && resp.small && Object.keys(resp.small).length > 0) {
  element.style.cssText = ''; // reset all styles before applying
    Object.assign(element.style, resp.small);

  } else if (screenWidth <= 1024 && resp.medium && Object.keys(resp.medium).length > 0 ){
  element.style.cssText = ''; // reset all styles before applying
    Object.assign(element.style, resp.medium);

  } else if (screenWidth => 1024 && resp.large && Object.keys(resp.large).length > 0) {
    element.style.cssText = ''; // reset all styles before applying
    Object.assign(element.style, resp.large);
  }
}
