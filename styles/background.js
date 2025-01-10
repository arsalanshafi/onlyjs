import { create } from './../create.js';
import { render } from './../render.js';

class Background {
  static matrix(color = '#0F0') {
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
    let columns = 0;
    let drops = [];

    // Function to update canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recalculate number of columns for the matrix effect
      columns = Math.floor(canvas.width / 20); // 20px for each column
      drops = new Array(columns).fill(0); // Initialize drops for each column
    }

    // Initial canvas size setup
    resizeCanvas();

    // Event listener for window resize
    window.addEventListener('resize', resizeCanvas);

    // Matrix effect function
    function draw() {
      // Fade effect for the background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color to green and font size
      ctx.fillStyle = color;
      ctx.font = '20px monospace';

      // Draw falling characters for each column
      for (let i = 0; i < drops.length; i++) {
        const char = String.fromCharCode(Math.random() * 128); // Random characters

        // Draw character at the current column and drop position
        ctx.fillText(char, i * 20, drops[i] * 20);

        // Reset drop position after reaching the bottom of the canvas
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Update the drop position
        drops[i]++;
      }
    }

    // Set the draw interval to animate the matrix effect
    setInterval(draw, 33);
  }

static gradient(colors = ['#000', '#00f']) {
  // Create canvas element and set its style
  const canvasAttrs = {
    type: 'canvas',
    id: 'gradientCanvas',
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

  // Get the context and set canvas size
  const ctx = canvas.getContext('2d');

  // Function to update canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Initial canvas size setup
  resizeCanvas();

  // Event listener for window resize
  window.addEventListener('resize', resizeCanvas);

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  // Add color stops to the gradient
  const colorStops = 1 / (colors.length - 1);
  colors.forEach((color, index) => {
    gradient.addColorStop(colorStops * index, color);
  });

  // Fill the background with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

}

export { Background };



