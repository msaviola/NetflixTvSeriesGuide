var db = require("../models");


module.exports = function (app) {
    app.get("/api/shows", function(req, res){
        db.Show.findAll({})
          .then(function(dbShow){
            res.json(dbShow);
          })
      });
    
      app.post("/api/shows", function(req, res) {
        console.log(req.body);
        db.Show.create({
          title: req.body.title,
          genre: req.body.genre,
          seasons: req.body.seasons,
          mood: req.body.mood,
          completed: req.body.completed,
          length: req.body.length
        })
          .then(function(dbShow) {
            res.json(dbShow);
          });
      });
    
      app.get("/api/shows/mood/:mood", function(req, res) {
        db.Show.findAll({
          where: {
            mood: req.params.mood 
          }
        })
          .then(function(dbShow) {
            res.json(dbShow);
          });
      });
        
    
      app.get("/api/shows/length/:length", function(req, res) {
        db.Show.findAll({
          where: {
            length: req.params.length //0 or 1
          }
        })
          .then(function(dbShow) {
            res.json(dbShow);
          });
      });

      app.get("/api/view-reviews/:id", function(req, res) {
        db.Review.findAll({
          where: {
            ShowId: req.params.id
          }
        })
          .then(function(dbShow) {
            res.json(dbShow);
          });
      });

      app.post("/api/new-review/:id", function(req, res) {
        console.log(req.body);

        db.Review.create({
          user: req.body.user,
          review: req.body.review,
          ShowId: req.params.id
        }
        )
          .then(function(dbShow) {
            res.json(dbShow);
          });
      });
};