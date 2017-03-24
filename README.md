

**Note** that this project requires node v4.x.x or higher and npm 2.14.7. or higher

## RG-Boilerplate Overview  
Server: `LAMP via MAMP`  
Tooling: `gulp`  
Methodologies: `BEM` -> sass, `componentization` -> general frontend dev process  
Preprocessors: `timber+twig` -> php, `pug` -> html, `sass + scss` -> css  
Package Managers: `yarn`, `composer`  
Frameworks: `bootstrap`  
Javascript: `ES6`  

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


**Note** that this project uses the [twig] template engine via [timber] for its views.

[twig]: <http://twig.sensiolabs.org/?>
[timber]: <http://timber.github.io/timber/>



























