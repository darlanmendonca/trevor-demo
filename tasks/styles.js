'use strict';

let gulp = require('gulp');
let bower = require('bower-files')();
let dependencies = bower.relative(__dirname).ext('scss').files;
let inject = require('gulp-inject');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let gulpConfig = require('../gulp.config.js');

let injectTransform = {
  starttag: '/* inject:imports */',
  endtag: '/* endinject */',
  transform: function (filepath) {
    let util = require('util');
    return util.format('@import \'../..%s\';', filepath);
  }
};

let injectConfig = {
  read: false,
  relative: false
};

let sassConfig = {
  outputStyle: 'compressed'
};

gulp.task('styles', function() {
  gulp
    .src(gulpConfig.styles.src)
    .pipe(inject(gulp.src(dependencies, injectConfig), injectTransform))
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig).on('error', onError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write({sourceRoot: '/client/angular'}))
    .pipe(gulp.dest(gulpConfig.styles.dest))
    .pipe(gulpConfig.browserSync.stream());
});

function onError (err) {
  let gutil = require('gulp-util');
  let messageFormatted = err.messageFormatted;
  let message = new gutil.PluginError('gulp-sass', messageFormatted).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
}
