module.exports.controller = function (app, config, db) {

	var Todo = db.model('Todo');

	app.get('/', function (req, res) {
		Todo.getAll(function (error, todos) {
			res.locals.todos = todos;
			res.render('todo');
		});
	});

	app.post('/create', function (req, res) {
		Todo.save(req, function (error, todo) {
			if (error) {
				req.flash('errors', 'Please enter a valid todo description.');
			}
			res.redirect('/');
		});
	});

};