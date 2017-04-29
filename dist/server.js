let express = require('express');
let app = express();

let history = require('connect-history-api-fallback');
let cors = require('cors')
let serveStatic = require('serve-static');

/**
 * For using history mode in Vue router
 */
app.use(history({}));

/**
 * Trying to fix CORS problem :)
 */
app.use(cors());

/**
 * As i read, for serving static files
 */
console.info("dirname", __dirname)
app.use(serveStatic(__dirname));

let port = process.env.PORT || 5000;

app.listen(port);
console.log('server started ' + port);