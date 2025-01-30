/*
 * @fileoverview Module provides render method to add HTMLElements to the dom along with styles
 * @author Arsalan Khan (https://github.com/i24k3)
 * @version 1.0.0
 * @license MIT
 * @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
 *
 * :wqa
 * */

/*
 * Renders (inserts) an HTML element into the DOM at a specified position relative to another element.
 * 
 * @param {HTMLElement} whome - The reference element to insert the new element relative to (defaults to document.body).
 * @param {string} where - The position to insert the element in relation to the 'whome' element, either 'after' or 'inside'.
 * @param {HTMLElement} what - The HTML element to be inserted.
 * 
 * @returns {void} - No return value.
 * 
 * The method inserts the 'what' element in one of the following ways:
 * 1. 'after' - Inserts 'what' after the 'whome' element.
 * 2. 'inside' - Appends 'what' as a child of the 'whome' element.
 * 
 * If an invalid position ('where') is passed, a warning is logged in the console.
 * 
 * Example usage:
 * 1. render(document.body, 'inside', newElement) - Appends 'newElement' to the body.
 * 2. render(this, 'inside', newElement) - Appends 'newElement' to the body.
 * 3. render(myDiv, 'after', newElement) - Inserts 'newElement' after 'myDiv'.
 */


export function render(whome = document.body, where, what) {
    const position = ['after', 'inside'];
    const domPos =  where.toLowerCase();
    if (!position.includes(domPos)) {
      console.warn(`Incorrect param passed to method render():
whereInDom : string =  'after' or 'inside'
By default the position set to 'document.body.<thisElement>'`);
    return;
    }
   const element = whome instanceof NodeList ? whome[0] : whome;   
  
    switch (domPos) {
      case position[0]:
        //whome[0].insertAdjacentElement('afterend', what);
        element.insertAdjacentElement('afterend', what);
        break;
      case position[1]:
        //whome.appendChild(what);
        element.appendChild(what);
        break;
    }
}


export function clear()
{
  const fadeStyle = {
  transition: 'opacity 2s ease-out',
  opacity: '0',
  };

  document.body.setStyle(fadeStyle);
  setTimeout(() => {
    document.body.innerHTML = '';
  },2000);
}
