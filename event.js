export function addEvent(element, eventType, callback) {
  if (element && typeof eventType === 'string' && typeof callback === 'function') {
    element.addEventListener(eventType, callback);
  } else {
    console.warn('Invalid arguments passed to addEvent().'); }
}


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


