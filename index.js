const fs = require('fs');
const inquirer = require('inquirer');

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
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
    ])

    .then(projectData => {
        console.log(projectData);
        return projectData;
    })

    .then(projectData => {
        const writeMarkdown = generatePage(projectData);
        writeFile (writeMarkdown);
    })
}

const generatePage = projectData => {
    const { title, description, installation, usage, contributing, test, license, github, email } = projectData;
    const licenseChoice = checkLicense(license);

    
}

const writeFile = (data) => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
        }
        console.log('README.md successfully created!');
    });
}

promptUser()
/*   .then(projectData => {
      return generatePage(projectData);
  })
  .then(pageREAMDE => {
      return writeFile(pageREADME);
  })
  .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
  })
  .catch(err => {
      console.log(err);
  });
  */