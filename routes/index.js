var express = require('express');
const { func } = require('../database');
var app = express();
var db = require('../database');
module.exports = app;
app.get('/', function (req, res){
    res.render('store/home', {
        
    })
});
JSON.safeStringify = (obj, indent = 2) => {
    let cache = [];
    const retVal = JSON.stringify(
        obj,
        (key, value) =>
            typeof value === "object" && value !== null
            ? cache.includes(value)
                ? undefined // Duplicate reference found, discard key
                : cache.push(value) && value // Store value in our collection
            : value,
        indent
    );
    cache = null;
    return retVal;
  };
function emptyOrRows(rows) {
    if (!rows) {
        return [];
    } else {
        return rows;
    }
}

app.get('/test/(:barcode)', (req, res, next) => {
    console.log('req = ' + JSON.safeStringify(req))
    db.any("select rank, pass_status, to_char(test_date, 'Month DD, YYYY') as date_test from test_records where barcode = $1 order by test_date desc", [req.params.barcode])
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

app.put('/add_test/(:barcode)/(:pass_status)/(:rank)', async function(req, res, next) {
    ret_status = 400;
    try {
        var items = {
            barcode: req.params.barcode,
            pass_status: req.params.pass_status,
            rank: req.params.rank
        }
        //DO DB THINGS
        console.log('items.barcode: ' + items.barcode)
        console.log(items.pass_status)
        console.log(rank)
        ret_status = 200;
    } catch (err) {
        console.log('ERROR: ' + err);
    }
    if (ret_status == 200){
        res.status(200).send('All good here');
    } else {
        res.status(400).send('Bad Request')
    }
})
