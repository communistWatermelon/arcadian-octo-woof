var fs = require("fs");

var express = require('express');
var app = express();

var router = express.Router();

var filters;
var waves;
var amiibo;

var getSingleItem = function(array, id) {
	return array.filter(function(item) {
		return item.id == id;
	})[0];
};

filters = JSON.parse( fs.readFileSync(__dirname + '/data/filters.json', 'utf8') );
waves = JSON.parse( fs.readFileSync(__dirname + '/data/waves.json', 'utf8') );
amiibo = JSON.parse( fs.readFileSync(__dirname + '/data/amiibo.json', 'utf8') );

router.use(function(req, res, next) {
	console.log('Handling a request');
	next();
});

router.route('/filters')
.get(function(req, res) {
	res.json(filters);
});

router.route('/filters/:filter_id')
.get(function(req, res) {
	var singleFilter = getSingleItem(filters, req.params.filter_id);
	res.json(singleFilter);
});

router.route('/waves')
.get(function(req, res) {
	res.json(waves);
});

router.route('/waves/:waves_id')
.get(function(req, res) {
	var singleWave = getSingleItem(waves, req.params.waves_id);

	res.json(singleWave);
});

router.route('/amiibo')
.get(function(req, res) {
	res.json(amiibo);
});

router.route('/amiibo/:amiibo_id')
.get(function(req, res) {
	var singleAmiibo = getSingleItem(amiibo, req.params.amiibo_id);

	res.json(singleAmiibo);
});

app.use('/', router);

app.listen(80, function(err) {
	console.log('Listening for amiibo requests on port 80');
});
