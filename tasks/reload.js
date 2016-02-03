'use strict';

let gulp = require('gulp');
let config = require('../config.js');

gulp.task('reload', reloadTask);

function reloadTask() {
  config.browserSync.reload();
}
