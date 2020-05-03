
/*
var pgp = require('pg-promise')();

var dbConfig = process.env.DATABASE_URL;
var db = pgp(dbConfig);

module.exports = db;
*/

var pgp = require('pg-promise')();
const dbConfig = {
    host: 'ec2-52-71-85-210.compute-1.amazonaws.com',
    port: 5432, 
    database: 'd197gqtk11vgiq',
    user: 'rrjzntntbumxlv',
    password: 'c1b4440dc374d68d68baa6ee1775ae929843f430aa4297e6aa950044d054d1f9',
    ssl: true
};
var db = pgp(dbConfig);
module.exports = db;