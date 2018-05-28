
// DEPENDENCIES  -------------------
// use npm path so when we use path.join the __dirname will join the absolute path to our path string 
var path = require("path");

// ROUTING  -------------------------

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found, then below is a default, catch-all that leads to home.html which displays the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

