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
{
    type: "input",
    name : "title",
    message:"What is your project Title?"
    },
    {
     type: "input",
     name : "description",
     message: "Please describe your project"   
    }
    {
        type: "input",
        name : "instructions",
        message:"Please list specific installation instructions"
        },
        {
         type: "input",
         name : "information",
         message: "Please list specific usage information"   
        }
        {
            type: "input",
            name : "guidelines",
            message: "How could one contribute to your project?"   
           }
           {
            type: "input",
            name : "test",
            message: "Please list specific test instructions"   
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
