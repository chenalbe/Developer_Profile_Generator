const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js");
const fs = require('fs');
const Prince = require("prince");
const util   = require("util");


inquirer

  .prompt([
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
  },
  {
    type: "input",
    message: "Choose a color",
    name: "userColor"
    },])
  .then(function({ username, userColor }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get (queryUrl)
.then (function(data){
    const backgroundColor = userColor;
    const starCount=0;
    for (let i=0; i<data.data.starred_url.length; i++){
        startCount = i;
    }
    const newProfile = {

        profilePicture: data.data.avatar_url,
        company: data.data.company,
        userName: data.data.name,
        location: data.data.location,
        gitHubProfile: data.data.blog,
        userBlog: data.data.blog,
        userBio: data.data.bio,
        numberOfRepos: data.data.public_repos,
        numberFollowers: data.data.followers,
        numberFollowing: data.data.following,
        starCount
      };
    console.log(newProfile);
    const profileHTML = generateHTML({backgroundColor, ...newProfile});
    fs.writeFile('profile.html', profileHTML, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      Prince()
      .inputs("profile.html")
      .output("profile.pdf")
      .execute()
      .then(function () {
          console.log("OK: done")
      }, function (error) {
          console.log("ERROR: ", util.inspect(error))
      })
    })
})