import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('build', (done) => {
  if (process.env.NODE_ENV === 'development') {
    runSequence('delete', 'images', 'fonts', 'icons', 'videos', ['styles', 'lint', 'views'], 'scripts', 'default', done)
  } else {
    runSequence('delete', 'images', 'fonts', 'icons', 'videos', ['styles', 'lint', 'views'], 'scripts', done)
  }
})

gulp.task('default', (done) => {
  runSequence('browser-sync', 'watch', done)
})
