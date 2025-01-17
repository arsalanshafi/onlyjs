/*
* @fileoverview Module which provides methods to add events to elements.
* @author Arsalan Khan (https://github.com/i24k3)
* @version 1.0.0
* @license MIT
* @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
*/

/**
* Adds an event listener to a specified element.
*
* @param {HTMLElement} element - The DOM element to which the event listener will be added.
* @param {string} eventType - The type of event to listen for (e.g., 'click', 'mouseover').
* @param {Function} callback - The function to execute when the event is triggered. (can use arro function)
*
* @throws {Warning} Logs a warning if any of the arguments are invalid.
*
* Example usage:
* addEvent(document.getElementById('myButton'), 'click', function() {
* console.log('Button clicked!');
* });
* //"--OR--"
* addEvent(myBtnObj,'click', btnClickCallback);
*/
export function addEvent(element, eventType, callback) {
  if (element && typeof eventType === 'string' && typeof callback === 'function') {
    element.addEventListener(eventType, callback);
  } else {
    console.warn('Invalid arguments passed to addEvent().'); }
}


/**
* Adds an event listener to the current element (via `this`), typically used as an extension on `HTMLElement` objects.
*
* @param {string} eventType - The type of event to listen for (e.g., 'click', 'mouseover').
* @param {Function} callback - The function to execute when the event is triggered.
*
* @throws {Warning} Logs a warning if any of the arguments are invalid.
*
* Example usage:
* element.setEvent('click', function() {
* console.log('Element clicked!');
* });
* //"--OR--"
* element.setEvent('click', callbackMethod);
*
*/
export function setEvent(eventType, callback) {
  if (this && typeof eventType === 'string' && typeof callback === 'function') {
    this.addEventListener(eventType, callback);
  } else {
    console.warn('Invalid arguments passed to setEvent().');
  }
}

Object.defineProperty(HTMLElement.prototype, 'setEvent', {
  value: function(eventType, callback) {
    setEvent.call(this, eventType, callback);
  },
  writable: true,
  configurable: true
});


