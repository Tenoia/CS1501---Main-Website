module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/music', handlers.watch);
	app.get('/boostrap', handlers.boostrap);
}