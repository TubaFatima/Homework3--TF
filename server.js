// load the things we need
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

// required module to make calls to a REST API
const axios = require('axios');
const { response } = require('express');
app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.get('/', function(req, res) {   // This list will be sent to index page
    res.render('pages/index');
});


app.listen(1997);
console.log('1997 is the front-end port');
