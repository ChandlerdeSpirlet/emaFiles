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

app.get('/student_progress_check_month2', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/student_progress_check')
    } else {
        var query = 'select * from get_names()';
        db.query(query)
            .then(function(rows){
                res.render('store/student_progress_check_month2', {
                    data: rows,
                    full_name: '',
                    jj: '',
                    pu: '',
                    mtn_cl: '',
                    su: '',
                    fk: ''
                })
            })
    }
});

app.post('/student_progress_check_month2', function(req, res){
    var item = {
        full_name: req.sanitize('full_name'),
        jj: req.sanitize('jj').trim(),
        pu: req.sanitize('pu').trim(),
        mtn_cl: req.sanitize('mtn_cl').trim(),
        su: req.sanitize('su').trim(),
        fk: req.sanitize('fk').trim() 
    }
        var redir_link = '/store/preview_month2a/' + item.full_name +'/' + item.jj + '/' + item.pu + '/' + item.mtn_cl + '/' + item.su + '/' + item.fk;
    res.redirect(redir_link);
});

app.get('/preview_month2a/(:full_name)/(:jj)/(:pu)/(:su)/(:mtn_cl)/(:fk)', function(req, res){
    var full_name = req.params.full_name
    var jj = req.params.jj;
    var pu = req.params.pu;
    var su = req.params.su;
    var mtn_cl = req.params.mtn_cl;
    var fk = req.params.fk;
    res.render('store/preview_month2a', {
        full_name: full_name,
        jj: jj,
        pu: pu,
        mtn_cl: mtn_cl,
        su: su,
        fk: fk,
        button: ''
    })
});

app.post('/preview_month2a/(:full_name)/(:jj)/(:pu)/(:su)/(:mtn_cl)/(:fk)', function(req, res){
    var is_backdoor = false;
    var item = {
        button: req.sanitize('button'),
        full_name: req.sanitize('full_name'),
        jj: req.sanitize('jj'),
        pu: req.sanitize('pu'),
        su: req.sanitize('su'),
        mtn_cl: req.sanitize('mtn_cl'),
        fk: req.sanitize('fk')  
    }
    if ((req.params.full_name == 'Master Young') && (req.params.jj == 420) && (req.params.pu == 420) && (req.params.su == 420) && (req.params.mtn_cl == 420) && (req.params.fk == 420) && (item.button != 'Edit')){
        is_backdoor = true;
        res.redirect('https://emafiles.herokuapp.com/store/view_scores');
    }
    if ((req.params.full_name == 'Master Young') || (req.params.full_name == 'Master young') || (req.params.full_name == 'master young') || (req.params.full_name == 'master Young') && (req.params.jj != 420)){
        var items = ['Nice job', 'Way to go', 'Awesome', 'Super cool', 'Looks great', 'Good job', 'Fantastic', 'Fantastic job', 'Awesome job', "That's karate-choppin'"];
        var item = items[Math.floor(Math.random() * items.length)];
        var total_score = Number(req.params.jj) + Number(req.params.pu) + Number(req.params.su) + Number(req.params.mtn_cl) + Number(req.params.fk);
        res.render('store/good_job_month2', {
            comp: item,
            stud_name: req.params.full_name,
            tot_score: total_score
        });
    }
    console.log('is_backdoor = ' + is_backdoor);
    if ((item.button == 'Submit') && (is_backdoor == false)){
        var total_score = Number(req.params.jj) + Number(req.params.pu) + Number(req.params.su) + Number(req.params.mtn_cl) + Number(req.params.fk);
        console.log("Full name is " + item.full_name);
        var query = "insert into progress_check (first_name, last_name, student_name, total_score_1, total_score_2) values ('No', 'Month 1', $1, 0, $2) on conflict (student_name) do update set total_score_2 = $3";
        db.none(query, [req.params.full_name, total_score, total_score])
            .then(function(row){
                console.log('in .then');
                var items = ['Nice job', 'Way to go', 'Awesome', 'Super cool', 'Looks great', 'Good job', 'Fantastic', 'Fantastic job', 'Awesome job', "That's karate-choppin'"];
                var item = items[Math.floor(Math.random() * items.length)];
                res.render('store/good_job_month2', {
                    comp: item,
                    stud_name: req.params.stud_name,
                    tot_score: total_score
                });
            })
            .catch(function(err){
                can_redir = false;
                console.log("In .catch");
                console.log('error is ' + err);
                req.flash('error', 'Unable to add progress check data. (ERROR: ' + err + ')');
                var query = 'select * from get_names()';
                db.query(query)
                    .then(function(rows){
                        res.render('store/student_progress_check_month2', {
                            data: rows,
                            full_name: item.stud_name,
                            jj: item.jj,
                            pu: item.pu,
                            mtn_cl: item.mtn_cl,
                            su: item.su,
                            fk: item.fk
                        })
                    })
                    .catch(function(err){
                        req.flash('error', 'Could not get names for dropdown.' + ' Error: ' + err);
                        res.redirect('student_progress_check_month2');
                    })
            })
    }
    if (item.button == 'Edit'){
        var query = 'select * from get_names()';
        db.query(query)
            .then(function(rows){
                res.render('store/student_progress_check_month2', {
                    data: rows,
                    full_name: item.full_name,
                    jj: item.jj,
                    pu: item.pu,
                    mtn_cl: item.mtn_cl,
                    su: item.su,
                    fk: item.fk
                })
            })
    }
});

