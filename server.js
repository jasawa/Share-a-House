
// DEPENDENCIES   --------  using npm packages: express, body-parser, path

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// EXPRESS CONFIGURATION  -------- will set the basics for express server

// communicates to nodeJS that "express" is being used to create server
var app = express();

// Sets an initial port. (Check that 8080 matches the console.log when "Listener" below is run)
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing (using bodyParser middleware to interpret url and json)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER  -----------------------------
// The below points our server to the "routing" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// LISTENER  --------------------------  for this application it should say App listening on PORT: 8080
// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
