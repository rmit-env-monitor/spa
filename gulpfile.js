const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')

gulp.task('min-css', () => {
    return gulp.src('dist/css/index.css')
        .pipe(cleanCSS())
        .pipe(concat('index.min.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('default', ['min-css'], () => { })