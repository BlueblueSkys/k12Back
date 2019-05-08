// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
Vue.use(VueRouter);


Vue.config.productionTip = false;
const router = new VueRouter(routerConfig);
/* eslint-disable no-new */
new Vue({
  router:router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
