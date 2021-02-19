



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'none') {
        return `![License:](https://img.shields.io/badge/License-${license}-yellow.svg)`
    }
    return '';
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
  - [Contribution](#contribution)
  - [Test](#tests)
  - [License](#license)
  - [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
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