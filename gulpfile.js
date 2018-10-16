var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var haml = require('gulp-ruby-haml');

gulp.task('sass', function(){
  return gulp.src('public/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public'))
});

gulp.task('haml', function () {
  gulp.src('public/**/*.haml')
    .pipe(haml({format: 'xhtml'}))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/*.scss', ['sass']);
  gulp.watch('public/fonts/*.scss', ['sass']);
  gulp.watch('public/**/*.haml', ['haml']);
});

gulp.task('build', [
 'sass',
 'haml'
]);
