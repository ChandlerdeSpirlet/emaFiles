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

app.put('/add_test/(:barcode)/(:pass_status)/(:rank)/(:test_id)', async function(req, res, next) {
    ret_status = 400;
    err = '';
    try {
        var items = {
            barcode: req.params.barcode,
            pass_status: req.params.pass_status,
            rank: req.params.rank
        }
        //DO DB THINGS
        const update_query = "insert into test_records (rank, barcode, pass_status, test_date, test_id) values ($1, $2, $3, now(), $4);"
        db.none(update_query, [items.rank, items.barcode, items.pass_status, String(items.barcode) + String(items.test_id)])
            .then(row => {
                ret_status = 200;
            })
            .catch(err => {
                console.log('PUT API error: ' + err);
                ret_status = 400;
            }) 
    } catch (err) {
        console.log('ERROR: ' + err);
    }
    if (ret_status == 200){
        res.status(200).send('All good here');
    } else {
        res.status(400).send('Bad Request - ' + err);
    }
})
