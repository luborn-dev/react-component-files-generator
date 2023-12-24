#!/usr/bin/env node

const { execSync } = require("child_process");

// Get folder name from command-line arguments
const folderName = process.argv[2];

if (!folderName) {
  console.error("Error: Please provide a folder name as an argument.");
  process.exit(1);
}

const lowercaseFolderName = folderName.toLowerCase();

// Create the folder
execSync(`mkdir "${folderName}"`);

// Change into the created folder
process.chdir(folderName);

// Create the .jsx file
const jsxContent = `import React from 'react'
import styles from './${lowercaseFolderName}.module.css'

const ${folderName} = () => {
  return (
    <div>${folderName}</div>
  )
}

export default ${folderName}`;

execSync(`echo "${jsxContent}" > "${folderName}.jsx"`);

// Create the index.js file
const indexContent = `import ${folderName} from './${folderName}';

export default ${folderName};`;

execSync(`echo "${indexContent}" > index.js`);

// Create the .module.css file
execSync(`touch "${lowercaseFolderName}.module.css"`);

// Print a message indicating success
console.log(`Folder '${folderName}' and files created successfully.`);
