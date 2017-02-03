import gulp from 'gulp'
import { client } from '../config/default'

gulp.task('watch', () => {
  // icons
  gulp.watch(client.icons.input.color, ['icons-color'])
  gulp.watch(client.icons.input.noColor, ['icons-no-color'])

  // styles
  gulp.watch(client.styles.watch, ['styles'])

  // scripts
  gulp.watch(client.scripts.watch, ['scripts'])

  // views
  gulp.watch(client.views.watch, ['views'])

  // images
  gulp.watch(client.images.watch, ['images'])
})
