var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//Set locals
	locals.section = 'Projects';

	//Load Projects
	view.query('projects', keystone.list('Project').model.find());

	//Render View
	view.render('projects');
};
