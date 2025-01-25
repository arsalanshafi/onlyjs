/*
 * @fileoverview Module which provides methods to create a webpage/website 
 * @author Arsalan Khan (https://github.com/i24k3)
 * @version 1.0.0
 * @date January 4, 2025
 * @license MIT
 * [Any additional notes or instructions for other developers]
 * @copyright (c) 2025 Arsalan Khan. All Rights Reserved.
 *
 * :wqa
 * */

import { main } from "./app.js";

/*
 * Executes a function once the DOM content has fully loaded, ensuring the DOM is ready for manipulation.
 * If the DOM is already loaded, it immediately executes the provided function.
 * 
 * @param {Function} main - The function to execute once the DOM is ready.
 * 
 * This method ensures that the provided function is executed either after the DOM content has fully loaded
 * or immediately if the document is already in a ready state.
 * 
 * Example usage:
 * 1. onlyjs(() => { // code goes here});
 * 2. onlyjs(mainCallback);
 *
 */
export function onlyjs(main) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }

}

(function() {
    // Look for the user-defined 'main' function
    if (typeof main === 'function') {
        // If it's defined, automatically call onlyjs(main)
        onlyjs(main);
    } else {
        console.error('No "main" function found. Please define a main function.');
    }
})();
