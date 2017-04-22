const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      rename = require('gulp-rename');

gulp.task('default', () => {
    return gulp.src('src/style.scss')
               .pipe(sass({
                   outputStyle: 'expanded'
               }).on('error', sass.logError))
               .pipe(autoprefixer())
               .pipe(rename({
                   basename: "nastoletni"
                }))
               .pipe(gulp.dest('./dist'))
               .pipe(csso())
               .pipe(rename({
                   suffix: ".min"
                }))
               .pipe(gulp.dest('./dist'));
});