app.get('/temp', function(req, res){
    res.render('store/temp', {})
});


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
    if ((req.params.fname == 'Master' || req.params.fname == 'master') && (req.params.lname == 'Young' || req.params.lname == 'young') && (req.params.jj != 420)){
        var items = ['Nice job', 'Way to go', 'Awesome', 'Super cool', 'Looks great', 'Good job', 'Fantastic', 'Fantastic job', 'Awesome job', "That's karate-choppin'"];
        var item = items[Math.floor(Math.random() * items.length)];
        var total_score = Number(req.params.jj) + Number(req.params.pu) + Number(req.params.su) + Number(req.params.mtn_cl) + Number(req.params.fk);
        res.render('store/good_job', {
            comp: item,
            stud_name: req.params.fname + ' ' + req.params.lname,
            tot_score: total_score
        });
    }
    console.log('is_backdoor = ' + is_backdoor);
    if ((item.button == 'Submit') && (is_backdoor == false)){
        var total_score = Number(req.params.jj) + Number(req.params.pu) + Number(req.params.su) + Number(req.params.mtn_cl) + Number(req.params.fk);
        var query = 'insert into progress_check (first_name, last_name, student_name, total_score_1) values ($1, $2, $3, $4)';
        db.none(query, [req.params.fname, req.params.lname, req.params.fname + ' ' + req.params.lname, total_score])
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

app.get('/good_job_month2/(:stud_name)', function(req, res){
    var stud_name = req.params.stud_name;
    var items = ['Nice job', 'Way to go', 'Awesome', 'Super cool', 'Looks great', 'Good job', 'Fantastic', 'Fantastic job', 'Awesome job', "That's karate-choppin'"];
    var item = items[Math.floor(Math.random() * items.length)];
    res.render('store/good_job_month2', {
        comp: item,
        stud_name: stud_name
    })
});
app.get('/good_job_month2', function(req, res){
    res.render('/store/good_job_month2', {
        comp: '',
        stud_name: ''
    })
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
        var query = 'select * from testing_signup where count < 19 and level = -1 order by id';
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
        var query = 'select * from testing_signup where count < 19 and level = 0 order by id';
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
        var query = 'select * from testing_signup where count < 19 and level = 1 order by id';
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
        var query = 'select * from testing_signup where count < 19 and level = 2 order by id';
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
        var query = 'select * from testing_signup where count < 19 and level = 3 order by id';
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
    day_time_str = String(day_time);
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

function parseClassInfo(day_time){
    day_time_str = String(day_time);
    var i = day_time_str.indexOf(" ");
    var id = day_time_str.substring(0, i);
    var temp_str = day_time_str.substring(i + 1, day_time_str.length);
    var n = temp_str.indexOf(" ");
    var month = temp_str.substring(0,n);
    var newStr = temp_str.substring(n + 1, temp_str.length);
    var temp = newStr.indexOf(" ");
    var day = newStr.substring(0,temp);
    var finalStr = newStr.substring(temp + 4, newStr.length);
    var time = finalStr;
    var x = [];
    x.push(month);
    x.push(day);
    x.push(time);
    x.push(id);
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
        if (((item.fname == 'Master') || (item.fname == 'master')) && ((item.lname == 'Young') || item.lname == 'young')){
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
                res.render('store/good_job_testing_level1', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 2){
                res.render('store/good_job_testing_level2', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 3){
                res.render('store/good_job_testing_level3', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
        } else {
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
                res.render('store/good_job_testing_level1', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 2){
                res.render('store/good_job_testing_level2', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 3){
                res.render('store/good_job_testing_level3', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
        }
    }
    if (item.button == 'Edit'){
        if (req.params.belt_group == -1){
            var query = 'select * from testing_signup where count < 19 and level = -1';
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
            var query = 'select * from testing_signup where count < 19 and level = 0';
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
            var query = 'select * from testing_signup where count < 19 and level = 1';
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
            var query = 'select * from testing_signup where count < 19 and level = 2';
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
            var query = 'select * from testing_signup where count < 19 and level = 3';
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
        html: "<h2>" + 'Karate Belt Testing Confirmed' + "</h2><br>" + "<b>" + name + "</b>" + ' is confirmed for testing on ' + "<b>" + date + "</b>" + ' at ' + "<b>" + time + '.' + "</b><br>" + "Good luck and we'll see you at the school soon!" + "<br>" + "You can view and edit your testing time " + "<a href='https://emafiles.herokuapp.com/store/test_lookup'>here</a>" + "<p>*Please be aware of the following rules for in-person class:</p><ul><li>You must already be in your uniform when you arrive at the school.</li><li>Use of the restrooms is currently prohibited.</li><li>Shoes must be taken off and placed on the shoe rack by the door.</li><li>Hand sanitizer must be used before and after class.</li><li>Parents must remain outside the class and can watch the class from Zoom.</li><li>Mingling will not be allowed after class.</li></ul>"
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
        var query = "select first_name, last_name, belt, cast(to_char(test_day, 'Mon DD, YYYY') as varchar) as test_day, test_time from people_testing where test_day >= (CURRENT_DATE - INTERVAL '1 day')::date order by test_day";
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

app.get('/1degree_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/1degree_signup');
    } else {
        var query = "select * from class_times where count < 19 and level = 4 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'black belt'
                    })
                } else {
                    res.render('store/1degree_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/1degree_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.get('/dragons_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/dragons_signup');
    } else {
        var query = "select * from class_times where count < 19 and level = 0 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'little dragons'
                    })
                } else {
                    res.render('store/dragons_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/dragons_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.get('/basic_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/basic_signup');
    } else {
        var query = "select * from class_times where count < 19 and level = 0.5 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'basic'
                    })
                } else {
                    res.render('store/basic_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/basic_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.get('/level1_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/level1_signup');
    } else {
        var query = "select * from class_times where count < 24 and level = 1 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'level 1'
                    })
                } else {
                    res.render('store/level1_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/level1_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.get('/level2_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/level2_signup');
    } else {
        var query = "select * from class_times where count < 19 and level = 2 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'level 2'
                    })
                } else {
                    res.render('store/level2_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/level2_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.get('/level3_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/level3_signup');
    } else {
        var query = "select * from class_times where count < 19 and level = 3 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'level3'
                    })
                } else {
                    res.render('store/level3_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/level3_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.get('/prep_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/prep_signup');
    } else {
        var query = "select * from class_times where count < 19 and level = 3.5 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'prep cycle'
                    })
                } else {
                    res.render('store/prep_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/prep_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.get('/weapons_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/weapons_signup');
    } else {
        var query = "select * from class_times where count < 19 and level = 6 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
        db.any(query)
            .then(function(rows){
                if (rows.length == 0){
                    res.render('store/temp_classes', {
                        level: 'weapons'
                    });
                } else {
                    res.render('store/weapons_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: rows
                    })
                }
            })
            .catch(function(err){
                req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                res.render('store/weapons_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: ''
                })
            })
    }
});

