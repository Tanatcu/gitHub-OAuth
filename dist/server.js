let express = require('express')
let app = express()

let fs = require('fs')
let https = require('https')

let key = fs.readFileSync('cert/key.pem')
let cert = fs.readFileSync('cert/server.crt')

let bodyParser = require('body-parser')
let history = require('connect-history-api-fallback')
let cors = require('cors')
let serveStatic = require('serve-static')
let request = require('request')

let port = process.env.PORT || 443

/**
 * Parsers for JSON format
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/**
 * For using history mode in Vue router
 */
app.use(history({}))

/**
 * Trying to fix CORS problem
 */
app.use(cors())

/**
 * As i read, for serving static files
 */
app.use(serveStatic(__dirname))

/**
 * Response options
 */
let options = {
	"method": "POST",
	"url": "https://github.com/login/oauth/access_token",
	"body": "{}",
	"headers": {
		"Accept": "application/json"
	}
}

/**
 * Listener for custom request
 */
app.post('/get_token', (req, res) => {
	let reqData = req.body

	options.url += '?client_id=' + reqData.client_id + '&client_secret=' + reqData.client_secret + '&code=' + reqData.code

	/**
	 * Request to github api for getting access_token (i know, it's bad code)
	 * @param {object} options - request options
	 * @callback {function}
	 */
	request(options, function(error, response, body) {

		/**
		 * Little catcher of errors
		 */
		if(error || response.statusCode !== 200)
			res.status(response.statusCode).send(error)

		/**
		 * If errors not found i send response to front side
		 */
		res.status(200).send(body)
	})
})

/**
 * Start of server
 */
https.createServer({
	key: key,
	cert: cert
}, app).listen(port, function() {
	console.log('Server started ' + port)
});
