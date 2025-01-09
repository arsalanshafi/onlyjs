


export function render(whome = document.body, where, what) {
    const position = ['after', 'inside'];
    const domPos =  where.toLowerCase();
    if (!position.includes(domPos)) {
      console.warn(`Incorrect param passed to method render():
whereInDom : string =  'after' or 'inside'
By default the position set to 'document.body.<thisElement>'`);
    return;
    }
  
    switch (domPos) {
      case position[0]:
        whome.insertAdjacentElement('afterend', what);
        break;
      case position[1]:
        whome.appendChild(what);
        break;
    }
}
