var db = require("../models");
var path = require("path");


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

    app.get("/post", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/post.html"));
    });

    app.get("/new-review", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/new-review.html"));
    });

    app.get("/view-reviews", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/view-reviews.html"));
    });
  

};