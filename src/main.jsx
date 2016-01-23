import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'components/hello_world';

/**
 * In this template main.jsx is the main entry point for the application.
 * All it does is render a <HelloWorld /> component into a DOM element
 * named <main></main>, which you can find in index.html
 */

ReactDOM.render(<HelloWorld />, document.querySelector('main'));

