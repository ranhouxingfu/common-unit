// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import './assets/css/common.css'
import searchSelect from './components/common/search-select' //下拉搜索组件 
Vue.config.productionTip = false

/*全局组件*/
Vue.component('searchSelect',searchSelect)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
