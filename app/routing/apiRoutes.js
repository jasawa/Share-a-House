
// LOAD DATA  ------------------
// It is linking the routing to a "data" source which holds an array of information on friends (ie. the housemates)

var friends = require("../data/friends");

// ROUTING  ----------------------

module.exports = function(app) {
    //GET route with url /api/friends  This will be used to display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

 

    // API POST Request:
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out the survey... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    // 
    // POST route with url /api/friends  This will be used to handle incoming survey results
    // and compatibility logic

    app.post("/api/friends", function(req, res) {
        friends.push(req.body);


        console.log(friends);
    });


};
