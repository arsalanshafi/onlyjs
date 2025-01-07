
export function resetStyles() {

var style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
  }
  /* Add more styles as needed */
`;
document.head.appendChild(style);
}

