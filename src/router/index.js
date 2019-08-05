import Vue from 'vue'
import Router from 'vue-router'
let Home=()=>import("../page/Home")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
