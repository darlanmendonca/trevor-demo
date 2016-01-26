'use strict';

let gulp = require('gulp');
let gulpConfig = require('../gulp.config.js');

gulp.task('watch', function() {
	gulp.watch(gulpConfig.views.src, [
		'views',
		gulpConfig.browserSync.reload
	]);

  gulp.watch(gulpConfig.templates.src, [
    'templates',
    gulpConfig.browserSync.reload
  ]);

	gulp.watch(gulpConfig.styles.watch, ['styles']);

	gulp.watch(gulpConfig.scripts.src, [
		'scripts',
		gulpConfig.browserSync.reload
	]);

	gulp.watch(gulpConfig.lintScripts, ['lint']);

	gulp.watch('./bower.json', [
		'dependencies',
		'styles'
	]);
});
