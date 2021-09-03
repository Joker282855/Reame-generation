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

module.exports = readMe;