const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({ name, description, tableOf, hyperLink }) => `
# ${YourProjectTitle}
---

## Project Description
---

## Table of Contents
---


## Website project link
---
[Link here](${hyperLink})

`;

inquirer.prompt([
        {
            name: 'title',
            message: 'Name title of your Project?',
            type: 'input'
        },
        {
            description:'projDescription',
            message: 'Description of the project',
            type:'input'
        },
        {
            tableOf:'contents',
            message: 'Table of Contents',
            type:'input'
        },
        {
            hyperLink:'webSite',
            message: 'Type the website link of the project',
            type:'input'
        },


    ])

    .then((answers) => {
        const markdownPageContent = generateMarkdown(answers);

        fs.writeFile('./DS_Store/README.md', markdownPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    });