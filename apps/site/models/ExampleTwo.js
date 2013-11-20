module.exports.model = function (config, db) {

	var Schema = require('mongoose').Schema,
		ObjectId = Schema.Types.ObjectId,
		ExampleTwoSchema;

	ExampleTwoSchema = new Schema({
		example: String
	});

	db.model('ExampleTwo', ExampleTwoSchema);
}