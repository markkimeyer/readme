



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'none') {
        return `![License:](https://img.shields.io/badge/License-${license}-yellow.svg)`
    }
    return '';
    // switch (license) {
    //     case 'MIT':
    //         response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    //         break;
    //     case 'GNU GPL3.0':
    //         response = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    //         break;
    //     case 'Apache2.0':
    //         response = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;    
    //         break;
    //     case 'BSD3Clause0':
    //         response = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
    //         break;
    //     default:
    //             response = ''
    //         }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


 ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#tests)
  - [License](#license)
  - [Contact](#contafct)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Contact
  Send me an [email](${data.email})
  or view my [GitHub profile](https://github.com/${data.github})

  [Back to Table of Contents](#table-of-contents)

`;
}

module.exports = generateMarkdown;