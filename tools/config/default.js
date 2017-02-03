export const options = {
  minify: process.env.NODE_ENV === 'production' ? true : false
};

export const client = {
  lint: {
    styles: {
      input: ['src/main.sass', 'src/**/*.{scss,sass}', 'src/sass/util/maps.sass', '!src/sass/_settings.scss', '!src/sass/vendors/**/*.{scss,sass}']
    },
    scripts: {
      input: ['gulpfile.babel.js', 'tasks/**/*.js', 'src/js/**/*.js']
    }
  },
  scripts: {
    input: ['src/main.js'],
    output: 'static/javascripts',
    watch: ['src/main.js', 'src/**/*.js']
  },
  styles: {
    input: ['src/main.sass'],
    output: 'static/css',
    watch: ['src/main.sass', 'src/**/*.{sass,scss}'],
    vendors: ['node_modules/foundation-sites/scss/foundation.scss']
  },
  views: {
    input: {
      layouts: ['src/layout/layout.pug', 'src/pages/**/*.pug'],
      components: ['src/components/**/*.pug']
    },
    output: {
      layouts: 'views',
      components: 'views/components'
    },
    watch: ['src/**/*.pug']
  },
  fonts: {
    input: ['src/fonts/**/*.*'],
    output: 'static/fonts'
  },
  images: {
    input: 'src/images/**/*.*',
    output: 'static/images',
    watch: 'src/images/**/*.*'
  },
  icons: {
    input: {
      color: 'src/icons/color/*.svg',
      noColor: 'src/icons/no-color/*.svg'
    },
    output: 'views/icons',
    watch: 'src/icons/**/*.svg'
  }
}