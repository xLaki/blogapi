const express = require('express')

app.get('/', function(req, res){
    console.log('yesyesyes dad idk')
    res.render('home')
})

app.listen(5000, function(err){
    if (err){
        console.log(err)
    }
    console.log('Server is live, and so is your fat ugly body.')
})