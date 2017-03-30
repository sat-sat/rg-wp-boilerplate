import gulp from 'gulp'
import { client } from '../config/default'

gulp.task('videos', () => {
  return gulp.src(client.videos.input)
    .pipe(gulp.dest(client.videos.output))
})