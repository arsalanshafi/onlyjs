


export function render(whome = document.body, where, what) {
    const position = ['head', 'tail'];
    const domPos =  where.toLowerCase();
    if (!position.includes(domPos)) {
      console.warn(`Incorrect param passed to method render():
whereInDom : string =  'head' or 'tail'
By default the position set to 'document.body.<thisElement>'`);
    return;
    }
  
    switch (domPos) {
      case position[0]:
        whome.insertBefore(what, whome.firstChild);
        break;
      case position[1]:
        whome.appendChild(what);
        break;
    }
}
