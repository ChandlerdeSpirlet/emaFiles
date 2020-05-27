var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var expressValidator = require('express-validator');
app.use(expressValidator());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var flash = require('express-flash');
var session = require('express-session');
app.use(session({
    secret: 'emaFiles',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 8 * 60 * 1000}
}));
app.use(flash());
var index = require('./routes/index');
var store = require('./routes/store');
var zohoverify = require('./routes/zohoverify');
app.use('/', index);
app.use('/store', store);
app.use('/zohoverify', zohoverify);
var port = process.env.PORT;
//var port = 5000
app.listen(port, function(){

});