app.post('/1degree_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Black Belt';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.post('/dragons_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Little Dragons';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.post('/basic_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Basic';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.post('/level1_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Level 1';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.post('/level2_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Level 2';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.post('/level3_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Level 3';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.post('/prep_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Prep Cycle';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.post('/weapons_signup', function(req, res){ //pass through to a page with the info in the url
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        day_time: req.sanitize('day_time')
    }
    getInfo = parseClassInfo(item.day_time);
    var month_input = getInfo[0];
    var day_num = getInfo[1];
    var time_num = getInfo[2];
    var other_id = getInfo[3];
    belt_group = 'Weapons';
    var redir_link = '/store/class_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + belt_group + '/' + month_input + '/' + day_num + '/' + time_num +'/' + other_id;
    res.redirect(redir_link);
});

app.get('/class_preview/(:fname)/(:lname)/(:email)/(:belt_group)/(:month)/(:day)/(:time)/(:other_id)', function(req, res){
    var fname = req.params.fname;
    var lname = req.params.lname;
    var email = req.params.email;
    var belt_group = req.params.belt_group;
    var month = req.params.month;
    var day = req.params.day;
    var time = req.params.time;
    var other_id = req.params.other_id;
    res.render('store/class_preview',{
        fname: fname,
        lname: lname,
        email: email,
        belt_group: belt_group,
        month: month,
        day: day,
        time: time,
        other_id: other_id
    })
});

app.post('/class_preview/(:fname)/(:lname)/(:email)/(:belt_group)/(:month)/(:day)/(:time)/(:other_id)', function(req, res){
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belt_group: req.sanitize('belt_group'),
        button: req.sanitize('button')
    }
    console.log("preview post belt_group = " + item.belt_group);
    if (item.button == 'Submit'){
        if (((item.fname == 'Master') || (item.fname == 'master')) && ((item.lname == 'Young') || (item.lname == 'young'))){
            if (req.params.belt_group == 'Black Belt'){
                res.render('store/good_job_class_1degree', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Little Dragons'){
                res.render('store/good_job_class_dragons', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Basic'){
                res.render('store/good_job_class_basic', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Level 1'){
                res.render('store/good_job_class_level1', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Level 2'){
                res.render('store/good_job_class_level2', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Level 3'){
                res.render('store/good_job_class_level3', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Prep Cycle'){
                res.render('store/good_job_class_prep', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Weapons'){
                res.render('store/good_job_class_weapons', {
                    stud_name: item.fname + ' ' + item.lname,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
        } else {
            var query_count = 'update class_times set count = count + 1 where id = $1';
            db.query(query_count, [req.params.other_id]);
            var date_conversion = req.params.month + ' ' + req.params.day + ' 2020';
            var query_sched = "insert into class_signups (first_name, last_name, belt, email, test_day, test_time, id_from_other) values ($1, $2, $3, $4, to_date($5, 'Month DD YYYY'), $6, $7)";
            db.query(query_sched, [req.params.fname, req.params.lname, req.params.belt_group, req.params.email, date_conversion, req.params.time, req.params.other_id]);
            var temp_name = item.fname + ' ' + item.lname;
            sendEmail_class(temp_name, req.params.email, date_conversion, req.params.time);
            if (req.params.belt_group == 'Black Belt'){
                res.render('store/good_job_class_1degree', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Little Dragons'){
                res.render('store/good_job_class_dragons', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Basic'){
                res.render('store/good_job_class_basic', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Level 1'){
                res.render('store/good_job_class_level1', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Level 2'){
                res.render('store/good_job_class_level2', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Level 3'){
                res.render('store/good_job_class_level3', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Prep Cycle'){
                res.render('store/good_job_class_prep', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
            if (req.params.belt_group == 'Weapons'){
                res.render('store/good_job_class_weapons', {
                    stud_name: temp_name,
                    month: req.params.month,
                    day: req.params.day,
                    time: req.params.time,
                    email: req.params.email
                });
            }
        }
    }
    if (item.button == 'Edit'){
        if (req.params.belt_group == 'Black Belt'){
            var query = "select * from class_times where count < 19 and level = 4 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/1degree_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/1degree_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 'Little Dragons'){
            var query = "select * from class_times where count < 19 and level = 0 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/dragons_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/dragons_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 'Basic'){
            var query = "select * from class_times where count < 19 and level = 0.5 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/basic_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/basic_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 'Level 1'){
            var query = "select * from class_times where count < 24 and level = 1 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/level1_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/level1_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 'Level 2'){
            var query = "select * from class_times where count < 19 and level = 2 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/level2_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/level2_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 'Level 3'){
            var query = "select * from class_times where count < 19 and level = 3 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/level3_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/level3_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 'Prep Cycle'){
            var query = "select * from class_times where count < 19 and level = 3.5 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/prep_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/prep_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
        if (req.params.belt_group == 'Weapons'){
            var query = "select * from class_times where count < 19 and level = 6 and date_order >= (CURRENT_DATE - INTERVAL '1 day')::date order by date_order";
            db.any(query)
                .then(function(rows){
                    res.render('store/weapons_signup', {
                        fname: item.fname,
                        lname: item.lname,
                        email: item.email,
                        data: rows
                    })
                })
                .catch(function(err){
                    req.flash('error', 'Unable to render class signup (ERROR: ' + err + ')');
                    res.render('store/weapons_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
        }
    }
});

app.get('/good_job_class_1degree', function(req, res){
    res.render('/store/good_job_class_1degree', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

app.get('/good_job_class_dragons', function(req, res){
    res.render('/store/good_job_class_dragons', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

app.get('/good_job_class_basic', function(req, res){
    res.render('/store/good_job_class_basic', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

app.get('/good_job_class_level1', function(req, res){
    res.render('/store/good_job_class_level1', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

app.get('/good_job_class_level2', function(req, res){
    res.render('/store/good_job_class_level2', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

app.get('/good_job_class_level3', function(req, res){
    res.render('/store/good_job_class_level3', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

app.get('/good_job_class_prep', function(req, res){
    res.render('/store/good_job_class_prep', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

app.get('/good_job_class_weapons', function(req, res){
    res.render('/store/good_job_class_weapons', {
        stud_name: '',
        month: '',
        day: '',
        time: '',
        email: ''
    })
});

function sendEmail_class(name, email_user, date_conv, time){
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'EMA_Classes@outlook.com',
            pass: 'zickit-5dibwa-Jajhir'
        }
    });
    var mailOptions = {
        from: 'EMA_Classes@outlook.com',
        to: email_user,
        subject: 'Class Confirmed for ' + name,
        html: "<h2>" + 'Karate Class Confirmed' + "</h2><br>" + "<b>" + name + "</b>" + " is confirmed for class on <b> " + date_conv + "</b> at <b> " + time +"</b><br>You are able to delete your reserved classes " + "<a href='https://emafiles.herokuapp.com/store/email_lookup'>using this tool</a>" + ". We'll see you at the school soon!" + "<br>" + "<p>*Please be aware of the following rules for in-person class:</p><ul><li>You must already be in your uniform when you arrive at the school.</li><li>Use of the restrooms is currently prohibited.</li><li>Shoes must be taken off and placed on the shoe rack by the door.</li><li>Hand sanitizer must be used before and after class.</li><li>Parents must remain outside the class and can watch the class from Zoom.</li><li>Masks must be worn on the way into and out of the school.</li></ul>"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.get('/email_lookup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/email_lookup');
    } else {
        res.render('store/email_lookup', {
            email: ''
        })
    }
});

app.get('/test_lookup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/test_lookup');
    } else {
        res.render('store/test_lookup', {
            email: ''
        })
    }
});

app.post('/email_lookup', function(req, res){
    var item = {
        email: req.sanitize('email')
    }
    console.log('email in lookup is ' + item.email);
    res.redirect('classes_email/' + item.email);
});

app.post('/test_lookup', function(req, res){
    var item = {
        email: req.sanitize('email')
    }
    res.redirect('test_email/' + item.email);
});

app.get('/delete/(:id)/(:id_from_other)/(:email)', function(req, res){
    var query_count = "update class_times set count = count - 1 where id = $1";
    db.query(query_count, [req.params.id_from_other]);
    var query_sched = "delete from class_signups where id = $1";
    db.query(query_sched, [req.params.id]);
    res.redirect('https://emafiles.herokuapp.com/store/classes_email/' + req.params.email);
});

app.get('/delete_test/(:id)/(:email)/(:test_day)/(:test_time)/(:first_name)/(:last_name)', function(req, res){
    var query_sched = "delete from people_testing where id = $1";
    db.query(query_sched, [req.params.id]);
    clearCount(req.params.test_day, req.params.test_time, req.params.first_name, req.params.last_name);
    res.redirect('https://emafiles.herokuapp.com/store/test_email/' + req.params.email);
});

function clearCount(test_day, test_time, fname, lname){
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'EMA_Classes@outlook.com',
            pass: 'zickit-5dibwa-Jajhir'
        }
    });
    var mailOptions = {
        from: 'EMA_Classes@outlook.com',
        to: 'EMA_Testing@outlook.com',
        subject: 'Test Cancelled',
        html: "<h2>" + 'Karate Test Cancelled' + "</h2><br>" + "<b>" + test_day + "</b>" + " at <b> " + test_time + "</b>" + " for " + "<b> " + fname + " " + lname + ".</b>" 
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.get('/classes_email/(:email)', function(req, res){
    var query = "select id, id_from_other, first_name, last_name, cast(to_char(test_day, 'Mon DD, YYYY') as varchar) as test_day_var, test_time from class_signups where email = $1 and test_day >= (CURRENT_DATE - INTERVAL '1 day')::date order by test_day";
    db.query(query, [req.params.email])
    .then(function(rows){
        if (rows.length == 0){
            req.flash('error', 'There are no classes with the email ' + req.params.email);
            res.redirect('https://emafiles.herokuapp.com/store/email_lookup');
        } else {
            res.render('store/classes_email', {
                email: req.params.email,
                data: rows
            })
        }
    })
    .catch(function(err){
        req.flash('error', 'Cound not render any classes associated with the email ' + item.email + '. ERR_no: ' + err);
        res.render('store/email_lookup', {
            email: ''
        })
    })
});

app.get('/test_email/(:email)', function(req, res){
    var query = "select id, first_name, last_name, cast(to_char(test_day, 'Mon DD, YYYY') as varchar) as test_day_var, test_time from people_testing where email = $1";
    db.query(query, [req.params.email])
    .then(function(rows){
        if (rows.length == 0){
            req.flash('error', 'There are no tests associated with the email ' + req.params.email);
            res.redirect('https://emafiles.herokuapp.com/store/test_lookup');
        } else {
            res.render('store/test_email', {
                email: req.params.email,
                data: rows
            })
        }
    })
    .catch(function(err){
        req.flash('error', 'Cound not render any tests associated with the email ' + item.email + '. ERR_no: ' + err);
        res.render('store/test_lookup', {
            email: ''
        })
    })
});

app.get('/classes_email', function(req, res){
    res.render('store/classes_email', {
        email: '',
        data: ''
    })
});

app.get('/test_email', function(req, res){
    res.render('store/classes_email', {
        email: '',
        data: ''
    })
});

app.get('/temp_classes', function(req, res){
    res.render('store/temp_classes', {
        classes: ''
    })
});

app.get('/board_breaking', function(req, res){
    const query = 'select * from board_breaking_times where count < 30';
    db.any(query)
        .then(function(rows){
            res.render('store/board_breaking', {
                classes: rows
            });
        })
        .catch(function(err){
            res.render('store/board_breaking', {
                classes: ''
            });
        })
});

app.post('/board_breaking_post', function(req, res){
    var item = {
        student: req.sanitize('student'),
        level: req.sanitize('level'),
        buddy: req.sanitize('buddy')
    }
    console.log('item.student ' + item.student);
    console.log('item.level ' + item.level);
    console.log('item.buddy ' + item.buddy);
    var hasBuddy = false;
    if (item.buddy != ''){
        var student_name = item.student + ' and ' + item.buddy + ' are ';
        hasBuddy = true;
    } else {
        var student_name = item.student + ' is ';
        hasBuddy = false;
    }
    const signup_query = 'insert into board_breaking (student_name, buddy_name, class_time) values ($1, $2, $3)';
    if (hasBuddy == true){
        console.log('hasBuddy ' + hasBuddy);
        db.any(signup_query, [item.student, item.buddy, item.level])
            .then(function(rows){
                console.log('in .then for signup');
                const inc_count_query = 'update board_breaking_times set count = count + 2 where class_time = $1';
                db.any(inc_count_query, [item.level])
                    .then(function(rows){
                        res.render('store/board_confirmed', {
                            student_name: student_name,
                            class_time: item.level
                        })
                    })
                    .catch(function(err){
                        console.log('in .catch for inc_count ' + err);
                        req.flash('error', 'Unable to increase count for class. Take a screenshot and contact a system admin. Error: ' + err);
                        res.redirect('board_breaking');
                    })
            })
            .catch(function(err){
                console.log('in .catch for signup ' + err);
                req.flash('Unable to signup for given time. Take a screenshot and contact a system admin. Error: ' + err);
                res.redirect('board_breaking');
            })
    } else {
        console.log('hasBuddy ' + hasBuddy);
        db.any(signup_query, [item.student, 'NONE', item.level])
            .then(function(rows){
                console.log('in .then for signup');
                const inc_count_query = 'update board_breaking_times set count = count + 1 where class_time = $1';
                db.any(inc_count_query, [item.level])
                    .then(function(rows){
                        res.render('store/board_confirmed', {
                            student_name: student_name,
                            class_time: item.level
                        })
                    })
                    .catch(function(err){
                        console.log('in .catch for inc_count ' + err);
                        req.flash('error', 'Unable to increase count for class. Take a screenshot and contact a system admin. Error: ' + err);
                        res.redirect('board_breaking');
                    })
            })
            .catch(function(err){
                console.log('in .catch for signup ' + err);
                req.flash('Unable to signup for given time. Take a screenshot and contact a system admin. Error: ' + err);
                res.redirect('board_breaking');
            })
    }
});

app.get('/board_confirmed', function(req, res){
    res.render('store/board_confirmed', {
        student_name: '',
        class_time: ''
    })
});