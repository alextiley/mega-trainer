module.exports = function (config) {

	var bootstrap = require(config.paths.core.bootstrap),
		mongoose = require('mongoose'),
		express = require('express'),
		app = express(),
		db;

	// App specific configuration
	config = bootstrap.getAppConfig(config);

	// Create a mongoose connection
	db = mongoose.createConnection(config.db.url, function (error) {
		if (error) throw error;
	});

	db.once('open', function () {
		
		// Pull in common and app specific models
		db = bootstrap.getModels(config.paths.shared.models, config, db);
		db = bootstrap.getModels(config.paths.app.models, config, db, app);
		
		// Express configuration
		app = require(config.paths.app.config + 'express')(app, config);

		// Passport configuration
		require(config.paths.app.config + 'passport')(config, db);

		// Pull in app specific controllers
		app = bootstrap.getControllers(app, config, db);

	});

	return app;
};