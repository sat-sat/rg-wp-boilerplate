import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import { client, options } from '../config/seed.config'
import browserSync from 'browser-sync'
import postscssAssets from 'postcss-assets'
import postcssNext from 'postcss-cssnext'
import postcssShort from 'postcss-short'
import postcssUniqueSelectors from 'postcss-unique-selectors'

const $ = plugins()

gulp.task('sasslint', () => {
	return gulp.src(client.lint.styles.input)
		.pipe($.sassLint())
		.pipe($.sassLint.format())
		.pipe($.sassLint.failOnError())
})

gulp.task('styles', ['sasslint'], () => {
	return gulp.src(client.styles.input)
		.pipe(!options.minify ? $.sourcemaps.init() : $.util.noop())
		.pipe($.sass({
			indentedSyntax: true
		}))
		.on('error', $.notify.onError())
		.pipe($.postcss([
			// # shorthands
      postcssShort,
      // # images
      // # https://github.com/assetsjs/postcss-assets
      // postscssAssets({
      //   basePath: 'public/client',
      //   baseUrl: options.minify ? `/assets/${process.env.CDN_VERSION}` : '/',
      //   loadPaths: ['images', 'fonts'],
      //   cachebuster: options.minify === true
      // }),
      // # css4 magic
      // # http://cssnext.io/features/
      postcssNext({
        browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
        features: {
          customProperties: false
        }
      }),
      // # replace multiple selectors in one line
      postcssUniqueSelectors
		]))
		.pipe(!options.minify ? $.sourcemaps.write() : $.util.noop())
		.pipe(options.minify ? $.cssnano({
			autoprefixer: false,
			normalizeUrl: false,
			//--------------------
			mergeRules: false
		}) : $.util.noop())
		.pipe($.rename('main.css'))
		.pipe(gulp.dest('css'))
})