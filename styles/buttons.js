import { render } from "./../render.js";
import { create } from "./../create.js";

class Buttons 
{
  static btn1 (textContent, pos, textColor = 'white',  backgroundColor = '#0077b5', borderColor= '#0077b5') 
  {
    const btn_attr = 
      {
      type: 'button',
      text: `${textContent}`,
      };

    let btn_style = {
      color: `${textColor}`,
      backgroundColor: `${backgroundColor}`,
      border: `2px solid ${borderColor}`,
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s, color 0.3s',
    };

    const btn = create(btn_attr, btn_style);
    render(pos, 'inside', btn);
  }


}


export { Buttons };
