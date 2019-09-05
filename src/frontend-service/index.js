var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/results', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

app.listen(8080, () => console.log('Nodejs Frontend listening on port 8080!'))