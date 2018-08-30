var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home', {
	map: { name: 'title' },
	singular: 'Home',
	plural: 'Home',
	autokey: { path: 'slug', from: 'title', unique: true }
});

Home.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImages },
	publishedDate: { type: Date, default: Date.now }
});

Home.register();
