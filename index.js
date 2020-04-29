const fs = require('fs')
const axios = require('axios')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'proTitle',
            message: "What is your project's title?\n",
        },
        {
            type: 'input',
            name: 'proDescript',
            message:
                'Please describe your porject in three or fewer sentences.\n',
        },
        {
            type: 'input',
            name: 'installation',
            message:
                'List specific steps, context (such as programming language) \n or dependencies that need to be installed manually.\n',
        },
        {
            type: 'input',
            name: 'usage',
            message:
                'Use examples liberally, and show the expected output if you can. \n',
        },
        {
            type: 'input',
            name: 'liscence',
            message: 'For open source projects, say how it is licensed.\n',
        },
        {
            type: 'input',
            name: 'contributing',
            message:
                'State if you are open to contributions and \n what your requirements are for accepting them.\n',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What tests were used when developing this app?\n',
        },
        {
            type: 'input',
            name: 'questions',
            message:
                "If users have any questions how do you want to handel them?\n This is the place to direct your user's possible questions.\n",
        },
    ])
    .then(function (result) {
        const queryUrl = `https://api.github.com/users/${result.username}`
        //axios always needs to be .data
        axios.get(queryUrl).then(function (res) {
            const photo = res.data.avatar_url
            const email = res.data.email
            console.log(email)
            const md = `# :boom: Welcome to ${result.username}\'s goodREAMDE :boom:

![photo](${photo})

## ${result.proTitle}![WordPress Theme Active Installs](https://img.shields.io/wordpress/theme/installs/twentysixteen)
${result.proDescript}

## Table of contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Liscence](#Liscence)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)
- [Contact](#Contact)

## Installation
${result.installation}

## Usage
${result.usage}

## Liscence
${result.liscence}

## Contributing
${result.contributing}

## Test
${result.test}

## Questions
${result.questions}

## Contact
<${email}>(mailto:${email})`

            fs.writeFile('REAMDE.md', md, function (err) {
                if (err) throw err
                console.log("Here's your REAMDE")
            })
        })
    })
