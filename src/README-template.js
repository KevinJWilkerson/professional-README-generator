// TODO: Create a function to generate markdown for README
const generateMarkdown = projectArr => {
    
    return `
      ${licenseChoice}
  
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