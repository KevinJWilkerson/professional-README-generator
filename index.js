// core modules for application to run
const fs = require('fs');
const { writeFile } = require('fs');
const inquirer = require('inquirer');

// local module for application to run
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions to collect data used in markdown generator
const promptUser = () => {
    return inquirer.prompt([
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
        }
    ])
    
    
}

// function that writes the README.md file
const writeREADME = (data) => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md has been created!");
    });
};


// function call followed by document creation
promptUser().then(answers => {
    console.log(answers);
    return answers;
})
.then(answers => {
    const markdown = generateMarkdown(answers);
    writeREADME(markdown);
});