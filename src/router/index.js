import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)//挂在属性

export default new Router({
  routes: [
    {
      path: '/treeMenu',
      name: 'treeMenu',
      component: resolve =>require(['../components/common/tree-menu/tree-menu.vue'],resolve )
    },{
      path: '/select',
      name: 'select',
      component: resolve =>require(['../components/select.vue'],resolve )
    },
  ]
})
