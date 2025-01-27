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
 * selects an HTML element from the DOM using its ID or class name.
 * @param {string} id_class - the id or class of the element to be selected.
 * @return {HTMLElement|null} selector - the selected HTML element, or null if no element is found.
 *
 * Example usage:
 * 1. select("#myElement") - Selects element with ID 'myElement'
 * 2. select(".myClass") - Selects the first element with class 'myClass'
 * 3. select('elementName') - Selectsthe element using its 'name'.
 * 
 */
export function select(id_class_tag) {
  const selector = document.querySelectorAll(id_class_tag);
    return selector;
}
