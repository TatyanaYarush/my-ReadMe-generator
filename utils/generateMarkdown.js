// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  https://github.com/${data.username}/${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [License](#license)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License
  ${data.license}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

 ## Questions
 For any additional information or questions find me at:

 - Email: [${data.email}](mailto:tatyana.yarushin@gmail.com)
 
 - Github: [${data.username}](https://github.com/TatyanaYarush)
`
}

module.exports = generateMarkdown;



