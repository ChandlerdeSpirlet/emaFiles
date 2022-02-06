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
    ret_status = 400;
    try {
        console.log('req = ' + JSON.safeStringify(req));
        //DO DB THINGS
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