

**Note** that this project requires node v4.x.x or higher and npm 2.14.7. or higher

## Getting Started  

##### MAMP setting  

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



























