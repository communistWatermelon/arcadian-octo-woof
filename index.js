var fs = require("fs");

var express = require('express');
var app = express();

var filtersJson;
var wavesJson;
var amiiboJson;

filtersJson = JSON.parse( fs.readFileSync(__dirname + '/data/filters.json', 'utf8') );
wavesJson = JSON.parse( fs.readFileSync(__dirname + '/data/waves.json', 'utf8') );
amiiboJson = JSON.parse( fs.readFileSync(__dirname + '/data/amiibo.json', 'utf8') );

app.get('/filters', function(req, res) {
	res.json(filtersJson);
});

app.get('/waves', function(req, res) {
	res.json(wavesJson);
});

app.get('/amiibo', function(req, res) {
	res.json(amiiboJson);
});

app.listen(80, function(err) {
	console.log('Listening for amiibo requests on port 80');
});
