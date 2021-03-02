
//------------------------------------
// sass
//------------------------------------

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const { } = require('gulp');

function clean(cb) {
  del(['../prod'], {
    force: true
  })
  cb();
}
function style(cb) {
  gulp.src(`../dev/**/*.scss`)
    .pipe(sass())
    .pipe(gulp.dest(`../prod`))
    .on('error', cb)
    .on('end', () => {
      cb()
    });
}

function copyFiles(cb) {
  setTimeout(() => {
    gulp.src([`../dev/**/**.*`, `!../dev/**/*.scss`])
      .pipe(gulp.dest(`../prod`))
      .on('end', () => {
        cb();
      })
  }, 500);
}
function watch() {
  gulp.watch('../dev/**/**.scss', gulp.series(clean, copyFiles, style));
  gulp.watch('../dev/**/**.html', gulp.series(clean, copyFiles, style));
  gulp.watch('../dev/**/**.js', gulp.series(clean, copyFiles, style));
  gulp.watch('../dev/**/img/**.**', gulp.series(clean, copyFiles, style));
}
exports.default = gulp.task('default', gulp.series(clean, copyFiles, style));
exports.watch = watch;


