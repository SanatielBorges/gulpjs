const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compileSass() {
  return src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/styles'));
}

function compressImages() {
  return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}

function compressJS() {
  return src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(dest('./dist/js'));
}

exports.default = series(compileSass, compressImages, compressJS);
