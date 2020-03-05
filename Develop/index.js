const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username:"
    },
    {
      type: "input",
      name: "proTitle",
      message: "What is your project's title?"
    },
    {
      type: "input",
      name: "proDescript",
      message: "Please describe your porject in three or fewer sentences"
    },
    //might want to break this up into parts to make a list of installation needs???
    {
      type: "input",
      name: "installation",
      message:
        "List specific steps, context (such as programming language) or dependencies that need to be installed manually."
    },
    {
      type: "input",
      name: "usage",
      message: "Use examples liberally, and show the expected output if you can"
    },
    {
      type: "input",
      name: "liscence",
      message: "For open source projects, say how it is licensed."
    },
    {
      type: "input",
      name: "contributing",
      message:
        "State if you are open to contributions and what your requirements are for accepting them"
    },
    {
      type: "input",
      name: "test",
      message: "If you have fun tests, this is the place to put them"
    },
    {
      type: "input",
      name: "questions",
      message:
        "If users have any questions how do you want to handel them? This is the place to direct your user's possible questions"
    }
  ])
  //may need to change to ${username}
  .then(function(result) {
    const queryUrl = `https://api.github.com/users/${result.username}`;

    axios.get(queryUrl).then(function(res) {
      const photo = res.result.avatar_url;
      const email = res.result.email;

      return photo, email;
    });
    //might have to move onto the axios cb function
  })
  .then(function(result) {
    console.log(result);
    const md = `# :boom: Welcome to ${result.username}\'s goodReamDe :boom:

${photo}

    ## ${result.proTitle}
    ${result.proDescript}

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
    ${email}`;

    fs.writeToFile("REAMDE.md", md, function(err) {
      if (err) throw err;
      console.log("Here's your REAMDE");
    });

    return md;
  });

//

// function init() {}

// init();

// .get with axios and .then () with the data
