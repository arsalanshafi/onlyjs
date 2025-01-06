# onlyjs - A Minimal JavaScript UI Library.
onlyjs is a lightweight and dependency-free JavaScript library that simplifies the process of creating and styling HTML documents. With just a single HTML file and pure JavaScript, you can declaratively define elements and their styles, allowing for an easy and clean approach to DOM manipulation.

# **STILL IN ALPHA**


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

To use **onlyjs**, simply include the JavaScript file(s) in your HTML document:

> either clone the github repo to your project
```
git clone https://github.com/i24k3/onlyjs.git
```
> or Install via nodejs
```
npm install onlyjs
```


## Usage


import the functions from the openjs directory to your project (assuming index.js).

*onlyjs* is the runner method which takes all the js code and renders it onto the 
html file. the onlyjs() method expects a callback which is usually the `main` method/function or the App() function, depending on how you like to name it.
```
import { openjs } from openjs/open.js;
openjs(main); 

function main() {
    // the js/onlyjs code goes in here
}
```
