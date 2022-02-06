var express = require('express');
var app = express();
var db = require('../database');
module.exports = app;
app.get('/', function (req, res){
    res.render('store/home', {
        
    })
});

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    } else {
        return rows;
    }
}

app.get('/test', (req, res, next) => {
    db.any('select * from login')
        .then(return_val => {
            const values = emptyOrRows(return_val);
            res.json({
                values
            });
        })
        .catch(err => {
            res.json({
                error
            })
        })
})