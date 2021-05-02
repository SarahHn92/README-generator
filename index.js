// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    // project title
    {
        type: 'input',
        name : 'title',
        message: 'What is the title of your project?'
    },
    // Description
    {
        type: 'input',
        name : 'description',
        message: 'Please briefly descibe your project.'
    },
    // Table of Contents
  
    // Installation
    {
        type: 'input',
        name : 'installation',
        message: 'How do you install dependencies for your project?'
    },
    // Usage
    {
        type: 'input',
        name : 'usage',
        message: 'What purpose does your project have?'
    },
    // License
    {
        type: 'list',
        name : 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    // Contributing
    {
        type: 'input',
        name : 'contributions',
        message: 'Who can contribute to this project?'
    },
    // Tests
    {
        type: 'input',
        name : 'tests',
        message: 'What command runs tests on the project?'
    },
    // Questions
    {
        type: 'input',
        name : 'github',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];





// TODO: Create a function to initialize app
async function init() {
    var answers = await inquirer.prompt(questions)
    console.log(answers)
    var createMD = generateMarkdown(answers)
    var writeToFile = fs.writeFile("result.md", createMD, err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
