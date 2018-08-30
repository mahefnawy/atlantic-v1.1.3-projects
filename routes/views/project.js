var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//Set locals
	locals.section = 'Projects';
	locals.filters = {
		project: req.params.project
	};
	locals.data = {
		projects: []
	};

	//Load Project
	view.on('init', function(next) {
		var q = keystone.list('Project').model.findOne({
			slug: locals.filters.project
		});
		q.exec(function(err, result) {
			locals.data.project = result;
			next(err);
		});
	});

	//Render View
	view.render('project');
};
