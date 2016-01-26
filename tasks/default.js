'use strict';

let gulp = require('gulp');

let tasks = [
	'dependencies',
	'views',
	'browser-sync',
	'images',
	'sprites',
	'styles',
	'scripts',
	'lint',
	'watch'
];

gulp.task('default', tasks);
