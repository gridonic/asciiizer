<p align="center"><img src="https://gridonic.github.io/assets/images/logos/vue-webpack.svg" height="128"></p>

# ES6+ and Vue.js and webpack

This setup uses [webpack] as the module bundler, [Babel] for transpiling and comes with [Vue.js] as the underlying framework which brings…

- [Asynchronous] loading of components
- [Code-splitting] to serve only needed files
- Encapsulation of styles aka [scoped css]

Have fun! ✌️

## Build setup

``` bash
# install dependencies
npm install

# build for development
npm run build

# build for production
npm run build:prod

# serve with hot reload at localhost:8080
npm run watch

# tests if the javascript files would build without errors
npm run test
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

[webpack]: https://webpack.js.org/
[code-splitting]: https://webpack.js.org/guides/code-splitting/#on-demand-code-splitting
[Vue.js]: https://vuejs.org/
[asynchronous]: https://vuejs.org/v2/guide/components.html#Async-Components
[scoped css]: https://vue-loader.vuejs.org/en/features/scoped-css.html
[Babel]: https://babeljs.io/

##  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>
