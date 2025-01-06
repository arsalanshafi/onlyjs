

import { openjs } from './src/open.js';
import { create } from './src/create.js';
import { select } from './src/select.js';
openjs(main);

function main() { 
  const headerConfig = {
    type: 'h1',
    text: "I'm feeling Mother fucking good...",
    id: 'header',
    className: 'main-header'
  };
  const headerStyles = {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    padding: '20px',
    border: '2px solid black'
  };

  const header = create(headerConfig, headerStyles);
  document.body.appendChild(header);

  const buttonAtt = {
    type: 'button',
    text: 'subscribe',
    className: 'subBtn'
  };

  const buttonStyle = {
    backgroundColor: 'lightgreen',
    padding: '5px 11px',
    border: '2px solid black',
    borderRadius: '7px',
    fontSize: '14px',
    fontFamily: 'Monospace',
    textDecoration: 'underline',
    fontStyle: 'bold'
  };
  const button = create(buttonAtt, buttonStyle);
  //header.append(button);
  document.body.appendChild(button);
  const buttonid = select(".subBtn");

  if (buttonid) { // Ensure the element exists before attaching the event listener
    buttonid.addEventListener('click', () => {
      console.log("I'm A bird");
    });
  } else {
    console.error('Button not found');
  }
}
