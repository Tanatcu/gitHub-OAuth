var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');

app.use(history({}));

app.use(serveStatic(__dirname));

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

var port = process.env.PORT || 5000;

app.listen(port);
console.log('server started ' + port);