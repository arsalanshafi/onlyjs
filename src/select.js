

/*
 * 
 * target an element using id or className. 
 * @param {string} - id or className of the target(html element)
 * @return {object} - object pointing towards the id/className.
 * */

export function select(id_class) {
  const selector = document.querySelector(id_class);
    return selector;
}
