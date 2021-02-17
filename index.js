// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mdFile = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        choices: ["MIT", "GNU GPL3.0", "Apache2.0", "BSD3Clause", "None"]
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
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generated README!')
);
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer.prompt(questions)
    .then((data) => {

    const newFile = mdFile(data);
    // const title = `${data.tile}.md`;
    writeToFile("README", newFile)
})
}

// Function call to initialize app
init(questions);
