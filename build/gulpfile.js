
//------------------------------------
// sass
//------------------------------------

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const { } = require('gulp');
const templatesArr = [
  'webi-school',
  'classic'
]
function clean(cb) {
  del(['../prod'], {
    force: true
  })

  cb();
}
function style(cb) {
  let counter = 0;
  templatesArr.forEach((item) => {
    gulp.src(`../gallery/${item}/**/*.scss`)
      .pipe(sass())
      .pipe(gulp.dest(`../prod/${item}`))
      .on('error', cb)
      .on('end', () => {
        counter += 1;
        if (counter >= templatesArr.length) {
          cb();
        }
      });
  })
}

function copyFiles(cb) {
  templatesArr.forEach((item) => {
    setTimeout(() => {
      gulp.src([`../gallery/${item}/**/**.*`, `!../gallery/${item}/**/*.scss`])
        .pipe(gulp.dest(`../prod/${item}`))
        .on('end', () => {
          cb();
        })
    }, 500);
  })
}
function watch() {
  gulp.watch('../gallery/**/**.scss', gulp.series(clean, copyFiles, style));
  gulp.watch('../gallery/**/**.html', gulp.series(clean, copyFiles, style));
  gulp.watch('../gallery/**/**.js', gulp.series(clean, copyFiles, style));
  gulp.watch('../gallery/**/img/**.**', gulp.series(clean, copyFiles, style));
}
exports.default = gulp.task('default', gulp.series(clean, copyFiles, style));
exports.watch = watch;


