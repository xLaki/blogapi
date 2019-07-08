const express = require('express');
const api = express();

const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'GoodEgg303',
    database : 'blogapi'
});

db.connect(function(err){
    if (err) throw err
    console.log('mysql is connected')
})

api.get('/createdb', (req, res) => {
    db.query('CREATE DATABASE blogapi;', (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created')
    });
});

api.get("/createposttable", (req, res) => {
    // create table called posts
    let sql = 'CREATE TABLE posts(ID int NOT NULL AUTO_INCREMENT, title varchar(255), body varchar(255),PRIMARY KEY (ID) );'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table created');
    })
})

api.get('/addpost', (req, res) => {
    let post = {title: "meme 2", body: "stop touchaing my spaghet"}
    let sql = 'INSERT INTO posts SET ?;';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("post added");
    });
});

api.get('/addpost2', (req, res) => {
    let post = {title: "meme 3", body: "skadaddle skadoodle your dick is now a noodle lol"}
    let sql = 'INSERT INTO posts SET ?;';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("post added again v3");
    });
});

api.get('/getposts', (req, res) => {
    let sql = 'select * from posts;';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("posts selected");
    });
});

api.get('/getpost/:id', (req, res) => {
    let sql = 'select * from posts where ID = ' + req.params.id + ';';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("post " + req.params.id + " selected");
    });
});

api.get('/deletepost/:id', (req, res) => {
    let sql = 'delete from posts where ID = ' + req.params.id + ';';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("post " + req.params.id + " deleted");
    });
});

api.listen(5000);

console.log('Server is live, and so is your fat ugly body.');