function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Developer Profile PDF</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <style>
        .jumbotron {
            background-color:${data.backgroundColor};
            text-align: center;
        }
        .card {
            background-color:${data.backgroundColor};
            text-align: center;
        }
        </style>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
        <img src=${data.profilePicture} class="" alt="profile photo">
            <h1 class="display-8">Hello!</h1>
            <h1 class="display-8" id= "profileName">My name is ${data.userName}</h1>
            <p class="lead" id = "profileCompany">Currently @ ${data.company}</p>
            <p class="col" id = "profileLocation"> ${data.location}</p>
            <p class="col" id = "profileGitHub"><a href=${data.gitHubProfile}>GitHub</a></p>
            <p class="col" id = "profileBlog"><a href=${data.userBlog}>Blog</a></p>
            <hr class="my-4">
            <p id = "profileBio">${data.userBio}</p>
        </div>
        <div class="row">
        <div class="col-sm-3"></div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Public Repositories</h5>
                      <p class="card-text" id = "repo">${data.numberOfRepos}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Followers</h5>
                      <p class="card-text" id = "followers">${data.numberFollowers}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3"></div>
              </div>
              <div class="row">
              <div class="col-sm-3"></div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">GitHub Stars</h5>
                      <p class="card-text" id = "stars">${data.starCount}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Following</h5>
                      <p class="card-text" id = "following">${data.numberFollowing}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3"></div>
              </div>
    </body>
    </html>`
}
module.exports = generateHTML
