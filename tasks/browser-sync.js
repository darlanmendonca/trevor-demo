'use strict';

let gulp = require('gulp');
let historyApiFallback = require('connect-history-api-fallback');
let gulpConfig = require('../gulp.config.js');
let browserSync = gulpConfig.browserSync;
let argv = require('yargs').argv;

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './public'
		},
		notify: false,
		reloadDelay: 100,
		open: argv.open,
		middleware: [ historyApiFallback() ]
	});
});
