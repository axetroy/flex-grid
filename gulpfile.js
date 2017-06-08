/**
 * Created by axetroy on 17-6-8.
 */
const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('start', ['css'], function() {
  gulp.watch('./src/*.scss', ['css'], function(event) {});
  // 将你的默认的任务代码放在这
  // return gulp.start(['serve']);
});

gulp.task('css', function() {
  return gulp
    .src([path.join('src', 'flex-grid.scss')])
    .pipe($.sass({ sourceComments: true }).on('error', $.sass.logError))
    .pipe(
      $.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    // .pipe($.cleanCss({ compatibility: 'ie9' }))
    .pipe(gulp.dest('./build'));
});

gulp.task('serve', function() {
  return gulp.src('.').pipe(
    $.webserver({
      host: 'localhost',
      // path: 'build',
      port: 6448,
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'build/example.html'
    })
  );
});
