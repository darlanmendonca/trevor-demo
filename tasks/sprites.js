'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let spritesmith = require('gulp.spritesmith');
let config = require('../config.js');

let options = {
  imgName: 'sprites.png',
  cssName: 'sprite-vars.scss',
  imgPath: '../imgs/sprites/sprites.png',
  algorithm: 'binary-tree',
  engine: 'pngsmith',
  cssVarMap: function (sprite) {
    sprite.name = 'sprite-'+sprite.name;
  }
};

gulp.task('sprites', function() {
  let sprite = gulp.src(config.sprites.src)
    .pipe(plumber())
    .pipe(spritesmith(options));

  sprite.img.pipe(gulp.dest(config.sprites.dest));
  sprite.css.pipe(gulp.dest('./client/styles/components/'));
});
