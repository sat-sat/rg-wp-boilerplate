import gulp from 'gulp'
import del from 'del'

gulp.task('delete', (done) => {
  del.sync(['static', 'views'])
  done()
})
