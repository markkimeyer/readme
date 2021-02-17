// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mdFile = require('./generateMarkdown');

// TODO: Create an array of questions for user input
// 
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any special usage instructions.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ["MIT", "GPL3.0", "Apache2.0", "BSD3Clause", "None"]
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    }
]).then((data) => {
    console.log(`test ${data.title}`);
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
