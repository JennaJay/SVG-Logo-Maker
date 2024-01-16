const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: "For TEXT, enter up to 3 characters:",
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'For TEXT COLOR, enter a color keyword OR a hexadecimal number:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'For SHAPE, choose one from the following list:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'For SHAPE COLOR, enter a color keyword OR a hexadecimal number:',
    },
]