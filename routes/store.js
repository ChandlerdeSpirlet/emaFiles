var express = require('express');
var app = express();
var path = require('path');
var exp_val = require('express-validator');
var session = require("express-session");
var fs = require('fs');
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

/*
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
*/
app.get('/student_progress_check', function(req, res){
    res.render('store/student_progress_check', {
        fname: '',
        lname: '',
        jj: '',
        pu: '',
        mtn_cl: '',
        su: '',
        fk: ''
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
/*
app.get('/preview', function(req, res){
    res.render('store/preview', {
        fname: '',
        lname: '',
        jj: '',
        pu: '',
        mtn_cl: '',
        su: '',
        fk: '',
        button: ''
    })
});
*/

app.post('/preview/(:fname)/(:lname)/(:jj)/(:pu)/(:su)/(:mtn_cl)/(:fk)', function(req, res){
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
    var can_redir = false;
    if (item.button == 'Submit'){
        var query = 'insert into progress_check (student_name, jumping_jacks, pushups, situps, mtn_climbers, front_kicks) values ($1, $2, $3, $4, $5, $6)';
        db.none(query, [req.params.fname + ' ' + req.params.lname, req.params.jj, req.params.pu, req.params.su, req.params.mtn_cl, req.params.fk])
            .then(function(row){
                can_redir = true;
                console.log('in .then');
            })
            .catch(function(err){
                can_redir = false;
                console.log("In .catch");
                console.log('error is ' + err);
                req.flash('error', 'Unable to add progress check data (ERROR: ' + err + ')');
                res.redirect('student_progress_check')
            })
            
            console.log('can_redir = ' + can_redir);
            if (can_redir == true){
                var stud = req.params.fname + " " + req.params.lname;
                var redir = 'good_job/' + stud;
                res.redirect(redir);
            }
            
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

app.get('/view_scores', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/view_scores');
    } else {
        var query = 'select * from progress_check order by id';
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