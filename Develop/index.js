const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
.prompt({
  message: "Enter your GitHub username:",
  name: "username"
})
.then(function({ username }) {
  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

  axios.get(queryUrl).then(function(res) {
    const photo = res.reponse.

    // const repoNamesStr = repoNames.join("\n");

    // fs.writeFile("repos.txt", repoNamesStr, function(err) {
    //   if (err) {
    //     throw err;
    //   }

    //   console.log(`Saved ${repoNames.length} repos`);
    // });
  });
});


const questions = [
inquire.prompt([
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
    {
        type: "input",
        name: "proDescript",
        message: "Please describe your porject in three or fewer sentences"
    },
    //might want to break this up into parts to make a list of installation needs???
    {
        type: "input",
        name: "installation",
        message: "List specific steps, context (such as programming language) or dependencies that need to be installed manually."
    },

])
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
