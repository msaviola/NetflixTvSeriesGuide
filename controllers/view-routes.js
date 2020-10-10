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


};