// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //Node standard library package for reading and writing files
// const axios = require('axios');

const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide your project's description",
  },

  {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions to run this app",
  },
  {
    type: "list",
    name: "license",
    message: "Which open source license would you like to use?",
    choices: [
      "MIT",
      "Mozilla Public 2.0",
      "GVL-GPL 3.0",
      "APACHE 2.0",
      "BSD 3",
      "GNU AGPLv3.0",
      "GNU GPLv2.0",
      "GNU GPLv3.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide how to use this app",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "test",
    message:
      "Please provede test instructions, what command are need ti test this app?",
  },
  {
    type: "input",
    message: "Contact info for further questions",
    name: "Questions",
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",

    // {
    //     type: "input",
    //     name: "repo",
    //     message: "What is your repo link?"
    //
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("New README file created with success!");
    }
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("./output/README.md", generateMarkdown(data));
    console.log(data);
  });
}

init();

// function init() {
//   inquirer.prompt(questions).then((responses) => {
//     // console.log(responses);
//     writeToFile("./output/README.md", generateMarkdown({ ...responses }));
//   });
// }

// init();

// const file = generate(fileName, data)
// writeFile(fileName, data, err => {
//     if (err) {
//       throw err;
//     }
//   });
// }

// TODO: Create a function to initialize app
// function init() {
//     inquirer
//   .prompt(questions)
//   .then(answers => {
//       console.log(answers);

//   })
//   .catch(error =>{
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
// }

// function init() {
//     prompt(questions).then(answers => {

//         const response = generateMarkdown(answers);
//         console.log(answers);

// writeToFile("README.md", response);
// console.log("New README file created with success!");

//     })

// }

// Function call to initialize app

// console.log("New README file created with success!");
