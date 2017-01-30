import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import { client } from '../config/seed.config'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import babelify from 'babelify'
import browserSync from 'browser-sync'
const $ = plugins()

gulp.task('lint', () => {
  return gulp.src(client.lint.scripts.input)
    .pipe($.cached('linting'))
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
})

const compile = (watch) => {
  const bundler = browserify(client.scripts.input, { debug: true }).transform(babelify.configure({ presets: ['es2015'] }))

  const rebundle = () => {
    bundler.bundle()
      .on('error', (err) => {
        console.log(err)
        this.emit('end')
      })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(client.scripts.output))
      .pipe(browserSync.reload({
        stream: true
      }))
  }

  if (watch) {
    bundler.on('update', () => {
      console.log('-> bundling...')
      rebundle()
    })
  }

  rebundle()
}

const watch = () => { return compile(true) }

gulp.task('scripts-build', () => { return compile() })
gulp.task('scripts', () => { return watch() })
