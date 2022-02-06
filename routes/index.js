var express = require('express');
var app = express();
var db = require('../database');
module.exports = app;
app.get('/', function (req, res){
    res.render('store/home', {
        
    })
});

app.get('/test', (req, res, next) => {
    res.json({
        message: 'alive'
    });
})