# Component Files Helper


[![npm version](https://img.shields.io/npm/v/component-files-helper.svg)](https://www.npmjs.com/package/component-files-helper)

A utility for automating the generation of React component files and folder structures. Simplify your development workflow, enhance code consistency, and kickstart your projects with a clean and organized codebase.

## Installation

```bash
npm install -g component-files-helper
```

## Usage

To create a new React component, run the following command in your terminal:

```bash
component-files-helper YourComponentName
```

This will generate a folder with the specified component name, along with the necessary JSX, CSS module, and index files.

## Example

Suppose you run:

```bash
component-files-helper MyComponent
```

The above command will create a folder structure like this:

```
MyComponent/
|-- MyComponent.jsx
|-- index.js
|-- mycomponent.module.css
```

Feel free to customize the generated files to fit your project's specific needs.

## License

This project is licensed under the [ISC License](LICENSE).
