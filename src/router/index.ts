import Vue from 'vue'
import Router from 'vue-router'

import Login from './login'
import Main from './main'

Vue.use(Router)

export default new Router({
  routes: [
    Login, Main
  ]
})
