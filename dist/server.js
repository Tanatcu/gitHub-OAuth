var express = require('express');
var app = express();
var cors = require('cors')
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');

app.use(history({}));

app.use(cors());

app.use(serveStatic(__dirname));

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

	if(req.method === "OPTIONS")
		res.send(200)
	else
		next();
});

var port = process.env.PORT || 5000;

app.listen(port);
console.log('server started ' + port);