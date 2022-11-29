const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({ YourProjectTitle, description, motivation, build, hyperLink }) => `
# ${YourProjectTitle}
---

## Project Description
---


[Link here](${hyperLink})

`;

inquirer
    .prompt([
        {
            type: 'input',
            YourProjectTitle: 'title',
            message: 'Title of your Project?'
        },
        {
            type:'input',
            description:'projDescription',
            message: 'Description of the project'
        }
    ])

    .then((answers) => {
        const htmlPageContent = generateMarkdown(answers);

        fs.writeFile('README.md', markdownPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    });