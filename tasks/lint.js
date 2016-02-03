'use strict';

let gulp = require('gulp');
let gutil = require('gulp-util');
let config = require('../config.js');
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');
let beep = ()=> gutil.beep();

gulp.task('lint', function() {
	gulp
		.src(config.lintScripts)
		.pipe(jshint())
		.pipe(jshint.reporter(beep))
		.pipe(jshint.reporter(stylish));
});
