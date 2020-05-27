var express = require('express');
var app = express();
module.exports = app;
app.get('/', function (req, res){
    res.render('store/home', {
        
    })
});
app.get('/zohoverify/verifyforzoho', function(req, res){
    res.render('zohoverify/verifyforzoho');
});