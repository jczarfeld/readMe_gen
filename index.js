// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [

{
type: "input",
name : "github",
message:"What is your Github username?"
},
{
 type: "input",
 name : "email",
 message: "What is your e-mail address?"   
}


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), ))
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(() => {
        console.log(answers);
    
    })
}

// Function call to initialize app
init();
