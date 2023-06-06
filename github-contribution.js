const axios = require('axios');

const username = chaaitanyajerripothula'; // Replace with your GitHub username

axios
  .get(`https://api.github.com/users/${username}/repos?per_page=100`)
  .then((response) => {
    let totalContributions = 0;

    response.data.forEach((repo) => {
      totalContributions += repo.stargazers_count;
      totalContributions += repo.watchers_count;
      totalContributions += repo.forks_count;
      totalContributions += repo.open_issues_count;
    });

    console.log(`Total Contributions: ${totalContributions}`);
  })
  .catch((error) => {
    console.error(error);
  });
