import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import { client } from '../config/seed.config'
import browserSync from 'browser-sync'

const $ = plugins()

gulp.task('images-main', () => {
  return gulp.src(client.images.input)
    .pipe($.newer(client.images.output))
    .pipe($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe($.flatten())
    .pipe(gulp.dest(client.images.output))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }))
})

gulp.task('images', ['images-main'])
