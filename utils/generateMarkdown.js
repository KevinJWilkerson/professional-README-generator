// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'None') {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None') {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
  return `
    ${license}

    # ${title}

    ## Description
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution Guidelines](#contributing)
    - [Licensing](#license)
    - [Testing Guidelines](#test)
    - [Questions](#questions)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contribution Guidelines
    ${contributing}

    ## Testing Guidelines
    ${test}

    ## License
    ${license}

    ## Questions
    If you have questions not answered in this README, contact the author with the information below:
    - [GitHub])https://github.com/${github}
    - Email: ${email}
`
}

module.exports = generateMarkdown;
