# **STILL IN ALPHA**
---

# onlyjs - A Simple, Lightweight JavaScript UI Library

`onlyjs` is a minimalistic JavaScript library for creating dynamic HTML elements, rendering them to the DOM, and adding event listeners. It provides a simple interface for creating UI components without relying on heavy frameworks or complex libraries.

## Features

- **Create HTML Elements**: Dynamically create and style HTML elements.
- **Render Elements**: Insert elements into the DOM either inside or after a target element.
- **Event Handling**: Attach event listeners to elements (for example, `click`, `submit`, etc.).
- **Lightweight**: Minimal dependency on additional libraries or frameworks.

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

### Step 2: Install Dependencies

Navigate to the cloned repository folder:

```bash
cd onlyjs
```

Then, install the required dependencies via npm:

```bash
npm install
```

### Step 3: Install BrowserSync

`browser-sync` is used for live-reloading and serving your project locally. Install it globally with npm:

```bash
npm install browser-sync --save-dev
```

### Step 4: Edit the package.json file

Add the following line `'start' : 'node browsersync.js'` in the `scripts` section.

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"node ./browsersync.js"
  } 
```
This will ensure that the dev environment will work locally.

---
## Usage

### Step 1: Import the Library

Once you have cloned or downloaded the repo, include the `onlyjs` functions into your JavaScript file. You can use them in your web project by importing the necessary methods.

```javascript
import { onlyjs } from "./only.js";
import { create } from "./create.js";
import { render } from "./render.js";
import { select } from "./select.js";
import { event } from "./event.js"; // (when you add the event function)
```

### Step 2: Set up Your JavaScript

#### Example: Create and Render Elements

Use the library to create and render HTML elements dynamically.

```javascript
onlyjs(main);

function main() {
    // Example: Create and render an <h1> element with styles
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
    render(document.body, 'inside', header); // Append header to the body
}
```

#### Example: Adding Event Listeners

Once the `event()` method is added to your library, you can attach event listeners to elements. For example:

```javascript
event('.header-class', 'click', () => {
    alert('Header clicked!');
});
```

This will add a `click` event listener to the element with the class `header-class` and show an alert when clicked.

---

## Method Details

### `onlyjs(main)`

Ensures that the provided `main` function is only executed when the DOM is fully loaded.

- **Parameters**: 
  - `main` (Function): The function to execute after the DOM is ready.
  
- **Usage**: 
  ```javascript
  onlyjs(main);
  ```

### `create(element, styles)`

Creates an HTML element with specified attributes and optional styles.

- **Parameters**: 
  - `element` (Object): An object containing the type of element, text, ID, class, and other attributes (e.g., `type`, `id`, `className`, `text`, etc.).
  - `styles` (Object): An optional object containing CSS style properties.

- **Returns**: 
  - The created HTML element.

- **Example**:
  ```javascript
  const divAttrs = { type: 'div', className: 'myDiv', text: 'Hello World' };
  const divStyles = { backgroundColor: 'lightgreen', padding: '20px' };
  const div = create(divAttrs, divStyles);
  ```

### `render(whome, where, what)`

Renders the created element (`what`) inside or after another element (`whome`).

- **Parameters**:
  - `whome` (Element): The target DOM element where the new element will be inserted.
  - `where` (String): The position relative to the target element (`'inside'` or `'after'`).
  - `what` (Element): The element to insert into the DOM.

- **Usage**:
  ```javascript
  render(document.body, 'inside', header);  // Append header inside body
  render(document.body, 'after', footer);  // Append footer after body
  ```

### `select(id_class)`

Selects a DOM element using a CSS selector (`id`, `class`, or other selector).

- **Parameters**:
  - `id_class` (String): A CSS selector string (e.g., `'#elementId'`, `'.elementClass'`).
  
- **Returns**: 
  - The DOM element matching the selector.

- **Usage**:
  ```javascript
  const myDiv = select('#myDiv');
  ```

### `event(element, eventType, callback)`

Attaches an event listener to a DOM element.

- **Parameters**:
  - `element` (String): A CSS selector (`#id`, `.class`).
  - `eventType` (String): The type of event (e.g., `'click'`, `'submit'`).
  - `callback` (Function): The function to execute when the event is triggered.
  
- **Usage**:
  ```javascript
  event('.my-button', 'click', () => alert('Button clicked!'));
  ```

---

## Deployment

Once you've finished developing your website using the `onlyjs` library and are ready to make it available to others, you can deploy your project online.

---

## Contributing

Feel free to fork this repository, open an issue, or submit a pull request if you have improvements or bug fixes. Contributions are welcome!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



