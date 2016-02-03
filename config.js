'use strict';

let config = {
	lintScripts: [
		'./gulpfile.js',
		'./config.js',
		'./client/angular/**/*.js'
	],
	browserSync: require('browser-sync').create(),
	views: {
		src: './client/views/*.jade',
		dest: './public/'
	},
	templates: {
		src: './client/angular/**/*.jade',
		dest: './public/templates/'
	},
	styles: {
		src: './client/styles/*.scss',
    watch: [
      './client/angular/**/*.scss',
      './client/styles/**/*.scss',
    ],
		dest: './public/styles/'
	},
	scripts: {
		src: [
			'./client/angular/**/*.js',
			'!./client/angular/**/*.spec.js'
		],
		dest: './public/scripts/'
	},
	sprites: {
		src: './client/sprites/*.png',
		dest: './public/imgs/sprites/'
	},
	imgs: {
		src: [
			'./client/imgs/**/*.jpg',
			'./client/imgs/**/*.png',
			'./client/imgs/**/*.svg',
			'./client/imgs/**/*.gif'
		],
		dest: './public/imgs/'
	}
};

module.exports = config;
