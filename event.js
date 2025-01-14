export function event(element, eventType, callback) {
  if (element && typeof eventType === 'string' && typeof callback === 'function') {
    element.addEventListener(eventType, callback);
  } else {
    console.warn('Invalid arguments passed to event().');
  }
}

