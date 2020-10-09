// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/shows/", function(req, res) {
    db.Show.findAll({})
      .then(function(dbShow) {
        res.json(dbShow);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/shows/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbShow) {
        res.json(dbShow);
      });
  });

}
