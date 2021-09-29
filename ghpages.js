var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/renteefy/landing.git", // Update to point to >
    user: {
      name: "yajatvishwak", // update to use your name
      email: "yajat472001@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
