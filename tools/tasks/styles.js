import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import { client, options } from '../config/default'
import postscssAssets from 'postcss-assets'
import postcssNext from 'postcss-cssnext'
import postcssShort from 'postcss-short'
import postcssUniqueSelectors from 'postcss-unique-selectors'
import browserSync from 'browser-sync'

const $ = plugins()
const projectRoot = '/rg-boilerplate'
const assetPath = '/wp-content/themes/rg-boilerplate/static/images/'

gulp.task('sasslint', () => {
  return gulp.src(client.lint.styles.input)
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
})

gulp.task('styles', ['sasslint'], () => {
  return gulp.src(client.styles.input)
    .pipe($.sassGlob())
    .pipe(!options.minify ? $.sourcemaps.init() : $.util.noop())
    .pipe($.sass({
      indentedSyntax: true,
      includePaths: './node_modules/bootstrap-sass/assets/stylesheets'
    }))
    .on('error', $.notify.onError())
    .pipe($.postcss([
      // # shorthands
      postcssShort,
      // # images
      // # https://github.com/assetsjs/postcss-assets
      postscssAssets({
        basePath: 'src/images',
        baseUrl: options.minify ? assetPath : projectRoot + assetPath,
        // loadPaths: ['src/images', 'src/fonts'],
        cachebuster: options.minify === true
      }),
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
      // --------------------
      mergeRules: false
    }) : $.util.noop())
    .pipe($.rename('main.css'))
    .pipe(gulp.dest(client.styles.output))
    .pipe(browserSync.reload({
      stream: true
    }))
})
