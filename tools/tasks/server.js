import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'localhost:8888/johnson',
    ghostMode: false,
    notify: false,
    open: false
  })
})
