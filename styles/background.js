import { create } from './../create.js';
import { render } from './../render.js';

class Background {
  static matrix() {
    // Create canvas element
    const canvasAttrs = {
      type: 'canvas',
      id: 'matrixCanvas',
      className: 'background'
    };

    const canvasStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1' // To place the canvas in the background
    };

    const canvas = create(canvasAttrs, canvasStyle);
    render(document.body, 'inside', canvas);

    // Matrix effect settings
    const ctx = canvas.getContext('2d');
    const columns = canvas.width / 20; // Number of columns for the matrix effect
    const drops = new Array(columns).fill(0); // Initial drop positions

    // Set canvas height and width dynamically
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Matrix effect function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade effect for the background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green color for text
      ctx.font = '20px monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = String.fromCharCode(Math.random() * 128); // Random characters

        // Draw character
        ctx.fillText(char, i * 20, drops[i] * 20);

        // Reset drop position
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    // Set the draw interval to animate the matrix effect
    setInterval(draw, 33);
  }
}

export { Background };



