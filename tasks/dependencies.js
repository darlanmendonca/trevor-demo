'use strict';

let gulp = require('gulp');
let bower = require('bower-files')();
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

gulp.task('dependencies', function() {
	gulp
		.src(bower.ext('css').files)
		.pipe(concat('vendor.css'))
		// .pipe(uglify())
		.pipe(gulp.dest('./public/styles'));

	gulp
		.src(bower.ext('js').files)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/scripts'));
});
