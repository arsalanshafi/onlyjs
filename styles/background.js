import { create } from "./../create.js";
import { render } from "./../render.js";

class background {

    function matrix (color = '#00ff22') {
        const canvas = create('canvas');
        render(this, 'after', canvas);
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const columns = canvas.width / 20; // number of columns for the text
        const drops = []; // array for storing drop positions

        // Initialize drops array
        for (let i = 0; i < columns; i++) {
            drops[i] = 0;
        }
        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // semi-transparent black to create fade effect
            ctx.fillRect(0, 0, canvas.width, canvas.height); // clear canvas with fade

            ctx.fillStyle = colorHex;
            ctx.font = '20px monospace';

            // Loop through drops and draw characters
            for (let i = 0; i < drops.length; i++) {
                const char = String.fromCharCode(Math.random() * 128); // Random ASCII characters
                ctx.fillText(char, i * 20, drops[i] * 20);

                // Reset drop if it goes off screen
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        // Call drawMatrix every 50ms to create the animation effect
        setInterval(drawMatrix, 50);

        // Adjust canvas size on window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drops.length = 0; // Reset drops array
            for (let i = 0; i < canvas.width / 20; i++) {
                drops[i] = 0;
            }
        });
    }


}
