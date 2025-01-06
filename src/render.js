
// chagne the condition to -ve and then add switch outside
export function render(whome, where, what) {
    const position = ['head', 'tail', 'top', 'bottom'];
    const domPos =  where.toLowerCase();
    if (position.includes(domPos)) {

        switch (domPos) {
            case position[0]:
                whome.appendChild(what);
                break;
            case position[1]:
                break;
            case position[2]:
                break;
            case position[3]:
                break;
            default:

        }
    } else {
console.warn(`Incorrect param passed to method render():
whereInDom : string =  'head', 'tail', 'top' or 'bottom'
By default the position set to 'document.body.<thisElement>'
`);
    }
    
  //document.body.appendChild(button);
}
