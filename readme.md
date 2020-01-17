# Know The Weather
It's a simple weather knowing app, which can diplay weather in your City|Town|Village. Based on React.js
## How to install
```
# Clone this project
git clone https://github.com/egorbabintcev/know-the-weather.git

# Select directory
cd know-the-weather

# Setup all dependencies
yarn

# Launch server with live reload on http://localhost:8080
yarn build:dev

# Launch production build, output in the public/ folder
yarn build:prod
```
## Technologies used
- Sass/scss
- Pug
- Eslint (on production)
- Babel
## Directory structure
- `src/assets/sass`   custom styles for pages | entry point is main.sass
- `src/views/pages`   custom pages markup
- `src/views/includes`  templates to include to markup
- `src/views/layouts`   base layouts for pages
- `src/js`  scripts for your website | entry point is main.js
- `src/js/components`   components for your react app
- `src/assets/img`  put your images here
- `src/assets/fonts`  put your fonts here
- `src/other`   put your static files (like sitemap.xml, favicon.ico or robots.txt) here
