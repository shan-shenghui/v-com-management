// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/libs/Font-Awesome-3.2.1/css/font-awesome.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/js/autoAddCssfix'

//引入vuex 的store
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)


// 路由跳转
Vue.prototype.$goRoute = function(index) {
  this.$router.push(index)
}

//配置路由页面进入数据加载页面
router.beforeEach((to, from, next) => {
  store.dispatch('changeLoading', true);
  next();
})

router.afterEach(route => {
  store.dispatch('changeLoading', true);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
