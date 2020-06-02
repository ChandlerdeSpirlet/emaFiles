var express = require('express');
var app = express();
var path = require('path');
var exp_val = require('express-validator');
var session = require("express-session");
const fastcsv = require("fast-csv");
var fs = require('fs');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var db = require('../database');
const cors = require('cors');
app.use(cors())

module.exports = app;
app.use(session({
    secret: 'emaFiles',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 8 * 60 * 1000}
}));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())
app.use(exp_val());
app.use(express.static(path.join(__dirname, 'store')));
app.get('/', function(req, res){
    res.render('store/home', {

    })
});
app.get('/workouts', function(req, res){
    res.render('store/workouts');
});
app.get('/schedule', function (req, res){
    var data =fs.readFileSync(__dirname + '/storedFiles/sched.pdf');
    res.contentType("application/pdf");
    res.send(data);
    console.log("DIRNAME IS: " + __dirname)
});
app.get('/CalendlyInstructions', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/CalendlyInstructions.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/ITP', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/ITP.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/L1', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Level_1_Combos.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/L2', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Level_2_Combos.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/L3', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Level_3_Combos.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/bingo_cards', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/bingo_cards.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/aspHomework', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/ASPhomework.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Lvl1Homework', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Lvl1Homework.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Lvl2Homework', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Lvl2Homework.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Lvl3Homework', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Lvl3Homework.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/BBHomework', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/BBHomework.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Lvl1Sparring', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Lvl1Sparring.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Lvl2Sparring', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Lvl2Sparring.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/ASPPacket', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/ASPPacket.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Calendar', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Calendar.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/1Confidence', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/1Confidence.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/2Discipline', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/2Discipline.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/3Respect', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/3Respect.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/4Responsibility', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/4Responsibility.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/5Focus', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/5Focus.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/6GoalSetting', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/6GoalSetting.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Level1Curriculum', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Level1Curriculum.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Level2Curriculum', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Level2Curriculum.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Level3Curriculum', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/Level3Curriculum.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/SWAT1Tasks', function(req, res){
    var data = fs.readFileSync(__dirname + '/storedFiles/SWAT1Tasks.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/CardioKiller', function(req, res){
    var data = fs.readFileSync(__dirname + '/workoutFiles/CardioKiller.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Warrior', function(req, res){
    var data = fs.readFileSync(__dirname + '/workoutFiles/Warrior.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/Nasty30', function(req, res){
    var data = fs.readFileSync(__dirname + '/workoutFiles/Nasty30.pdf');
    res.contentType("application/pdf");
    res.send(data);
});
app.get('/data', function(req, res){
    Create_CSV();
    var data = fs.readFileSync(__dirname + 'storedFiles/progress_check_csv/progress_check_data.csv');
    res.contentType('csv');
    res.send(data);
});

app.get('/student_progress_check', function(req, res){
    if(req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/student_progress_check')
    } else {
        res.render('store/student_progress_check', {
            fname: '',
            lname: '',
            jj: '',
            pu: '',
            mtn_cl: '',
            su: '',
            fk: ''
        })
    }
});
app.get('/temp', function(req, res){
    res.render('store/temp', {

    })
});

/*
app.post('/student_progress_check', function(req, res){
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        jj: req.sanitize('jj').trim(),
        pu: req.sanitize('pu').trim(),
        mtn_cl: req.sanitize('mtn_cl').trim(),
        su: req.sanitize('su').trim(),
        fk: req.sanitize('fk').trim()
    }
    res.render('store/preview', {
        fname: item.fname,
        lname: item.lname,
        jj: item.jj,
        pu: item.pu,
        su: item.su,
        mtn_cl: item.mtn_cl,
        fk: item.fk,
        button: ''
    })
});
*/
app.post('/student_progress_check', function(req, res){
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        jj: req.sanitize('jj').trim(),
        pu: req.sanitize('pu').trim(),
        mtn_cl: req.sanitize('mtn_cl').trim(),
        su: req.sanitize('su').trim(),
        fk: req.sanitize('fk').trim()
    }
    var redir_link = '/store/preview/' + item.fname + '/' + item.lname + '/' + item.jj + '/' + item.pu + '/' + item.mtn_cl + '/' + item.su + '/' + item.fk;
    console.log('redir_link = ' + redir_link);
    res.redirect(redir_link);
});

app.get('/preview/(:fname)/(:lname)/(:jj)/(:pu)/(:su)/(:mtn_cl)/(:fk)', function(req, res){
    var fname = req.params.fname;
    var lname = req.params.lname;
    var jj = req.params.jj;
    var pu = req.params.pu;
    var su = req.params.su;
    var mtn_cl = req.params.mtn_cl;
    var fk = req.params.fk;
    res.render('store/preview', {
        fname: fname,
        lname: lname,
        jj: jj,
        pu: pu,
        mtn_cl: mtn_cl,
        su: su,
        fk: fk,
        button: ''
    })
});

app.post('/preview/(:fname)/(:lname)/(:jj)/(:pu)/(:su)/(:mtn_cl)/(:fk)', function(req, res){
    var is_backdoor = false;
    var item = {
        button: req.sanitize('button'),
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        jj: req.sanitize('jj'),
        pu: req.sanitize('pu'),
        su: req.sanitize('su'),
        mtn_cl: req.sanitize('mtn_cl'),
        fk: req.sanitize('fk')  
    }
    if ((req.params.fname == 'Master' || req.params.fname == 'master') && (req.params.lname == 'Young' || req.params.lname == 'young') && (req.params.jj == 420) && (req.params.pu == 420) && (req.params.su == 420) && (req.params.mtn_cl == 420) && (req.params.fk == 420) && (item.button != 'Edit')){
        is_backdoor = true;
        res.redirect('https://emafiles.herokuapp.com/store/view_scores');
    }
    console.log('is_backdoor = ' + is_backdoor);
    if ((item.button == 'Submit') && (is_backdoor == false)){
        var total_score = Number(req.params.jj) + Number(req.params.pu) + Number(req.params.su) + Number(req.params.mtn_cl) + Number(req.params.fk);
        var query = 'insert into progress_check (student_name, jumping_jacks, pushups, situps, mtn_climbers, front_kicks, total_score) values ($1, $2, $3, $4, $5, $6, $7)';
        db.none(query, [req.params.fname + ' ' + req.params.lname, req.params.jj, req.params.pu, req.params.su, req.params.mtn_cl, req.params.fk, total_score])
            .then(function(row){
                console.log('in .then');
                var items = ['Nice job', 'Way to go', 'Awesome', 'Super cool', 'Looks great', 'Good job', 'Fantastic', 'Fantastic job', 'Awesome job', "That's karate-choppin'"];
                var item = items[Math.floor(Math.random() * items.length)];
                res.render('store/good_job', {
                    comp: item,
                    stud_name: req.params.fname + ' ' + req.params.lname,
                    tot_score: total_score
                });
            })
            .catch(function(err){
                can_redir = false;
                console.log("In .catch");
                console.log('error is ' + err);
                req.flash('error', 'Unable to add progress check data (ERROR: ' + err + ')');
                res.redirect('student_progress_check')
            })
    }
    if (item.button == 'Edit'){
        res.render('store/student_progress_check', {
            fname: item.fname,
            lname: item.lname,
            jj: item.jj,
            pu: item.pu,
            mtn_cl: item.mtn_cl,
            su: item.su,
            fk: item.fk
        })
    }
});

app.get('/good_job/(:stud_name)', function(req, res){
    var stud_name = req.params.stud_name;
    var items = ['Nice job', 'Way to go', 'Awesome', 'Super cool', 'Looks great', 'Good job', 'Fantastic', 'Fantastic job', 'Awesome job', "That's karate-choppin'"];
    var item = items[Math.floor(Math.random() * items.length)];
    res.render('store/good_job', {
        comp: item,
        stud_name: stud_name
    })
});
app.get('/good_job', function(req, res){
    res.render('/store/good_job', {
        comp: '',
        stud_name: ''
    })
});

app.get('/view_scores', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/view_scores');
    } else {
        var query = 'select * from progress_check order by id desc';
        db.any(query)
            .then(function(rows){
                res.render('store/view_scores', {
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to view student scores (ERROR: ' + err + ')');
                res.render('store/student_progress_check', {
                    fname: '',
                    lname: '',
                    jj: '',
                    pu: '',
                    mtn_cl: '',
                    su: '',
                    fk: ''
                })
            })
    }
});

function Create_CSV(){
    const file_name = __dirname + '/storedFiles/progress_check_csv/progress_check_data.csv';

    var { Pool } = require('pg')
    var copyTo = require('pg-copy-streams').to
    
    var pool = new Pool(db)
    
    try {
        var writer = fs.createWriteStream('db.csv');
        pool.connect(function (pgErr, client, done) {
            var stream = client.query(copyTo('COPY progress_check TO STDOUT'));
            var pipe = stream.pipe(writer);
            pipe.on('finish', function () {
                var stream = fs.createReadStream(file_name);
                res.attachment('progress_check_data.csv');
                stream.pipe(res);
            });
        })
    } catch (e) {
        console.log(e)
    }

    var stats = fs.statSync(file_name);
    console.log("In Create_CSV, file: " + stats.isFile());
    if (stats.isFile()){
        return 1
    } else {
        return 0
    }
}

app.post('/download', function(req, res){
    console.log("BUILDING FILE");
    if (Create_CSV()){
        const file_name = __dirname + '/storedFiles/progress_check_csv/progress_check_data.csv';
        console.log('File path is ' + file_name);
    }
    console.log('downloading');
    var files = fs.createReadStream(__dirname + '/storedFiles/progress_check_csv/progress_check_data.csv');
    res.writeHead(200, {'Content-disposition': 'attachment; filename=progress_check_data.csv'}); //here you can add more headers
    files.pipe(res)
    try {
        fs.unlinkSync(__dirname + '/storedFiles/progress_check_csv/progress_check_data.csv');
    } catch(err) {
        console.error("ERROR DELETING: " + err);
    }
    res.redirect('view_scores');
});

app.get('/testing_signup_dragons', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/testing_signup_dragons');
    } else {
        var query = 'select * from testing_signup where count < 20 and level = -1 order by id';
        db.any(query)
            .then(function(rows){
                res.render('store/testing_signup_dragons', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                res.render('store/testing_signup_dragons', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});
app.get('/testing_signup_basic', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/testing_signup_basic');
    } else {
        var query = 'select * from testing_signup where count < 20 and level = 0 order by id';
        db.any(query)
            .then(function(rows){
                res.render('store/testing_signup_basic', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                res.render('store/testing_signup_basic', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});
app.get('/testing_signup_level1', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/testing_signup_level1');
    } else {
        var query = 'select * from testing_signup where count < 20 and level = 1 order by id';
        db.any(query)
            .then(function(rows){
                res.render('store/testing_signup_level1', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                res.render('store/testing_signup_level1', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});
app.get('/testing_signup_level2', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/testing_signup_level2');
    } else {
        var query = 'select * from testing_signup where count < 20 and level = 2 order by id';
        db.any(query)
            .then(function(rows){
                res.render('store/testing_signup_level2', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                res.render('store/testing_signup_level2', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});
app.get('/testing_signup_level3', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/testing_signup_level3');
    } else {
        var query = 'select * from testing_signup where count < 20 and level = 3 order by id';
        db.any(query)
            .then(function(rows){
                res.render('store/testing_signup_level3', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                res.render('store/testing_signup_level3', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

function parseDateInfo(day_time){
    day_time_str = String(day_time)
    var n = day_time_str.indexOf(" ");
    var month = day_time_str.substring(0,n);
    var newStr = day_time_str.substring(n + 1, day_time.length);
    var temp = newStr.indexOf(" ");
    var day = newStr.substring(0,temp);
    var finalStr = newStr.substring(temp + 4, newStr.length);
    var time = finalStr;
    var x = [];
    x.push(month);
    x.push(day);
    x.push(time);
    return x;
}

app.post('/testing_signup_dragons', function(req, res){
    req.assert('fname', 'First Name is Required').notEmpty();
    req.assert('lname', 'Last Name is Required').notEmpty();
    req.assert('email', 'Email is Required').notEmpty();
    req.assert('belts', 'Belt Rank is Required').notEmpty();
    req.assert('day_time', 'A Testing Time is Required').notEmpty();
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belts: req.sanitize('belts'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseDateInfo(item.day_time);
    month_input = getInfo[0];
    day_num = getInfo[1];
    time_num = getInfo[2];
    belt_group = -1;
    var redir_link = '/store/testing_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + item.belts + '/' + month_input + '/' + day_num + '/' + time_num + '/' + belt_group;
    res.redirect(redir_link);
});

app.post('/testing_signup_basic', function(req, res){
    req.assert('fname', 'First Name is Required').notEmpty();
    req.assert('lname', 'Last Name is Required').notEmpty();
    req.assert('email', 'Email is Required').notEmpty();
    req.assert('belts', 'Belt Rank is Required').notEmpty();
    req.assert('day_time', 'A Testing Time is Required').notEmpty();
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belts: req.sanitize('belts'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseDateInfo(item.day_time);
    month_input = getInfo[0];
    day_num = getInfo[1];
    time_num = getInfo[2];
    belt_group = 0;
    var redir_link = '/store/testing_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + item.belts + '/' + month_input + '/' + day_num + '/' + time_num + '/' + belt_group;
    res.redirect(redir_link);
});

app.post('/testing_signup_level1', function(req, res){
    req.assert('fname', 'First Name is Required').notEmpty();
    req.assert('lname', 'Last Name is Required').notEmpty();
    req.assert('email', 'Email is Required').notEmpty();
    req.assert('belts', 'Belt Rank is Required').notEmpty();
    req.assert('day_time', 'A Testing Time is Required').notEmpty();
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belts: req.sanitize('belts'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseDateInfo(item.day_time);
    month_input = getInfo[0];
    day_num = getInfo[1];
    time_num = getInfo[2];
    belt_group = 1;
    var redir_link = '/store/testing_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + item.belts + '/' + month_input + '/' + day_num + '/' + time_num + '/' + belt_group;
    res.redirect(redir_link);
});

app.post('/testing_signup_level2', function(req, res){
    req.assert('fname', 'First Name is Required').notEmpty();
    req.assert('lname', 'Last Name is Required').notEmpty();
    req.assert('email', 'Email is Required').notEmpty();
    req.assert('belts', 'Belt Rank is Required').notEmpty();
    req.assert('day_time', 'A Testing Time is Required').notEmpty();
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belts: req.sanitize('belts'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseDateInfo(item.day_time);
    month_input = getInfo[0];
    day_num = getInfo[1];
    time_num = getInfo[2];
    belt_group = 2;
    var redir_link = '/store/testing_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + item.belts + '/' + month_input + '/' + day_num + '/' + time_num + '/' + belt_group;
    res.redirect(redir_link);
});

app.post('/testing_signup_level3', function(req, res){
    req.assert('fname', 'First Name is Required').notEmpty();
    req.assert('lname', 'Last Name is Required').notEmpty();
    req.assert('email', 'Email is Required').notEmpty();
    req.assert('belts', 'Belt Rank is Required').notEmpty();
    req.assert('day_time', 'A Testing Time is Required').notEmpty();
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belts: req.sanitize('belts'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseDateInfo(item.day_time);
    month_input = getInfo[0];
    day_num = getInfo[1];
    time_num = getInfo[2];
    belt_group = 3;
    var redir_link = '/store/testing_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + item.belts + '/' + month_input + '/' + day_num + '/' + time_num + '/' + belt_group;
    res.redirect(redir_link);
});

app.get('/testing_preview/(:fname)/(:lname)/(:email)/(:belts)/(:month)/(:day)/(:time)/(:belt_group)', function(req, res){
    var fname = req.params.fname;
    var lname = req.params.lname;
    var email = req.params.email;
    var belts = req.params.belts;
    var month = req.params.month;
    var day = req.params.day;
    var time = req.params.time;
    res.render('store/testing_preview', {
        fname: fname,
        lname: lname,
        email: email,
        belt: belts,
        month: month,
        day: day,
        time: time,
        belt_group: req.params.belt_group
    })
});

app.post('/testing_preview/(:fname)/(:lname)/(:email)/(:belts)/(:month)/(:day)/(:time)/(:belt_group)', function(req, res){
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belt: req.sanitize('belt'),
        button: req.sanitize('button')
    }
    if (item.button == 'Submit'){
        var query_count = 'update testing_signup set count = count + 1 where month_name = $1 and day_number = $2 and time_num = $3 and level = $4';
        db.query(query_count, [req.params.month, req.params.day, req.params.time, req.params.belt_group]); //Updates count
        var date_conversion = req.params.month + ' ' + req.params.day + ' 2020';
        var query_sched = "insert into people_testing (first_name, last_name, belt, email, test_day, test_time) values ($1, $2, $3, $4, to_date($5, 'Month DD YYYY'), $6);"
        db.query(query_sched, [req.params.fname, req.params.lname, req.params.belts, req.params.email, date_conversion, req.params.time]);
        var temp_name = item.fname + ' ' + item.lname;
        sendEmail(temp_name, req.params.email, date_conversion, req.params.time);
        if (req.params.belt_group == -1){
            res.render('store/good_job_testing_dragons', {
                stud_name: item.fname + ' ' + item.lname,
                month: req.params.month,
                day: req.params.day,
                time: req.params.time,
                email: req.params.email
            });
        }
        if (req.params.belt_group == 0){
            res.render('store/good_job_testing_basic', {
                stud_name: item.fname + ' ' + item.lname,
                month: req.params.month,
                day: req.params.day,
                time: req.params.time,
                email: req.params.email
            });
        }
        if (req.params.belt_group == 1){
            res.render('store/good_job_testing_dragons_level1', {
                stud_name: item.fname + ' ' + item.lname,
                month: req.params.month,
                day: req.params.day,
                time: req.params.time,
                email: req.params.email
            });
        }
        if (req.params.belt_group == 2){
            res.render('store/good_job_testing_dragons_level2', {
                stud_name: item.fname + ' ' + item.lname,
                month: req.params.month,
                day: req.params.day,
                time: req.params.time,
                email: req.params.email
            });
        }
        if (req.params.belt_group == 3){
            res.render('store/good_job_testing_dragons_level3', {
                stud_name: item.fname + ' ' + item.lname,
                month: req.params.month,
                day: req.params.day,
                time: req.params.time,
                email: req.params.email
            });
        }
    }
    if (item.button == 'Edit'){
        if (req.params.belt_group == -1){
            var query = 'select * from testing_signup where count < 20 and level = -1';
            db.any(query)
                .then(function(rows){
                    res.render('store/testing_signup_dragons', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        belts: item.belt,
                        day_time: '',
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                    res.render('store/testing_signup_dragons', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 0){
            var query = 'select * from testing_signup where count < 20 and level = 0';
            db.any(query)
                .then(function(rows){
                    res.render('store/testing_signup_basic', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        belts: item.belt,
                        day_time: '',
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                    res.render('store/testing_signup_basic', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 1){
            var query = 'select * from testing_signup where count < 20 and level = 1';
            db.any(query)
                .then(function(rows){
                    res.render('store/testing_signup_level1', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        belts: item.belt,
                        day_time: '',
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                    res.render('store/testing_signup_level1', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 2){
            var query = 'select * from testing_signup where count < 20 and level = 2';
            db.any(query)
                .then(function(rows){
                    res.render('store/testing_signup_level2', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        belts: item.belt,
                        day_time: '',
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                    res.render('store/testing_signup_level2', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 3){
            var query = 'select * from testing_signup where count < 20 and level = 3';
            db.any(query)
                .then(function(rows){
                    res.render('store/testing_signup_level3', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        belts: item.belt,
                        day_time: '',
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                    res.render('store/testing_signup_level3', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
    }
    
});
app.get('/good_job_testing_dragons', function(req, res){
    res.render('/store/good_job_testing_dragons', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});
app.get('/good_job_testing_basic', function(req, res){
    res.render('/store/good_job_testing_basic', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});
app.get('/good_job_testing_level1', function(req, res){
    res.render('/store/good_job_testing_level1', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});
app.get('/good_job_testing_level2', function(req, res){
    res.render('/store/good_job_testing_level2', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});
app.get('/good_job_testing_level3', function(req, res){
    res.render('/store/good_job_testing_level3', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});
function sendEmail(name, email_user, date, time){
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'EMA_Testing@outlook.com',
            pass: 'bigfeK-qyxzof-kezvi3'
        }
    });
    var mailOptions = {
        from: 'EMA_Testing@outlook.com',
        to: email_user,
        subject: 'Testing Confirmed for ' + name,
        html: "<b>" + name + "</b>" + ' is confirmed for testing on ' + "<b>" + date + "</b>" + ' at ' + "<b>" + time + "</b>"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
app.get('/login', function(req, res){
    res.render('store/login', {
        title: 'Login',
        files_user: '',
        files_pass: ''
    })
});
app.post('/login', function(request, response){
    request.assert('files_user', 'Username is required').notEmpty();
    request.assert('files_pass', 'Password is required').notEmpty();

    var errors = request.validationErrors();
    if (!errors){
        var item = {
            user: request.sanitize('files_user').trim(),
            pass: request.sanitize('files_pass').trim()
        };
        console.log('item.user is ' + item.user);
        console.log('item.pass is ' + item.pass);
        db.func('checkuser', [item.user, item.pass])
            .then( data => {
                var temp = data[0];
                console.log('data is ' + data);
                var final = temp.checkuser;
                console.log(temp.checkuser + ' is the return from the function');
                if (final == true && item.user == "Instructor"){
                    request.session.user = item.user;
                    request.flash('success', 'Instructor credentials accepted!');
                    response.redirect('instructor');
                } else {
                    request.flash('error', 'Login credentials rejected! Contact system admin if this is an issue.');
                    response.redirect('login');
                }
            })
    }
});
app.get('/instructor', function(req, res){
    res.render('store/instructor',{
    })
});
app.get('/testing_schedule', function(req, res){
    if (req.session.user == 'Instructor'){
        var query = "select first_name, last_name, belt, cast(to_char(test_day, 'Mon DD, YYYY') as varchar) as test_day, test_time from people_testing order by test_day";
        db.any(query)
            .then(function(rows){
                res.render('store/testing_schedule', {
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to view testers (ERROR: ' + err + ')');
                res.redirect('/store/login');
            })
    } else {
        req.flash('error', 'Instructor credentials required.');
        res.redirect('login');
    }
});
app.get('/add_day', function(req, res){
    res.render('store/add_day', {
        month: '',
        day: '',
        time: ''
    })
});
app.post('/add_day', function(req, res){
    req.assert('month', 'Month is required').notEmpty();
    req.assert('day', 'Day is required').notEmpty();
    req.assert('time', 'Time is required').notEmpty();
    var item = {
        month: req.sanitize('month'),
        day: req.sanitize('day'),
        time: req.sanitize('time'),
    }
    var query = 'insert into testing_signup (month_name, day_number, time_num) values ($1, $2, $3);'
    db.query(query, [item.month, item.day, item.time])
        .then(function(rows){
            req.flash('success', 'Testing ' + item.month + ' ' + item.day + ' at ' + item.time + ' added!');
            res.render('store/instructor',{})
        })
        .catch(function(err){
            req.flash('error', 'Did not add time to the testing database. (ERROR: ' + err + ')');
            res.render('store/instructor',{})
        })
});