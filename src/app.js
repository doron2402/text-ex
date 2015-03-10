let express = require('express');
let ejs = require('ejs').__express;
let bodyParser = require('body-parser');
let app = module.exports = express();
let models = require(__BASE + '/src/models');
let routes = require(__BASE + '/src/routes');
app.engine('.html', ejs);
app.set('views', __BASE + '/src/views');
app.set('view engine', 'html');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(routes.businesses);
app.use(routes.users);
app.use(routes.auth);
app.use(routes.errors.unknown);
app.listen(3000);