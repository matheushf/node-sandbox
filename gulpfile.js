var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var gutil = require('gulp-util');
var refresh = require('gulp-refresh');

var srcJs = [
        '*.js',
        'model/*.js',
        'routes/*.js'
    ],
    srcPug = [
        'views/**/*.pug'
    ];

var src = srcJs.concat(srcPug);

gulp.task('jshint', function () {
    return gulp.src(srcJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(refresh());
});

gulp.task('reload', function() {
    return gulp.src(srcPug)
        .pipe(refresh());
});


gulp.task('watch', function () {
    refresh.listen();
    refresh.options.quiet = true;
    
    gulp.watch(src, ['jshint', 'reload']);
});