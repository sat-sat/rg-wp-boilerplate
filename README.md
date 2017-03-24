## RG-Boilerplate Overview  
Server: LAMP via [`MAMP`](https://www.mamp.info/en/)  
Tooling: [`gulp`](https://github.com/gulpjs/gulp/blob/master/docs/API.md)  
Methodologies: [`BEM`](https://en.bem.info/methodology/quick-start/) -> sass, `componentization` -> general frontend dev process  
Preprocessors: [`timber`](http://timber.github.io/timber/#your-first-timber-project) + [`twig`](http://twig.sensiolabs.org/) -> php, [`pug`](https://pugjs.org/api/getting-started.html) -> html, [`sass`](http://sass-lang.com/guide) + [`scss`](http://sass-lang.com/guide) -> css  
Package Managers: [`yarn`](https://yarnpkg.com/en/), [`composer`](https://getcomposer.org/doc/00-intro.md)  
Frameworks: [`bootstrap`](http://getbootstrap.com/css/)  
Javascript: [`ES6`](https://github.com/lukehoban/es6features)  
Linters: [`gulp-standard`](https://www.npmjs.com/package/gulp-standard) -> javascript, [`gulp-sass-lint`](https://www.npmjs.com/package/gulp-sass-lint) -> sass  

### Folder Structure Overview
**WordPress Specific**
```
# theme core files
./functions.php
./index.php
./page.php
./style.css

# additional php function snippets 
./functions/

# twig template output folder (takes care of frontend templating)
./views/
```
**Tooling Specific**
```
# gulp tasks
./gulpfile.babel.js
./tools/tasks/

# config file
./tools/congif/default.js

# pug data for simple global url routing
./tools/data/env-dev.json
./tools/data/env-prod.json
```

**Development/Build Specific**  
All development related folders/files are located in the `./src` folder.
```
./src/
  |-- components/
      |-- components.js  # component script export file
  |-- fonts/  # place project fonts
      |-- vendor/  # place vendor specific fonts here (eg. slick-carousel)
  |-- icons/
      |-- color/  # place all color svg
      |-- no-color/  # place all non-color svg (usefull when manuallyg changing fill color via sass)
  |-- images/
  |-- layout/
      |-- layout.pug  # base template file
  |-- pages/  # place all page layout component files
  |-- sass/
      |-- base/
          |-- base.sass  # base project styling (ie. body or general svg sprite styles)
      |-- utilities  # basic utility sass files (ie. mixins, maps, functions, etc)
      |-- vendors  # vendor specific styles + imports (ie. bootstrap, slick-carousel, etc)
  |-- shared/  # place global javascript functions/components (ie. modals)
  |-- main.js  # javascript root
  |-- main.sass  # sass root

```
## Getting Started  

#### MAMP setting  

**Ports** 
- Apache Port: 8888
- Nginx Port: 7888
- MySQL Port: 8889


Download repo and install dependencies
```
cd /path/to/wordpress/theme
git clone git@github.com:roostergrin/rg-boilderplate-wp.git

# install npm and WordPress dependencies
yarn install
composer install
```

Update gulp tasks in `./tools/tasks`
```
# server.js: line 6
proxy: 'localhost:8888/your-project-root'

# styles.js: line 11 + 12
const projectRoot = 'your-project-root'
const assetPath = '/wp-content/themes/your-theme-name/static/images'
```

Basic gulp commands
```
# dev build
npm run gulp build

# start server
npm start

# production build
gulp build --env production
```



























