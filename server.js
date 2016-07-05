var express = require('express');
var app = express();
app.use(express.static('toDoList'));
app.listen(1337);
