'use strict';

let gulp = require('gulp');
let gulpConfig = require('../gulp.config.js');
let plumber = require('gulp-plumber');
let jade = require('gulp-jade');
let flatten = require('gulp-flatten');

gulp.task('templates', function() {
   gulp
    .src(gulpConfig.templates.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade())
    .pipe(flatten())
    .pipe(gulp.dest(gulpConfig.templates.dest));
});

function onError(err) {
  let gutil = require('gulp-util');
  let message = new gutil.PluginError('gulp-jade', err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
