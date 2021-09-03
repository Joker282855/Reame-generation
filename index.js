// TODO: Include packages needed for this application
const fs = require('fs');
const readMaker = require('./read/readme-template');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions =[{
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project'
    }, {
        type: 'input',
        name: 'how',
        message: 'How did you come up with the idea for this project'
    }, {
        type: 'input',
        name: 'motivation',
        message: 'What motivated you to do this project'
    }, {
        type: 'input', 
        name: 'interest',
        message: 'Why does this project matter to you'
    }, {
        type: 'input',
        name: 'steps',
        message: 'How does a person install this project on they own computer. Please provide a descritption'
    }, { 
        type: 'input',
        name: 'using',
        message: 'How do I as a user use this application'
    }, {
        type: 'list',
        name: 'license',
        message: 'What license is used with your application? (Choose from the options below)',
        choices: ['MIT', 'GNU', 'Apache', 'ISC']
    }, {
        type: 'input',
        name: 'contribution',
        message: 'How do I contirbute to your project'
    }, {
        type: 'input',
        name: 'tests',
        message: 'What tests have you created for your project'
    }, {
        type: 'input',
        name: 'description',
        message: 'Can you describe how to run the tests for your applicaiton'
    }, {
        type: 'input',
        name: 'github',
        message: 'What is your github username'
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    }, {
        type: 'input',
        name: 'additional',
        message: 'How do I reach you with additional if I run into problems while using this app'
    }, {
        type: 'input',
        name: 'phone',
        message: 'What is your phone number'
    },
]
// TODO: Create a function to write README file;
function writeToFile(readName, info) {

    fs.writeFile(readName, info, function(err) {
        console.log(readName)
        console.log(info)
        if (err) {
            return console.log(err)
        } else {
            console.log("Readme created")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(info) {
            writeToFile("README.md", readMaker(info));
            console.log(info)
        })
}

// Function call to initialize app
init();
