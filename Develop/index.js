// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'Whats your project titled?'
    },
    {
        type: "input",
        name: 'description1',
        message: 'Briefly describe your project.'
    },
    {
        type: "input",
        name: 'description2',
        message: 'Why did you make this project?'
    },
    {
        type: "input",
        name: 'description3',
        message: 'What problem does this project solve?'
    },
    {
        type: "input",
        name: 'description4',
        message: 'What did you learn in this project?'
    },
    {
        type: "input",
        name: 'installation',
        message: 'What are the steps to install this project and start the development environment?'
    },
    {
        type: "input",
        name: 'usage',
        message: 'How is it used? Give an example.'
    },
    {
        type: "input",
        name: 'screenshot',
        message: 'Add A ScreenShot filename and path.'
    },
    {
        type: "list",
        name: 'license',
        message:'Which license would you like to use?',
        choices: ["CCO", "IBM","MIT","Apache 2.0","Boost","Mozilla"]
    },
    {
        type: "input",
        name: 'contributions1',
        message:'Who contributed to this project? Include GitHub links'
    },
    {
        type: "input",
        name: 'thirdparty',
        message:'List any third party assests you used and primary links.'
    },
    {
        type: "input",
        name: 'tutorials',
        message:'List any tutorials you used.'
    },
    {
        type: "input",
        name: 'contributions2',
        message:'How can others contribute to this project?'
    },
    {
        type: "input",
        name: 'test',
        message:'What are some ways to test the limits of this project?'
    },
    {
        type: "input",
        name: 'questions',
        message:'What are some questions others may have about this project?'
    },
    {
        type: "input",
        name: 'features',
        message: 'What are some features of this project?'
    }

];

inquirer
  .prompt(questions).then((response)=>{
    let licenseBadgeImage;
    let licenseLink;

    if (response.license == "CCO"){
        licenseBadgeImage= "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
        licenseLink="https://creativecommons.org/publicdomain/zero/1.0/"
    } else if (response.license == "IBM"){
        licenseBadgeImage="[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
        licenseLink="https://opensource.org/licenses/IPL-1.0"
    } else if (response.license == "MIT") {
        licenseBadgeImage="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        licenseLink="https://opensource.org/licenses/MIT"
    } else if ( response.license == "Apache 2.0") {
        licenseBadgeImage="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        licenseLink="https://opensource.org/licenses/Apache-2.0"
    } else if ( response.license == "Boost"){
        licenseBadgeImage="[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        licenseLink="https://www.boost.org/LICENSE_1_0.txt"
    } else if ( response.license == "Mozilla"){
        licenseBadgeImage="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        licenseLink="https://opensource.org/licenses/MPL-2.0"
    } else if ( response.license == "") {
        licenseBadgeImage=""
        licenseLink=""
    }
    const endResult =
   `# ${response.title}
${licenseBadgeImage}

## Description
    
${response.description1}
- Why; ${response.description2} 
- Problem; ${response.description3}
- Knowledge Gained; ${response.description4}
    
## Table of Contents 
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
    
![${response.title}](${response.screenshot})
    
    
## Credits
    
${response.contributions1}
    
Third parties; ${response.thirdparty}
    
Tutorials; ${response.tutorials}
    
## License
    
${response.license}

${licenseLink}
    
## Features
    
${response.features}
    
## How to Contribute
    
${response.contributions2}
    
The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
## Tests
    
${response.test}.`;

    fs.writeFile("ReadmeHW.md", endResult,(err) =>
err ? console.log(err) : console.log('Success!'))
  });

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

