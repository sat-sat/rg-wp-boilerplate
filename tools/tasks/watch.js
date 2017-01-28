import gulp from 'gulp'
import { client, options } from '../config/seed.config'

gulp.task('watch', () => {
	// styles
	gulp.watch(client.styles.watch, ['styles'])
})
