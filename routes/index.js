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

app.get('/test/(:barcode)', (req, res, next) => {
    db.any('select * from test_records where barcode = $1 order by test_date', [req.params.barcode])
        .then(return_val => {
            const values = emptyOrRows(return_val);
            res.json({
                values
            });
        })
        .catch(err => {
            res.json({
                err
            })
        })
})

app.post('/add_test', async function(req, res, next) {
    try {
        console.log('req.body = ' + req.body);
        res.send(200);
    } catch (err) {
        console.log('ERROR: ' + err);
        res.send(400);
    }
})