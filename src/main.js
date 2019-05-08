// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import 'bootstrap3/dist/css/bootstrap.css'
import '../static/css/app.css'
import $ from 'jquery'
import 'bootstrap'

Vue.use(VueRouter);

const router = new VueRouter(routerConfig);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
