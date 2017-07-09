// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Resource from 'vue-resource';
import marked from 'marked';
import App from './App';
import router from './router';


Vue.use(Resource);
Vue.http.options.root = 'https://api.github.com';
Vue.http.headers.common.Accept = 'application/vnd.github.v3+json';
require('bulma/css/bulma.css');

Vue.config.productionTip = false;


Vue.mixin({
  makeItMarkdown(str) {
    return marked(str);
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
