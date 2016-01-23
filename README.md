# A (Super) Simple Flux Starter

Flux is a complex architecture designed to solve hard problems, but when learning it it can be hard to grasp everything from the start. 

This reposotory holds an annotated starter project for a Flux application that tries to use as less tooling as possible, making it possible to read, learn and understand just enough flux to start using it.


## Quick Start

		git clone project
		cd project

		npm install

		webpack -d

		open index.html

## Project File Structure

		.
		├── index.html
		├── package.json
		├── src
		│   ├── components
		│   │   └── hello_world.jsx
		│   ├── flux
		│   │   ├── actions
		│   │   │   └── user.js
		│   │   ├── dispatcher.js
		│   │   ├── store.js
		│   │   ├── stores
		│   │   │   └── user.js
		│   │   └── symbols.js
		│   └── main.jsx
		└── webpack.config.js



Main entry point for the project is main.jsx, which is also specified in webpack.config.js. The result of running webpack.config.js is a file named bundle.js, which is loaded from index.html.

The demo has a single flux store named UserStore and a single actions file named UserActions. Please refer to comments in source files for more information about the role of each file.

Use src/components as a base point to write new React components

Use src/flux as a base for flux files.

