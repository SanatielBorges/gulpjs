const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compileSass() {
  return src('D:/EBAC/gulpjs/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('D:/EBAC/gulpjs/styles'));
}

function compressImages() {
  return src('D:/EBAC/gulpjs/img/**/*')
    .pipe(imagemin())
    .pipe(dest('D:/EBAC/gulpjs/img'));
}

function compressJS() {
  return src('D:/EBAC/gulpjs/js/**/*.js')
    .pipe(uglify())
    .pipe(dest('D:/EBAC/gulpjs/js'));
}

exports.default = series(compileSass, compressImages, compressJS);
