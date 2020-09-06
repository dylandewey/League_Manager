// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
<<<<<<< HEAD
            res.render("homepage", { layout: 'everypage' }
=======

            return res.render("homepage"
                // ,  { layout: 'loggedin' }
>>>>>>> master
            );
        }
        res.render("signup");
    });


    app.get("/login", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            return res.redirect("/");
        }
        res.render("login");
    });

<<<<<<< HEAD
=======
    //takes user to creating new player
>>>>>>> master
    app.get("/createplayer", (req, res) => {
        // If the user already has an account send them to the members page
        res.render('create_new_players', { layout: 'everypage' });
    });

<<<<<<< HEAD
=======
    //takes user to creating new team
>>>>>>> master
    app.get("/createteam", (req, res) => {
        // If the user already has an account send them to the members page
        res.render('create_new_team', { layout: 'everypage' });
    });

<<<<<<< HEAD
=======
    //takes user to creating new league
>>>>>>> master
    app.get("/createleague", (req, res) => {
        // If the user already has an account send them to the members page
        res.render('create_new_league', { layout: 'everypage' });
    });


    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members", isAuthenticated, (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/members.html"));
    // });


    app.get('/coaches', isAuthenticated, function (req, res, next) {
        res.render('coaches', { layout: 'everypage' });
    });
<<<<<<< HEAD
=======
    app.get('/schedule', isAuthenticated, function (req, res, next) {
        res.render('schedule', { layout: 'everypage' });
    });
    app.get('/matchinput', isAuthenticated, function (req, res, next) {
        res.render('matchinput', { layout: 'everypage' });
    });
    app.get('/teams', isAuthenticated, function (req, res, next) {
        res.render('teams', { layout: 'everypage' });
    });
    app.get('/create_new_league', isAuthenticated, function (req, res, next) {
        res.render('create_new_league');
    });
>>>>>>> master
};
