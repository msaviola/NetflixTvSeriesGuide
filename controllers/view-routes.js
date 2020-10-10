var db = require("../models");

module.exports = function (app) {
    
    app.get('/', function(req, res) {

        db.Show.findAll({})
          .then(function(dbShow){
            console.log(dbShow);
            // var showObj = res.json(dbShow);
            var showObj = {
                shows: dbShow
            }
            
            res.render('index', showObj);
          })

        
    });

    app.get("/api/shows/mood/:mood", function(req, res) {
        db.Show.findAll({
          where: {
            mood: req.params.category
          }
        })
          .then(function(dbShow) {
            res.json(dbShow);
          });
      });

};