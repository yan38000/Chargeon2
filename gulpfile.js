const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const minify = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const terser = require('gulp-terser');
const { series } = require('gulp');


function style(){
    return gulp.src('./client/src/styles/**/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(prefix())
        .pipe(gulp.dest('./client/build/styles'))
        .pipe(browserSync.stream());
}
function js(){
    return gulp.src('./client/src/scripts/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./client/build/scripts'))
}
function start(){
    gulp.watch('./client/src/scripts/**/*.js' , js);
    gulp.watch('./client/src/styles/**/*.scss' , style);
    
    
}

exports.default = series(
    style,
    js,
    start
)