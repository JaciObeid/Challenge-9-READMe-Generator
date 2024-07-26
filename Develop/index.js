// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {   type:'input',
        message:'What would you like to call this repository?',
        name:'title',},

    {   type:'input',
        message:'Give a short description of this repository.',
        name:'description',},

    {   type:'input',
        message:'What steps are required to install this repository?',
        name:'installation',},

    {   type:'input',
        message:'What is the usage of this repository?',
        name:'usage',},
    
    {   type:'input',
        message:'Enter any contributers if any for the repository',
        name:'contributing',},

    {   type:'input',
        message:'What tests are needed for this repository?',
        name:'tests',},

    {   type:'input',
        message:'What is your GitHub Username?',
        name:'gitHubUser',},  

    {   type:'input',
        message:'What is the email address you would like people to contact you with?',
        name:'email',},

    {   type:'list',
        message:'Which license should be applied to this repository?',
        name:'license',
        choices:[
            "MIT",
            "Apache License 2.0",
            "GNU General Public License(GPL) v3",
            "Mozilla Public License 2.0",
            "BSD 3-Clause License",
            "None"
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>
    err? console.log(err) : console.log('Successfully generated a README.md'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        const answers = generateMarkdown(data);
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
