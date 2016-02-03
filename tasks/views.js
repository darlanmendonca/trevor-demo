'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let plumber = require('gulp-plumber');
let jade = require('gulp-jade');
let flatten = require('gulp-flatten');

gulp.task('views', function() {
	return gulp
		.src(config.views.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jade())
		.pipe(gulp.dest(config.views.dest));
});

function onError(err) {
	let gutil = require('gulp-util');
	let message = new gutil.PluginError('gulp-jade', err.message).toString();
	process.stderr.write(message + '\n');
	gutil.beep();
};
