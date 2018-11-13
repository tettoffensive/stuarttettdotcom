var gulp = require('gulp');
var babel = require('gulp-babel');
var debug = require('gulp-debug');

var spawn = require('child_process').spawn;
var run = require('gulp-run-command').default;

var sass = require('gulp-sass');
var haml = require('gulp-ruby-haml');

var htmltidy = require('gulp-htmltidy');

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var svgo = require('gulp-svgo');


var del = require('del');

gulp.task('sass', function(){
  return gulp.src('public/**/*.scss')
    .pipe(sass({includePaths: ['public/fonts/basier-square']}))
    .pipe(gulp.dest('public'))
});

gulp.task('haml', function () {
  return gulp.src('public/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('public'))
});

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/*.scss', ['useref']);
  gulp.watch('public/fonts/*.scss', ['useref']);
  gulp.watch('public/**/*.haml', ['useref']);
});

gulp.task('_useref', ['haml','sass'], function(){
  return gulp.src('public/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', babel({presets: ['minify']})))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('javascript', function(){
  return gulp.src('public/scripts/prototype.js')
    .pipe(babel({presets: ['minify']}))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('useref', ['haml','sass','_useref'], function(){
  return gulp.src('public/*/index.html')
    .pipe(useref({noAssets: true}))
    .pipe(gulp.dest('dist'))
});

// gulp.task('images', function(){
//   return gulp.src('public/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   // Caching images that ran through imagemin
//   .pipe(cache(imagemin({
//       interlaced: true
//     })))
//   .pipe(gulp.dest('dist/images'))
// });

gulp.task('polymer', ['haml','sass'], run('polymer build'))

gulp.task('copy-polymer', ['polymer'], function() {
  return gulp.src('build/default/public/src/**/*')
  .pipe(gulp.dest('dist/src'))
})

gulp.task('images', function() {
  return gulp.src('public/images/**/*')
  .pipe(svgo({plugins:[{removeViewBox:false}]}))
  .pipe(gulp.dest('dist/images'))
})

gulp.task('webfonts', function() {
  return gulp.src('public/stylesheets/webfonts/**/*')
  .pipe(gulp.dest('dist/stylesheets/webfonts'))
})

gulp.task('fonts', function() {
  return gulp.src('public/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('resume', function() {
  return gulp.src('public/resume.pdf')
  .pipe(gulp.dest('dist/'))
})

gulp.task('bower', ['polymer'], function() {
  return gulp.src('build/default/public/bower_components/**/*')
  .pipe(gulp.dest('dist/bower_components'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist')
})

gulp.task('clean:html', function() {
  return del.sync('public/*/index.html')
})

gulp.task('clean:html2', function() {
  return del.sync('public/*.html')
})

gulp.task('clean:css', function() {
  return del.sync('public/**/*.css')
})

gulp.task('clean:polymer', function() {
  return del.sync('public/build')
})

gulp.task('clean', [
  'clean:dist',
  'clean:html',
  'clean:html2',
  'clean:css',
  'clean:polymer'
])


gulp.task('default', [
 'useref',
 'fonts',
 'webfonts',
 'images',
 'copy-polymer',
 'bower',
 'resume',
 'javascript'
]);
