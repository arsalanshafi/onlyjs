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

  const htmlElement = document.createElement(element.type);
  const noTextElements = ['div', 'span', 'img', 'input'];

  if (noTextElements.includes(element.type.toLowerCase())) {
    htmlElement.innerText = '';
  } else {

    if (element.type == 'label') {
      htmlElement.setAttribute('for', element.htmlFor);
    }
    if (element.type == 'input') {
      htmlElement.setAttribute('type', element.inputType);
      htmlElement.setAttribute('placeholder', element.placeholder);
    }

    htmlElement.innerText = element.text || "Haro, Eburi Nyan!";
    htmlElement.id = element.id || '';
    htmlElement.className = element.className || ``;

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
  return htmlElement;
}
}


export function creates(elementProp, elementStyle) {
  const prop = strToObj(elementProp);
  const style = strToObj(elementStyle);
  create(prop, style);
}


function strToObj(string) {
  const res = {};
  string[0].split('\n').forEach(line => {
    const [] = line.split(':').map(item => 
    item.trim());
    if (key && value) {
      res[key] = value;
    }
  });
 return res; 
}















