import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import { client, options } from '../config/seed.config'
import runSequence from 'run-sequence'
import browserSync from 'browser-sync'

const $ = plugins()

gulp.task('views-templates', () => {
  return gulp.src(client.views.inputViews)
    .pipe($.data(function(file) {
      if (!options.minify) {
        return require('../data/env-dev.json')
      }
      return require('../data/env-prod.json')
    }))
    .pipe($.plumber())
    .pipe($.cached('pug'))
    .pipe($.pug({
      pretty: !options.minify
    }))
    .pipe($.flatten())
    .pipe($.rename((file) => {
      const f = file
      f.extname = '.twig'
      return f
    }))
    .pipe(gulp.dest(client.views.outputViews))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('views-components', () => {
  return gulp.src(client.views.inputComponents)
    .pipe($.data(function(file) {
      if (!options.minify) {
        return require('../data/env-dev.json')
      }
      return require('../data/env-prod.json')
    }))
    .pipe($.plumber())
    .pipe($.cached('pug'))
    .pipe($.pug({
      pretty: !options.minify
    }))
    .pipe($.flatten())
    .pipe($.rename((file) => {
      const f = file
      f.extname = '.twig'
      return f
    }))
    .pipe(gulp.dest(client.views.outputComponents))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('views', () => {
  runSequence('views-templates', 'views-components')
})
