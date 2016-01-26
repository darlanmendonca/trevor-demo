'use strict';

let gulp = require('gulp');
let gulpConfig = require('../gulp.config.js');

gulp.task('images', function() {
  gulp
    .src(gulpConfig.imgs.src)
    .pipe(gulp.dest(gulpConfig.imgs.dest));
});
