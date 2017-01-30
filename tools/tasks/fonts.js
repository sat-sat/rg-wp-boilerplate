import gulp from 'gulp'
import { client } from '../config/seed.config'

gulp.task('fonts', () => {
  return gulp.src(client.fonts.input)
    .pipe(gulp.dest(client.fonts.output))
})
