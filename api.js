const express = require('express');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'GoodEgg303'
});

db.connect(function(err){
    if (err) throw err
    console.log('mysql is connected')
})

app.listen(5000);

console.log('Server is live, and so is your fat ugly body.');