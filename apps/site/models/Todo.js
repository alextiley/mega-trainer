module.exports.model = function (config, db) {

	var Schema = require('mongoose').Schema,
		ObjectId = Schema.Types.ObjectId,
		TodoSchema;

	TodoSchema = new Schema({
		description: {
			type: String,
			required: true
		},
		completed: Boolean
	});

	TodoSchema.statics.getAll = function (callback) {
		this.find(function (error, todos) {
			callback.call(todos, error, todos);
		});
	};

	TodoSchema.statics.save = function (request, callback) {
		
		var todo = new this(request.body);
		
		todo.save(function (error, todo) {
			callback(error, todo);
		});
	};

	db.model('Todo', TodoSchema);
}