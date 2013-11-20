module.exports.model = function (config, db) {

	var Schema = require('mongoose').Schema,
		ObjectId = Schema.Types.ObjectId,
		ExampleSchema;

	ExampleSchema = new Schema({
		example: String
	});

	db.model('Example', ExampleSchema);
}