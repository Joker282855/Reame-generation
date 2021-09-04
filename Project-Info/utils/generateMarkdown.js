// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  # Description
  ${data.how}
  ${data.motivation}
  ${data.matter}
  
  # Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  # Installation
  Read the instructions below to know how to install the application on your computer:
  ${data.installatioin}

  # Usage
  Here are instructions on how ot use the application: 
  ${data.usage}

  # License
  The license this application use is ${data.license}

  # Contributing 
  To contirbute to the project follow these instructions:
  ${data.contribution}

  # Tests
  The type of tests to run on this application are listed below along with a description on how to run them.
  ${data.tests}
  ${data.description}

  # Questions
  
  
`;
}

module.exports = generateMarkdown;
