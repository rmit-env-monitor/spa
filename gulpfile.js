const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')

gulp.task('min-css', () => {
    return gulp.src('dist/css/index.css')
        .pipe(cleanCSS())
        .pipe(concat('index.min.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('sass', () => {
    return gulp.src('./styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('default', ['min-css'], () => { })
gulp.task('sass:watch', () => {
    gulp.watch('./styles/*.scss', ['sass']);
})