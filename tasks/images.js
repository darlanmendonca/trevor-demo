'use strict';

let gulp = require('gulp');
let config = require('../config.js');

gulp.task('images', function() {
  gulp
    .src(config.imgs.src)
    .pipe(gulp.dest(config.imgs.dest));
});
