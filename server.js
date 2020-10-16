const express = require('express');
// const expressHandlebars = require('express-handlebars');
const handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const exphbs = require('express-handlebars');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

app.use('/public', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  handlebars: allowInsecurePrototypeAccess(handlebars)
 }));
app.set('view engine', 'handlebars');


// Routes
// =============================================================
<<<<<<< HEAD
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
=======

>>>>>>> 43ff53341ea5e62aeed229c4612824053cf668f9
require('./controllers/view-routes')(app);
require('./controllers/api-routes')(app);

db.sequelize.sync({force:false}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

// app.listen(PORT, function() {
//     console.log('listening on port ' + PORT);
// });