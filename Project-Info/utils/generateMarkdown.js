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
  # Badge:
  [${data.license} License](https://img.shields.io/github/${data.license}/Joker282855/Reame-generation)](https://github.com/Joker282855/Reame-generation)

  # Title: ${data.title}
  
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
  ${data.installation}

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
  https://github.com/${data.github}
  
  https://www.${data.email}
  If you have any additional questions on how to reach me come visit my office at Utah Valley University. My room number is 223 on the second floor of the Liberal Arts building.
  My office hours are between 12:00-1:00 on on Monday, Tuesday, and Wednesday. My office hours are 3:00 t0 5:00 on Firday, and Satureday. You are able to walk into my office on Mondays,
  Tuesdays, and Wednesdays during office hours. Thursdays and Fridays are appointments only if you want to come talk with me during office hours. Appointments can be made on the 
  school website. If I am not in my office when you come leave a piece of paper under my door with your name on it or email me.
  You can also give me a call on my phone. My phone number is ${data.phone}    
`;
}

module.exports = generateMarkdown;
