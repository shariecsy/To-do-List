var express = require('express');
var app = express();

//
app.use(express.static('toDoList'));

app.post('/save', function(req, res) {
    console.log('save');
    res.end('ok');
})
app.listen(1337);
