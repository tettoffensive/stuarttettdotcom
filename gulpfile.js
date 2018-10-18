var gulp = require('gulp'),
    babel = require('gulp-babel');

var sass = require('gulp-sass');
var haml = require('gulp-ruby-haml');

var htmltidy = require('gulp-htmltidy');

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');


var del = require('del');

gulp.task('sass', function(){
  return gulp.src('public/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public'))
});

gulp.task('haml', function () {
  gulp.src('public/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/*.scss', ['sass']);
  gulp.watch('public/fonts/*.scss', ['sass']);
  gulp.watch('public/**/*.haml', ['haml']);
});

gulp.task('_useref', function(){
  return gulp.src('public/index.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', babel({presets: ['minify']})))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('useref', ['_useref'], function(){
  return gulp.src('public/*/index.html')
    .pipe(useref({noAssets: true}))
    // Minifies only if it's a JavaScript file
    // .pipe(gulpIf('*.html', htmltidy({outputXhtml: true})))
    // .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('public/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('webfonts', function() {
  return gulp.src('public/stylesheets/webfonts')
  .pipe(gulp.dest('dist/stylesheets'))
})

gulp.task('bower', function() {
  return gulp.src('public/bower_components/**/*')
  .pipe(gulp.dest('dist/bower_components'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('build', [
 'sass',
 'haml',
 'useref',
 'fonts',
 'bower'
]);
