const express = require('express');
const app = express();
const fileServerMiddleware = express.static('public');
app.use('/', fileServerMiddleware); //mounts the middleware
app.listen(3000, function () {
	console.log('App started on port 3000. ')
});