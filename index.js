// TODO: Include packages needed for this application
const fs = require('fs')
const readMaker = require('./read/readme-template');
const inquirer = require('inquirer');
const readMe = require('./src/readme-template.js')

const readmeDataArgs = process.argv.slice(2);

const [read, github] = readmeDataArgs;

// TODO: Create an array of questions for user input
// const userQuestions = () => {

//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the title of your Project'
//         },
//         {
//             type: 'input',
//             name: 'how',
//             message: 'How did you come up with the idea for this project'
//         },
//         {
//             type: 'input',
//             name: 'motivation',
//             message: 'What motivated you to do this project'
//         },
//         {
//             type: 'input', 
//             name: 'objective',
//             message: 'What did you hope to achieve with this project'
//         },
//         {
//             type: 'input',
//             name: 'benefit',
//             message: 'How does your project benefit the world'
//         },
//         {
//             type: 'checkbox',
//             name: 'contents',
//             message: 'What would you like to include in you table of contents? (Check all that apply)',
//             choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
//         },
//         {
//             type: 'input',
//             name: 'install',
//             message: 'What steps are needed to install your project onto my computer'
//         },
//         {
//             type: 'input',
//             name: 'using',
//             message: 'How do we use your application correctly'
//         },
//         {
//             type: 'list',
//             name: 'license',
//             message: 'What license is used with your application? (Choose from the options below)',
//             choices: ['MIT', 'GNU', 'Apache', 'ISC']
//         },
//         {
//             type: 'input',
//             name: 'contribution',
//             message: 'How do I contirbute to your project'
//         },
//         {
//             type: 'input',
//             name: 'tests',
//             message: 'What tests have you created for your project'
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Can you describe how to run the tests for your applicaiton'
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: 'What is your github username'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email address'
//         },
//         {
//             type: 'input',
//             name: 'phone',
//             message: 'What is your phone number'
//         }
//     ]);
// };

// userQuestions()
//     .then(answers => console.log(answers))
// TODO: Create a function to write README file;
const readMe = (read, github) => {
    return `
        ## Title
        ${read}

        ## Description
        This assignment was for us to generate a readMe file for the class. This assignment will have all parts of a typical readme

        ## Table of Contents
        Installation
        Usage
        License
        Contributing
        Tests
        Questions

        ## Installation
        This is the part of the readme file that will have the description for the how a user can install the application on their computer

        ## Usage
        This is the section where a person will describe how to use their applicaiton

        ## License
        This is the section that lets the users know what they can and cannot do with your product. This is answered the in the form of questions that tell the user what is allowed by the creator

        ## Contributing
        This section will contain the qeustions that answers how a person can contribute to the project that we are doing. It will have specific the users can follow to make sure thier contribution works

        ## Test
        This section will contain information on the different type of tests people can use to make sure the application works

        ## Questions
        This section will be for personal questions about me as a developer ${github}
    `;
};

fs.writeFile('README.md', readMe(read, github), err => {
    if (err) throw err;

    console.log('Reamdme created. Chekcout what it looks like!')
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
