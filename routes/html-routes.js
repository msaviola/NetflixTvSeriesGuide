// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {

  //   // Each of the below routes just handles the HTML page that the user gets sent to.

  //   // index route loads view.html
  

  // GET route for getting all of the todos
  app.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Show.findAll({}).then(function (dbShow) {
      // We have access to the todos as an argument inside of the callback function
      res.render('index', dbShow);
    });
  });


  //   // cms route loads cms.html
  //   app.get("/cms", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/cms.html"));
  //   });

  //   // blog route loads blog.html
  //   app.get("/blog", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/blog.html"));
  //   });

  //   // authors route loads author-manager.html
  //   app.get("/authors", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  //   });

};
console.log(__dirname);
