import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import { client } from '../config/default'
import browserSync from 'browser-sync'

const $ = plugins()

gulp.task('icons-color', () => {
  return gulp.src(client.icons.input.color)
    .pipe($.svgmin())
    .pipe($.svgSprite({
      mode: {
        symbol: {
          dest: '',
          sprite: 'color.svg'
        }
      },
      shape: {
        id: {
          separator: '-',
          generator: (name) => {
            const newName = name.replace('src/icons/color', '').replace('.svg', '').replace(/\//g, '-')
            return newName
          }
        }
      }
    }))
    .pipe(gulp.dest(client.icons.output))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }))
})

gulp.task('icons-no-color', () => {
  return gulp.src(client.icons.input.noColor)
    .pipe($.svgmin())
    .pipe($.svgSprite({
      mode: {
        symbol: {
          dest: '',
          sprite: 'no-color.svg'
        }
      },
      shape: {
        id: {
          separator: '-',
          generator: (name) => {
            const newName = name.replace('src/icons/no-color', '').replace('.svg', '').replace(/\//g, '-')
            return newName
          }
        }
      }
    }))
    .pipe($.cheerio({
      run: function run (jquery) {
        jquery('[fill]').removeAttr('fill')
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .pipe(gulp.dest(client.icons.output))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }))
})

gulp.task('icons', ['icons-no-color', 'icons-color'])
