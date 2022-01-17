// packages for application to run
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions to collect data used in markdown generator

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('You must enter the name of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of the project. (Required)',
        validate: projectDescInput => {
            if (projectDescInput) {
                return true;
            } else {
                console.log('You must enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter any installation instructions for the project. (Required)',
        validate: projectInstInput => {
            if (projectInstInput) {
                return true;
            } else {
                console.log('You must enter installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage information for the project. (Required)',
        validate: projectUsInfInput => {
            if (projectUsInfInput) {
                return true;
            } else {
                console.log('You must enter usage instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any guidelines for contribution to the project. (Required)',
        validate: projectContGuideInput => {
            if (projectContGuideInput) {
                return true;
            } else {
                console.log('You must enter contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter any testing instructions for the project. (Required)',
        validate: projectTestInput => {
            if (projectTestInput) {
                return true;
            } else {
                console.log('You must enter testing instructions.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Add a license for the project.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email address.');
                return false;
            }
        }
    },
];

// function that writes the README.md file
const writeNewFile = (fileType, responses) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileType, responses, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File successfully created!'
            });
        });
    });
}

// function to run application
function promptUser() {
    inquirer.prompt(questions)
    .then(function (answers) {
        writeNewFile('README.md', generateMarkdown(answers));
    });
};

promptUser();