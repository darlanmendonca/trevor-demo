'use strict';

let gulp = require('gulp');
let gutil = require('gulp-util');
let gulpConfig = require('../gulp.config.js');
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');
let beep = ()=> gutil.beep();

gulp.task('lint', function() {
	gulp
		.src(gulpConfig.lintScripts)
		.pipe(jshint())
		.pipe(jshint.reporter(beep))
		.pipe(jshint.reporter(stylish));
});
