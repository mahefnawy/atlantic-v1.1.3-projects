var keystone = require('keystone');
var Types = keystone.Field.Types;

var Project = new keystone.List('Project', {
	map: { name: 'code' },
	singular: 'Project',
	plural: 'Projects',
	autokey: { path: 'slug', from: 'code', unique: true }
});

Project.add({
	code: { type: String, required: true },
	minPrice: { type: Number },
	maxPrice: { type: Number },
	minArea: { type: Number },
	maxArea: { type: Number },
	locationEn: { type: String },
	locationAr: { type: String },
	type: { type: String },
	deliveryDate: { type: Number },
	installment: { type: Number },
	downPayment: { type: String },
	descriptionEn: { type: String },
	descriptionAr: { type: String },
	image1: { type: Types.CloudinaryImage },
	image2: { type: Types.CloudinaryImage },
	image3: { type: Types.CloudinaryImage },
	image4: { type: Types.CloudinaryImage },
	image5: { type: Types.CloudinaryImage },
	image6: { type: Types.CloudinaryImage },
	image7: { type: Types.CloudinaryImage },
	image8: { type: Types.CloudinaryImage },
	image9: { type: Types.CloudinaryImage },
	image10: { type: Types.CloudinaryImage },
	publishedDate: { type: Date, default: Date.now }
});
Project.register();
