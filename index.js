const fs = require('fs');

import inquirer from 'inquirer';

import { default as Choice } from 'inquirer/lib/objects/choice';

const generateMarkdown = ({ name, description, tableOf, hyperLink }) => '\n# ' + name + ' \n---\n## Table of Contents\n---\n    -' + tableOf + '\n    \n## Project Description\n--- ' + description + '\n\n\n\n## Website project link\n---\n[Link here](' + hyperLink + ')\n\n';

inquirer.prompt([
    {
        name: 'title',
        message: 'Name title of your Project?',
        type: 'input'
    },
    {
        desc: 'description',
        message: 'Description of the project',
        type: 'input'
    },
    {
        tableOf: 'contents',
        message: 'Table of Contents of your project',
        type: 'checkbox',
        choices: ['description', 'Installation', 'Usage', 'Credits', 'License']

    },
    {
        hyperLink: 'webSite',
        message: 'Input your website link project',
        type: 'input'
    },


])

    .then((answers) => {
        const markdownPageContent = generateMarkdown(answers);

       fs.writeFile('./DS_Store/README.md', markdownPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    });