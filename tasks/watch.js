'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let gulpSync = require('gulp-sync')(gulp);


gulp.task('watch', function() {
	gulp.watch(config.views.src, gulpSync.sync(['views', 'reload']));

  gulp.watch(config.templates.src, gulpSync.sync(['templates', 'reload']));

	gulp.watch(config.styles.watch, ['styles']);

	gulp.watch(config.scripts.src, gulpSync.sync(['scripts', 'reload']));

	gulp.watch(config.lintScripts, ['lint']);

	gulp.watch('./bower.json', ['dependencies', 'styles']);
});
