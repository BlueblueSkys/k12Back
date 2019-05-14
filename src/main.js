// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import axios from 'axios'
Vue.use(VueRouter);

const router = new VueRouter(routerConfig);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
import ElementUI from 'element-ui'

import '../node_modules/element-ui/lib/theme-chalk/index.css'
// var editor = new E('#editor');
// 或者 var editor = new E( document.getElementById('editor') )
// editor.create();

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
