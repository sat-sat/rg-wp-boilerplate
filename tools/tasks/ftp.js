import gulp from 'gulp'
import ftp from 'vinyl-ftp'
import plugins from 'gulp-load-plugins'
import { client, options } from '../config/default'

const themePath = './goorthopasadena.roostertest3.com/wp-content/themes/Avada-Child-Theme'
const $ = plugins()

const conn = ftp.create({
	host: 'ftp.roostertest3.com',
  user: 'admin_rg',
	password: 'xSx0k6~0',
	log: $.util.log
})

gulp.task('ftp-styles', () => {
	return gulp.src(client.styles.ftp, {base: '.', buffer: false})
		.pipe(conn.newer(themePath))
		.pipe(conn.dest(themePath))
})

gulp.task('ftp-functions', () => {
	return gulp.src(client.functions.ftp, {base: '.', buffer: false})
		.pipe(conn.newer(themePath))
		.pipe(conn.dest(themePath))
})