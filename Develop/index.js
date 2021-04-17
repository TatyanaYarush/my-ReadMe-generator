// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require('axios');
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Please provide your project's description"
},
{
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions"
},
{
    type: "input",
    name: "licence",
    message: "Please provide the project licence or your badge link"
},
{
    type: "input",
    name: "usage information",
    message: "Please provide how to use this app"
},
{
    type: "input",
    name: "contribution guidelines",
    message: "How the other people can contribute?"
},
{
    type: "input",
    name: "test instructions",
    message: "Please provede test instructions?"
},
{
    type: "input",
    name: "email",
    message: "What's your email address??"
},
{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "repo",
    message: "What is your repo link?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const file = generate(fileName, data)
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then(answers => {
      console.log(answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
