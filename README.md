# **STILL IN DEV.**
---

# onlyjs - A Simple, Lightweight JavaScript UI Library

`onlyjs` is a minimalistic JavaScript library for creating dynamic HTML elements, rendering them to the DOM, and adding event listeners. It provides a simple interface for creating UI components without relying on heavy frameworks or complex libraries.

## Features

- **Create HTML Elements**: Dynamically create and style HTML elements.
- **Render Elements**: Insert elements into the DOM either inside or after a target element.
- **Event Handling**: Attach event listeners to elements (for example, `click`, `submit`, etc.).
- **responsive support**: on the go creation of responsive websites/webpages.
- **Lightweight**: Minimal dependency, or bearely any dependency required.
- **only using js**: no need to create css files or even multiple html files, JS is enough.


---

## Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

To check if Node.js and npm are installed, run the following commands in your terminal:

```bash
node -v
npm -v
```

If they are not installed, follow the instructions on the [Node.js website](https://nodejs.org/) to install them.

### Step 1: Clone the Repository

Clone the `onlyjs` repository to your local machine:

```bash
git clone https://github.com/your-username/onlyjs.git
```

Alternatively, you can download the ZIP file and extract it.

### Step 2: Setup files

In the project directory start the npm, if not already

```bash
npm init
```
then, create `app.js` and `index.html`
> note the `index.html` should have `app.js` linked along with the `type='module'` specifier i.e
>```html
> <script type='module' src='./app.js'>
>```

### Step 3: Install BrowserSync

`browser-sync` is used for live-reloading and serving your project locally. Install it globally with npm:

```bash
npm install browser-sync --save-dev
```

`Note` : the *browser-sync* needs configuration which has already taken care of via the file `/onlyjs/browsersync.js` so you just need to add the following line (prescribed in **step 4**).

### Step 4: Edit the package.json file

Add the following line `'start' : 'node browsersync.js'` in the `scripts` section.

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"node ./browsersync.js"
  } 
```
This will ensure that the dev environment will work locally.

---
## Usage

### Step 1: Import the Library

To use the library we need to import modules (methods) they handle nearly all about anything you need to create. out of them the most important is the `only.js` (yeah figured that out, right?)

```javascript
import { onlyjs } from "./onlyjs/only.js";
```
> importing is all, i am from a `C` background so its mostly wirtten with c mindset. again importing is all, you have to use it. you will need to exactly tell what to do.

The onlyjs method ensures that the styles and what ever you are doing should only apply after the `DOM` has been created successfully.

For easy usage the whole project need one main file which is to be passed to the `onlyjs` function, and thats the verymuch working of the library.
```javascript
import { onlyjs } from "./onlyjs/only.js";
onlyjs(main);
function main()
{
  // the other method calls goes in here
}
```
### Step 2: Set up Your JavaScript

#### Example: Create and Render Elements

Using the library to create and render HTML elements dynamically. There are several ways we can create a dynamic element among of which is the following.

After we just import another method from the `onlyjs` directory/folder called `create()`, booo really hard to guess, it creates an html element. 

> `Note` : Each file may contain more then one methods along with its usage documentation, everything won't be provided in the README.md

```javascript
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js"; // imported this file

onlyjs(main);

function main() { 
}
```
Now how to use it, so the create() takes 2 objects one is the element object(the type of html element we want) while the other is the style (the styles we want this element to have.)

```javascript
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";

onlyjs(main);

function main() { 
  header(); // created header function 
}

fucntion header() {
    const headerAttrs = {
        type: 'h1',
        text: 'Welcome to my page!',
        className: 'header-class',
    };

    const headerStyle = {
        textAlign: 'center',
        color: 'blue',
        fontSize: '2rem',
    };

    const header = create(headerAttrs, headerStyle);
    render(document.body, 'inside', header); // Append header to the  
}
```
And now after saving the file you can run it using 

```
npm start
```
yeah yeah i know you cant see anything, its not workng. What did i told you i am from a c mindset. you have just created the element but its not yet rendered onto the DOM. its just in the memeory. so to render it we you `render()` method/function. i really talk about methods and fucntions interchangely so you have been warned.

```javascript
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";
import { render } from "./onlyjs/render.js"; // imported render()

onlyjs(main);

function main() { 
  header(); 
}

fucntion header() {
    const headerAttrs = {
        type: 'h1',
        text: 'Welcome to my page!',
        className: 'header-class',
    };

    const headerStyle = {
        textAlign: 'center',
        color: 'blue',
        fontSize: '2rem',
    };

    const header = create(headerAttrs, headerStyle);
    render(document.body, 'inside', header); // using render (read code for usage)
}
```

---

## Deployment

Once you've finished developing your website using the `onlyjs` library and are ready to make it available to others, you can deploy your project online. The browser-sync was only required for local devlopement, online there are no dependencies that the library require other than a nodejs server (and even that for just using import and export keywords, since JS dons't support them locally)

---

## Contributing

Feel free to fork this repository, open an issue, or submit a pull request if you have improvements or bug fixes. Contributions are welcome!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



