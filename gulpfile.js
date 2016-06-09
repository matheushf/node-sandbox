var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var gutil = require('gulp-util');

var srcPath = [
    '*.js',
    'model/*.js',
    'routes/*.js'
];

gulp.task('jshint', function () {
    return gulp.src(srcPath)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
    gulp.watch(srcPath, ['jshint']);
});