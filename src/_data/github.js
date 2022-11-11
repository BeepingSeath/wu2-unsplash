const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function() {
    /*const githubUser = process.env.GITHUB_USER;
    if (!githubUser) {
        throw new Error('Please set a GITHUB_USER environment variable');
    }
    let url = `https://api.github.com/users/${githubUser}`;
    */
    
    let url = `https://api.github.com/users/BeepingSeath`

    /* This returns a promise */
    return EleventyFetch(url, {
        duration: "1d", // save for 1 day
        type: "json"    // we’ll parse JSON for you
    });
};