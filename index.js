// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Project-Info/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project'
    }, 
    {
        type: 'input',
        name: 'how',
        message: 'How did you come up with the idea for this project'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What motivated you to do this project'
    },
    {
        type: 'input',
        name: 'matter',
        message: 'Why does this project matter to you'
    },
    {

        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install your project onto my computer'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do we use your application correctly'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is used with your application? (Choose from the options below)',
        choices: ['MIT', 'GNU', 'Apache', 'ISC']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How do I contirbute to your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you created for your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you describe how to run the tests for your applicaiton'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'What is your phone number'
    },
]

// TODO: Create a function to write README file;
function wrtieToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
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
        .then(function(data) {
            wrtieToFile('README.md', generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
