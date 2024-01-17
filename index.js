const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: "For logo TEXT, enter up to 3 characters:",
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'For logo TEXT COLOR, enter a keyword OR a hexadecimal number:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'For SHAPE, choose one from the following list:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'For SHAPE COLOR, enter a keyword OR a hexadecimal number:',
    },
]

inquirer.prompt(questions)
    .then((answers) => {
        const {text, textColor, shape, shapeColor} = answers;
        var shapeLog = new Circle(text, textColor, shapeColor) 
        var svgLog = shapeLog.render()

        fs.writeFile(path.join(__dirname, 'logo.svg'), svgLog, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg...')
        );
    })
